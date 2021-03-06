﻿using System.Web.Http;
using Microsoft.Owin.Security.OAuth;
using AngularAzureSearch.WebAPI.Cors;
using System.Web.Routing;

namespace AngularAzureSearch.WebAPI
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services

            // This handles CORS requests globally.
            config.SetCorsPolicyProviderFactory(new CorsPolicyFactory());
            config.EnableCors();

            // Configure Web API to use only bearer token authentication.
            config.SuppressDefaultHostAuthentication();
            config.Filters.Add(new HostAuthenticationFilter(OAuthDefaults.AuthenticationType));

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );

           config.Routes.MapHttpRoute(
                "PostBlobUpload",
                "blobs/upload",
                new { controller = "Blobs", action = "PostBlobUpload" },
                new { httpMethod = new HttpMethodConstraint("POST") }
            );
            
            config.Routes.MapHttpRoute(
                "GetBlobDownload",
                "blobs/{blobId}/download",
                new { controller = "Blobs", action = "GetBlobDownload" },
                new { httpMethod = new HttpMethodConstraint("GET") }
            );
        }
    }
}
