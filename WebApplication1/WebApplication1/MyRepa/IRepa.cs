using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.Models;

namespace WebApplication1.MyRepa
{
   public interface IRepa
    {
        public void AddUsersManager();
        public List<RegistrUsers> GetUsers();
        public void AddUsers(RegistrUsers registrUsers);
        public int FindUsers(string Login, string Password);
        public void DeleteUser(int id);



    }
}
