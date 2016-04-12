using System;
using Web.Models;

namespace Web.Services
{
    public interface IBlogPostsService
    {
        BlogPost[] GetAll();
        BlogPost Get(Guid uniqueId);
        Guid Create(BlogPost blogPost);
        void Update(Guid uniqueId, BlogPost blogPost);
        void Delete(Guid uniqueId);
        bool SlugIsInUse(string slug);
    }
}
