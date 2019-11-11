using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using CoreReactCrudApp.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CoreReactCrudApp.Controllers
{
    
    public class UserController : Controller
    {
        UserDAL obj = new UserDAL();

        [HttpGet]
        [Route("api/User/Index")]
        public IEnumerable<User> Index()
        {
            return obj.GetAllUser();
        }


        [HttpPost]
        [Route("api/User/Create")]
        public int Create(User user)
        {
            return obj.CreateUser(user);
        }

        [HttpGet]
        [Route("api/User/Details/{id}")]
        public User Details(int id)
        {
            return obj.GetUserData(id);
        }

        [HttpPut]
        [Route("api/User/Edit")]
        public int Edit(User user)
        {
            return obj.UpdateUser(user);
        }

        [HttpDelete]
        [Route("api/User/Delete/{id}")]
        public int Delete(int id)
        {
            return obj.DeleteUser(id);
        }
    }
}
