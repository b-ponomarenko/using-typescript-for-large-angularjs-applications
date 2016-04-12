using System;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;
using Web.Services;

namespace Web.Controllers
{
    [RoutePrefix("")]
    public class HomeController : Controller
    {
        readonly IUsersService _usersService;

        public HomeController(IUsersService usersService)
        {
            _usersService = usersService;
        }

        [Route("")]
        public ActionResult Index()
        {
            return View();
        }

        [Route("login", Name = "login")]
        [HttpGet]
        public ActionResult Login(bool? loginFailed)
        {
            ViewBag.loginFailed = loginFailed ?? false;
            return View();
        }

        [Route("login")]
        [HttpPost]
        public ActionResult Login(string email, string password)
        {
            var user = _usersService.GetAll().FirstOrDefault(i => i.Email == email && i.Password == password);
            if (user == null)
                return RedirectToRoute("login", new { loginFailed = true });
            FormsAuthentication.SetAuthCookie(email, false);
            // Do some cookie stuff to get our UserId to the client app
            Response.Cookies.Add(new HttpCookie("UserId", user.UniqueId.ToString()));
            return RedirectToRoute("");
        }

        [Route("logout", Name = "logout")]
        [HttpGet]
        public ActionResult Logout()
        {
            FormsAuthentication.SignOut();
            // Remove the cookie for the UserId in the client app
            var cookie = new HttpCookie("UserId", string.Empty) { Expires = new DateTime(1999, 1, 1) };
            Response.Cookies.Remove("UserId");
            Response.Cookies.Set(cookie);
            return RedirectToRoute("");
        }

        [Authorize]
        public ActionResult Admin()
        {
            return View();
        }
    }
}