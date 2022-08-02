using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.Models;
using WebApplication1.MyRepa;

namespace WebApplication1.Controllers
{
    [ApiController]
    [Route("UsersController")]
    public class UsersController : ControllerBase
    {


        private IRepa _repa;

        private readonly ILogger<UsersController> _logger;
        
        public UsersController(ILogger<UsersController> logger, IRepa repa)
        {
            _logger = logger;
            _repa = repa;
        }

        [HttpGet]
        public IEnumerable<RegistrUsers> Get()
        {
            var users = _repa.GetUsers();
            return users;
        }
        [HttpPost]
        public void Post(RegistrUsers users)
        {
            var user = new RegistrUsers()
            {
                Name = users.Name,
                LastName = users.LastName,
                Patronymic = users.Patronymic,
                DateofBirth = users.DateofBirth,
                Email = users.Email,
                Mobile = users.Mobile,
                Password = users.Password,
                Login = users.Login,
                URL = users.URL
            };
          _repa.AddUsers(user);
   
        }
        [Route("/CompareUsers")]
        [HttpPost]
        public int Compare(RegistrUsers users)
        {
            var login = users.Login;
            var pass = users.Password;
            var value = _repa.FindUsers(login,pass);
            return value;
        }
        [Route("/UsersController/{id}")]
        [HttpDelete]
        public void Delete(int id)
        {
            _repa.DeleteUser(id);
        }
    }
}
