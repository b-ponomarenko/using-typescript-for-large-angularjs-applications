using Web.Models;

namespace Web.Services
{
    public interface ISiteService
    {
        Site GetSettings();
        void UpdateSettings(Site site);
        string[] GetThemes();
    }
}