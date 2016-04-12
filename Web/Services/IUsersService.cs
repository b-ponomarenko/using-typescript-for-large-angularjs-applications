using System;
using Web.Models;

namespace Web.Services
{
    public interface IUsersService
    {
        User[] GetAll();
        User Get(Guid uniqueId);
        Guid Create(User user);
        void Update(Guid uniqueId, User user);
        void Delete(Guid uniqueId);
        bool EmailIsInUse(string email);
    }
}
