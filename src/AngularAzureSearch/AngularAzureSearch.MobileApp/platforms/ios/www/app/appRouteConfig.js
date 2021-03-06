﻿(function () {
    "use strict";

    angular.module('app').config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        var routes = [
            {
                url: '/',
                config: {
                    template: '<d-index></d-index>',
                    reloadOnSearch: false
                }
            },
            {
                url: '/index',
                config: {
                    redirectTo: '/'
                }
            },
            {
                url: '/dashboard',
                config: {
                    template: '<d-dashboard></d-dashboard>',
                    reloadOnSearch: false
                }
            },
            {
                url: '/search',
                config: {
                    template: '<d-search></d-search>',
                    reloadOnSearch: false
                }
            },
            //{
            //    url: '/homes',
            //    config: {
            //        template: '<d-homes></d-homes>',
            //        reloadOnSearch: false
            //    }
            //},
            //{
            //    url: '/trails',
            //    config: {
            //        template: '<d-trails></d-trails>',
            //        reloadOnSearch: false
            //    }
            //}
            {
                url: '/trails-index',
                config: {
                    template: '<d-trails-index></d-trails-index>',
                    controller: "trailsController"
                }
            },
            {
                url: '/managetrails',
                config: {
                    template: '<d-manage-trails></d-manage-trails>',
                    controller: "trailsController"
                }
            },
            {
                url: '/login',
                config: {
                    templateUrl: "/app/loginCtrl/login.html"
                }
            },
            {
                url: '/signup',
                config: {
                    templateUrl: "/app/signupCtrl/signup.html"
                }
            },
            {
                url: '/confirmemail',
                config: {
                    controller: "confirmEmailCtrl",
                    templateUrl: "/app/confirmEmailCtrl/confirmEmail.html"
                }
            },
            {
                url: '/price-tables',
                config: {
                    template: '<d-price-tables></d-price-tables>'
                }
            },
            {
                url: '/gallery',
                config: {
                    template: '<d-gallery></d-gallery>'
                }
            },
            {
                url: '/ui-kit',
                config: {
                    template: '<d-ui-kit></d-ui-kit>'
                }
            },
            //{
            //    url: '/buttons',
            //    config: {
            //        template: '<d-buttons></d-buttons>'
            //    }
            //},
            {
                url: '/typography',
                config: {
                    template: '<d-typography></d-typography>'
                }
            },
            {
                url: '/basic-tables',
                config: {
                    template: '<d-basic-tables></d-basic-tables>'
                }
            },
            {
                url: '/font-awesome',
                config: {
                    template: '<d-font-awesome></d-font-awesome>'
                }
            },
            {
                url: '/grids',
                config: {
                    template: '<d-grids></d-grids>'
                }
            },
            {
                url: '/form-elements',
                config: {
                    template: '<d-form-elements></d-form-elements>'
                }
            },
            {
                url: '/error',
                config: {
                    template: '<d-error></d-error>'
                }
            },
            {
                url: '/error-server',
                config: {
                    template: '<d-error-server></d-error-server>'
                }
            }
        ];

        routes.forEach(function (route) {
            $routeProvider.when(route.url, route.config);
        });

        $routeProvider.otherwise({ redirectTo: '/' });

        // use the HTML5 History API
        //$locationProvider.html5Mode({
        //    enabled: true, requireBase: false
        //});
    }]);
})();