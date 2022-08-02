using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.Entity;
using WebApplication1.Models;

namespace WebApplication1.MyRepa
{
    public class Repa :IRepa
    {
        public void AddUsersManager()
        {
            var manager = new RegistrUsers()
            {
                DateofBirth = "01/11/1999",
                Name = "Dima",
                LastName = "Subota",
                Patronymic = "Andreevich",
                Email = "subotad897@gmail.com",
                Mobile = "0996449798",
                Login = "DimonSub",
                Password = "1234"

            };
            using (var context = new Context())
            {
                context.Users.Add(manager);
                context.SaveChanges();
            }
        }
        public List<RegistrUsers> GetUsers()
        {
            List<RegistrUsers> users;
            using (var context = new Context())
            {
               users = context.Users.ToList() ;
            }
            return users;
        }
        public void AddUsers(RegistrUsers registrUsers)
        {
            
            using (var context = new Context())
            {
                context.Users.Add(registrUsers);
                context.SaveChanges();
            }
            
        }

        public int FindUsers(string Login,string Password)
        {
            using (var context = new Context()) 
            {
                var login = context.Users.Where(c => c.Login == Login).Where(p => p.Password == Password).FirstOrDefault();
                if(login == null)
                {
                    return 2;
                }
                if (login.Password == "1234" && login.Login == "DimonSub")
                {
                    return 0;
                }
                if (login != null)
                {
                    return 1;
                }
                else
                {
                    return 2;
                }
            }
        }

        public void DeleteUser(int id)
        {
            using(var context = new Context())
            {
                var user = context.Users.Where(a => a.Id == id).FirstOrDefault();
                context.Users.Remove(user);
                context.SaveChanges();
            }
        }
    }
}
