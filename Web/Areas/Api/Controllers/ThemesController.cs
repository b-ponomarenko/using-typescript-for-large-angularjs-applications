using System.Collections.Generic;
using System.Web.Http;
using Web.Services;

namespace Web.Areas.Api.Controllers
{
    [Authorize]
    [RoutePrefix("api/themes")]
    public class ThemesController : ApiController
    {
        readonly ISiteService _siteService;

        public ThemesController(ISiteService siteService)
        {
            _siteService = siteService;
        }

        public IEnumerable<string> Get()
        {
            return _siteService.GetThemes();
        }
    }
}