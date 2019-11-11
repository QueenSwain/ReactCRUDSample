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

        //this method will get all the student record
        public IEnumerable<User> GetAllUser()
        {
            return db.User.ToList();
        }

        //this method will add a new User 
        public int CreateUser(User user)
        {
            db.User.Add(user);
            db.SaveChanges();
            return 1;

        }
        //this method will update the existing User record    
        public int UpdateUser(User user)
        {
            db.Entry(user).State = EntityState.Modified;
            db.SaveChanges();
            return 1;
        }
        //this method will get detail of a specific User
        public User GetUserData(int id)
        {
            User user = db.User.Find(id);
            return user;
        }
        //this method will delete the specifig User record    
        public int DeleteUser(int id)
        {
            User user = db.User.Find(id);
            db.User.Remove(user);
            db.SaveChanges();
            return 1;
        }

    }
}
