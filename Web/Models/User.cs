using System;
using System.Collections.Generic;

namespace Web.Models
{
    public class User
    {
        public Guid UniqueId { get; set; }
        public string Email { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Password { get; set; }
        public string[] Roles { get; set; }
        public int TimezoneOffset { get; set; }
        public string TwitterUsername { get; set; }
        public long CreateDate { get; set; }
        public long ModifiedDate { get; set; }
        public Dictionary<string, string> SocialNetworks { get; set; }
    }
}