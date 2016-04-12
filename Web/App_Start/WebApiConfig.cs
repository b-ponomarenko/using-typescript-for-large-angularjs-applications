using Newtonsoft.Json.Serialization;
using System.Net.Http.Formatting;
using System.Web.Http;

namespace Web
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            config.MapHttpAttributeRoutes();
            config.Formatters.Clear();
            config.Formatters.Add(new JsonMediaTypeFormatter());
            config.Routes.MapHttpRoute(
                "DefaultApi", 
                "api/{controller}/{id}", 
                new { id = RouteParameter.Optional }
            );
            var jsonformatter = GlobalConfiguration.Configuration.Formatters.JsonFormatter;
            jsonformatter.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
        }
    }
}
