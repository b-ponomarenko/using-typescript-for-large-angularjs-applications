using System.Web.Http;
using Web.Models;
using Web.Services;

namespace Web.Areas.Api.Controllers
{
    [Authorize]
    [RoutePrefix("api/site")]
    public class SiteController : ApiController
    {
        readonly ISiteService _siteService;

        public SiteController(ISiteService siteService)
        {
            _siteService = siteService;
        }

        public Site Get()
        {
            return _siteService.GetSettings();
        }

        public void Put(Site site)
        {
            _siteService.UpdateSettings(site);
        }
    }
}