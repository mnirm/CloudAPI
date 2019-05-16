using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TvRestAPI.Data;
using TvRestAPI.Models;

namespace TvRestAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class ShowController : ControllerBase
    {
        private ShowDbContext _showDbContext;

        public ShowController(ShowDbContext showDbContext)
        {
            _showDbContext = showDbContext;
        }

        [HttpGet]
        public IActionResult Get(string sort)
        {
            IQueryable<Show> shows;
            switch (sort)
            {
                case "asc":
                    shows = _showDbContext.Shows.OrderBy(s => s.Rating);
                    break;
                case "desc":
                    shows = _showDbContext.Shows.OrderByDescending(s => s.Rating);
                    break;
                default:
                    shows = _showDbContext.Shows.Include(s => s.Actors);
                    break;
            }

            return Ok(shows);
        }

        [HttpGet("{id}", Name = "Get")]
        public IActionResult Get(int id)
        {
            var show = _showDbContext.Shows.Find(id);
            if (show == null)
            {
                return NotFound("No record found");
            }
            return Ok(show);
        }

        [HttpGet("[action]")]
        public IActionResult Page(int? pageNumber, int? pageSize)
        {
            var shows = _showDbContext.Shows;
            var currentPageNumber = pageNumber ?? 1;
            var currentPageSize = pageSize ?? 5;
            return Ok(shows.Skip((currentPageNumber - 1) * currentPageSize).Take(currentPageSize));
        }

        [HttpGet]
        [Route("[action]")]
        public IActionResult Type(string type)
        {
            var shows = _showDbContext.Shows.Where(s => s.Type.StartsWith(type));
            return Ok(shows);
        }

        [HttpPost]
        public IActionResult Post([FromBody] Show show)
        {
            _showDbContext.Shows.Add(show);
            _showDbContext.SaveChanges();
            return StatusCode(StatusCodes.Status201Created);
        }

        [HttpPut ("{id}")]
        public IActionResult Put(int id, [FromBody] Show show)
        {
            var entity = _showDbContext.Shows.Find(id);
            if (entity == null)
            {
                return NotFound("Resource is not found");
            }
            else
            {
                entity.Name = show.Name;
                entity.Rating = show.Rating;
                entity.Type = show.Type;
                entity.Actors = show.Actors;
                _showDbContext.SaveChanges();

                return Ok("Update show successfully");
            }
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var show = _showDbContext.Shows.Find(id);
            if (show == null)
            {
                return NotFound("No record found against this id.");
            }
            else
            {
                _showDbContext.Shows.Remove(show);
                _showDbContext.SaveChanges();
                return Ok("Show deleted.");
            }
        }
    }
}
