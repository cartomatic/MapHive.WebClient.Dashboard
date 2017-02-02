using System;
using System.Collections.Generic;
using System.Configuration;
using System.Drawing.Drawing2D;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Runtime.InteropServices;
using System.Security.Policy;
using System.Threading.Tasks;
using System.Web;

namespace MapHive.WebClient.Dashboard
{
    /// <summary>
    /// Summary description for ClientConfiguration
    /// </summary>
    public class ClientConfiguration : HttpTaskAsyncHandler
    {
        public override async Task ProcessRequestAsync(HttpContext context)
        {
            await MapHive.Server.WebClientConfigurationHelper.GetConfigurationScript(context);
        }
    }
}