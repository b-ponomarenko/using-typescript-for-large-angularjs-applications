using System;
using System.Collections.Generic;
using System.Linq;
using Web.Models;
using Web.Helpers;

namespace Web.Services
{
    public class BlogPostsService : IBlogPostsService
    {
        public BlogPost[] GetAll()
        {
            return BlogPosts.ToArray();
        }

        public BlogPost Get(Guid uniqueId)
        {
            return BlogPosts.FirstOrDefault(i => i.UniqueId == uniqueId);
        }

        public Guid Create(BlogPost blogPost)
        {
            blogPost.UniqueId = Guid.NewGuid();
            blogPost.CreateDate = blogPost.ModifiedDate = DateTime.Now.ToJavaScriptMilliseconds();
            BlogPosts.Add(blogPost);
            return blogPost.UniqueId;
        }

        public void Update(Guid uniqueId, BlogPost blogPost)
        {
            var blogPostToUpdate = BlogPosts.FirstOrDefault(i => i.UniqueId == uniqueId);
            if (blogPostToUpdate == null) return;
            blogPostToUpdate.Title = blogPost.Title ?? blogPostToUpdate.Title;
            blogPostToUpdate.Description = blogPost.Description ?? blogPostToUpdate.Description;
            blogPostToUpdate.Body = blogPost.Body ?? blogPostToUpdate.Body;
            blogPostToUpdate.PublishedDate = blogPost.PublishedDate;
            blogPostToUpdate.Slug = blogPost.Slug ?? blogPostToUpdate.Slug;
            blogPostToUpdate.Tags = blogPost.Tags ?? blogPostToUpdate.Tags;
            blogPostToUpdate.ModifiedDate = DateTime.Now.ToJavaScriptMilliseconds();
        }

        public void Delete(Guid uniqueId)
        {
            var blogPostToDelete = BlogPosts.FirstOrDefault(i => i.UniqueId == uniqueId);
            if (blogPostToDelete != null)
            {
                BlogPosts.Remove(blogPostToDelete);
            }
        }

        public bool SlugIsInUse(string slug)
        {
            return BlogPosts.Any(i => i.Slug.ToLower() == slug.ToLower());
        }

        static readonly List<BlogPost> BlogPosts = new List<BlogPost> {
            new BlogPost
            {
                UniqueId = new Guid("f59bd3e1095e4b77a7118468b42ff822"),
                Title = "Blog Post One",
                Description = "The very first post.",
                Body = @"## Introductions and Welcome
Hello there and welcome to the first post. Here is some code:

    namespace Models
    {
        public class Toy
        {
            public Toy() {}
        }
    }

Our CEO believe that:

> This is the start of something grand!

We completely *agree* with the CEO!",
                CreateDate = 1413755783414,
                ModifiedDate = 1413755783414,
                PublishedDate = 1413755783414,
                Slug = "blog-post-one",
                Tags = new [] {"first","hype"}
            },
            new BlogPost
            {
                UniqueId = new Guid("ace1cc26762244c19a9275a98539669f"),
                Title = "Blog Post Two",
                Description = "This is the second post in a series of posts.",
                Body =  @"## Phase Two
This is our second post in our series, **outlining** our feature release plan:

1. Version 1.0 with basic functionality.
2. Version 1.1 with animations.
3. Version 1.3 with bug fixes.
4. Version 2.0 to introduce real time excitement.

Our CEO believe that:

> The world will be blown away by *Version 2.0*!

We **have faith** the CEO!",
                CreateDate = 1413755848359,
                ModifiedDate = 1413755848359,
                PublishedDate = 1413755848359,
                Slug = "blog-post-two",
                Tags = new [] {"second","series","technology"}
            },
            new BlogPost
            {
                UniqueId = new Guid("d6f74ff5f3c54235bb88def0488fa463"),
                Title = "Blog Post One",
                Description = "The final post in our initial post series. Here we focus on design.",
                Body = @"## The Final Chapter
This is the endgame plan and exit strategy:

### Build a Massive User Base

We will piggyback on social media and grow like wildfire!

### Attract Investors

Our *MVP* at each version will be so outstanding that everyone will flock to give us money.

### Sell, Sell, Sell

The company will be worth a bundle and we will sell to the highest bidder.

Our CEO believe that:

> My vision will make us all retire young!

We shall see...",
                CreateDate = 1413755931217,
                ModifiedDate = 1413755931217,
                PublishedDate = 1413755931217,
                Slug = "blog-post-three",
                Tags = new [] {"third","goals","profits & new heights","we can't fail"}
            }
        };
    }
}