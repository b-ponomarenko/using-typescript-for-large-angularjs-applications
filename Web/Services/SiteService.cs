using Web.Models;

namespace Web.Services
{
    public class SiteService : ISiteService
    {
        static readonly Site Site = new Site {
                Title = "Wraith Blog",
                Description = "A .NET blog engine for the next generation.",
                ThemeName = "spooky"
            };

        static readonly string[] Themes = { "spooky", "developer" };

        public Site GetSettings()
        {
            return Site;
        }

        public void UpdateSettings(Site site)
        {
            Site.Title = site.Title ?? Site.Title;
            Site.Description = site.Description ?? Site.Description;
            Site.ThemeName = site.ThemeName ?? Site.ThemeName;
        }


        public string[] GetThemes()
        {
            return Themes;
        }
    }
}