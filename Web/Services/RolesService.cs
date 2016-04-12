namespace Web.Services
{
    public class RolesService : IRolesService
    {
        public string[] GetAll()
        {
            return new[] { "Administrator", "Author", "Editor" };
        }
    }
}