using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoreReactCrudApp.Models
{
    public class UserDAL
    {
        ApplicationDBContext db = new ApplicationDBContext();

        //Select All
        public IEnumerable<User> GetAllUser()
        {
            return db.User.ToList();
        }

       //Insert User
        public int CreateUser(User user)
        {
            db.User.Add(user);
            db.SaveChanges();
            return 1;

        }
        
        //Update User
        public int UpdateUser(User user)
        {
            db.Entry(user).State = EntityState.Modified;
            db.SaveChanges();
            return 1;
        }


        //Get data by UserId
        public User GetUserData(int id)
        {
            User user = db.User.Find(id);
            return user;
        }
        //Delete data by UserId  
        public int DeleteUser(int id)
        {
            User user = db.User.Find(id);
            db.User.Remove(user);
            db.SaveChanges();
            return 1;
        }

    }
}
