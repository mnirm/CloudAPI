using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Policy;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TvRestAPI.Data;
using TvRestAPI.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TvRestAPI.Controllers
{
    [Route("api/[controller]")]
    public class ActorController : Controller
    {
        private ShowDbContext _showDbContext;

        public ActorController(ShowDbContext showDbContext)
        {
            _showDbContext = showDbContext;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_showDbContext.Actor);
        }

        [HttpPost]
        public IActionResult Post([FromBody] Actor actor)
        {
            _showDbContext.Actor.Add(actor);
            _showDbContext.SaveChanges();
            return StatusCode(StatusCodes.Status201Created);
        }
    }
}
