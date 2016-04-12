using System;

namespace Web.Models
{
    public class BlogPost
    {
        public Guid UniqueId { get; set; }
        public string Slug { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Body { get; set; }
        public string[] Tags { get; set; }
        public long CreateDate { get; set; }
        public long ModifiedDate { get; set; }
        public long? PublishedDate { get; set; }
    }
}