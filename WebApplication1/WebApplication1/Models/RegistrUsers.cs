using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Models
{
    public class RegistrUsers
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string LastName { get; set; }
        public string Patronymic { get; set; }
        public string DateofBirth { get; set; }
        public string Email { get; set; }
        public string Mobile { get; set; }
        public string Login { get; set; }
        public string Password { get; set; }

        public string? URL { get; set; }
    }
}
