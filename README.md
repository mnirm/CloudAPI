# CloudAPI
CloudAPI project for college 2018-2019.
Called an open API from the internet. Dispalyed Everything in an Ionic web application.

## What I learned
- Deployment to Azure
- EF Core
- .NET core 2.2
- Calling apis
- JWT Authentication
- Auth0
- Make post/put/delete calls with a Bearer token through Angular Https.

## Documentation APIs

### TvShow Website
RESTAPI: https://www.tvmaze.com/api

### Rest API Jarno
https://tvshowjarnoapi.azurewebsites.net

#### Zonder Auth0
GET - POST
https://tvshowjarnoapi.azurewebsites.net/api/actor

#### Auth0
GET - POST
https://tvshowjarnoapi.azurewebsites.net/api/show

GET
https://tvshowjarnoapi.azurewebsites.net/api/show/1

GET
https://tvshowjarnoapi.azurewebsites.net/api/show/page?pageNumber=2&pageSize=2

GET
https://tvshowjarnoapi.azurewebsites.net/api/show?sort=asc
- sort=asc or sort=desc

GET
https://tvshowjarnoapi.azurewebsites.net/api/show/type?type=history

PUT
https://tvshowjarnoapi.azurewebsites.net/api/show/1

DELETE
https://tvshowjarnoapi.azurewebsites.net/api/show/1
