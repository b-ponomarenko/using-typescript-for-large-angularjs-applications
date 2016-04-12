using System;
using System.Collections.Generic;
using System.Web.Http;
using Web.Models;
using Web.Services;

namespace Web.Areas.Api.Controllers
{
    [Authorize]
    [RoutePrefix("api/users")]
    public class UsersController : ApiController
    {
        readonly IUsersService _usersService;

        public UsersController(IUsersService usersService)
        {
            _usersService = usersService;
        }

        public IEnumerable<User> Get()
        {
            return _usersService.GetAll();
        }

        [Route("{uniqueId}")]
        public User Get(Guid uniqueId)
        {
            return _usersService.Get(uniqueId);
        }

        public Guid Post(User value)
        {
            return _usersService.Create(value);
        }

        [Route("{uniqueId}")]
        public void Put(Guid uniqueId, User value)
        {
            _usersService.Update(uniqueId, value);
        }

        [Route("{uniqueId}")]
        public void Delete(Guid uniqueId)
        {
            _usersService.Delete(uniqueId);
        }

        [HttpGet]
        [Route("emailisinuse")]
        public bool EmailIsInUse(string email)
        {
            return _usersService.EmailIsInUse(email);
        }
    }
}