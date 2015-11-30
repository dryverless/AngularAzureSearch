angular.module("dlFramework").run(["$templateCache", function($templateCache) {$templateCache.put("ext-modules/dlFramework/dlFrameworkTemplate.html","<div class=\"dl-title-bar navbar-fixed-top\">\r\n    <div class=\"row\">\r\n        <div class=\"dl-logo-area col-xs-12 col-sm-12 col-md-6\">\r\n\r\n            <div ng-if=\"isMenuButtonVisible\" ng-click=\"menuButtonClicked()\"\r\n                 class=\"dl-collapsed-menu pull-left\">\r\n                <!-- Regular Bars Icon -->\r\n                <button type=\"button\" class=\"btn dl-nav-button\">\r\n                    <i class=\"fa fa-bars\"></i>\r\n                </button>\r\n                <!--<button type=\"button\" class=\"tcon tcon-menu--xcross\" aria-label=\"toggle menu\">\r\n                    <span class=\"tcon-menu__lines\" aria-hidden=\"true\"></span>\r\n                    <span class=\"tcon-visuallyhidden\">toggle menu</span>\r\n                </button>-->\r\n            </div>\r\n            <a href=\"#/index\"><img class=\"dl-icon\" ng-src=\"{{ iconFile }}\" /></a>\r\n            <div class=\"dl-title-area\">\r\n                <p class=\"dl-logo-title\">{{ title }}</p>\r\n                <p class=\"dl-logo-subtitle\">{{ subtitle }}</p>\r\n                <!--If using iconXs uncomment-->\r\n                <!--<img class=\"dl-icon-xs\" ng-src=\"{-{ iconXs }-}\" />-->\r\n            </div>\r\n            <!--<div class=\"dl-search-area\">\r\n                <form>\r\n                    <input type=\"text\" name=\"search\" />\r\n                </form>\r\n            </div>-->\r\n\r\n\r\n        </div>\r\n\r\n        <div class=\"dl-right-side-controls hidden-xs hidden-sm col-md-6 pull-right\">\r\n            <dl-user-profile-small></dl-user-profile-small>\r\n        </div>\r\n\r\n\r\n        <!--<div class=\"dl-right-side-controls col-xs-7 col-sm-3 pull-right\">\r\n            <div>\r\n                <a class=\"btn btn-danger\" href=\"//twitter.com/dryverless\"><i class=\"fa fa-twitter-square\"></i></a>\r\n                <a class=\"btn btn-warning\" href=\"//linkedin.com/company/dryverless\"><i class=\"fa fa-linkedin-square\"></i></a>\r\n                <a class=\"btn btn-success\" href=\"//facebook.com/dryverless\"><i class=\"fa fa-facebook-square\"></i></a>\r\n                <a class=\"btn btn-info\" href=\"//angel.co/dryverless\"><i class=\"fa fa-angellist\"></i></a>\r\n                <a class=\"btn btn-default\" href=\"//instagram.com/dryverless\"><i class=\"fa fa-instagram\"></i></a>\r\n            </div>\r\n        </div>-->\r\n    </div>\r\n</div>\r\n\r\n<div style=\"top: 68px; width: 100%; position: relative;\">\r\n    <div class=\"dl-menu-area class animated fadeInLeft\"\r\n         ng-show=\"isMenuVisible\"\r\n         ng-class=\"{\'dl-menu-area-vertical\': isMenuVertical, \'dl-menu-area-horizontal\': !isMenuVertical, \'dl-mobile-menu\': isMenuButtonVisible, \'dl-menu-fade\': !isMenuVisible}\">\r\n\r\n        <button ng-show=\"isMenuButtonVisible\" ng-click=\"menuButtonClicked()\" type=\"button\" class=\"dl-mobile-close-button\">\r\n            <i class=\"fa fa-times-circle-o\"></i>\r\n        </button>\r\n        <!-- User Profile -->\r\n        <dl-user-profile></dl-user-profile>\r\n        <!-- Menu -->\r\n        <div ng-transclude></div>\r\n    </div>\r\n\r\n    <!-- Main ng-view -->\r\n    <div ng-view class=\"dl-view animated\" ng-class=\"{\'dl-view-full-width\': !isMenuVertical || !isMenuVisible, \'dl-view-mobile\': isMenuButtonVisible, \'dl-view-in-left\': isMenuVertical && isMenuVisible}\">\r\n    </div>\r\n</div>\r\n");
$templateCache.put("ext-modules/dlFramework/dlUserProfile/dlUserProfileSmallTemplate.html","<div class=\"dl-user-profile-small pull-right\">\r\n\r\n    <!--<button class=\"btn btn-info btn-sm\">\r\n        <i class=\"fa fa-chevron-down\"></i>\r\n    </button>-->\r\n\r\n    <div class=\"btn-group\">\r\n        <div ng-switch=\"isAuthenticated\">\r\n            <div class=\"btn-group\" ng-switch-when=\"true\">\r\n				<!-- <button class=\"btn dl-user-profile-btn\">\r\n                    <span class=\"dl-profile-image dl-profile-online\">\r\n                    <img src=\"images/employee.jpg\" alt=\"user image\" style=\"border-radius: 100%\" />\r\n                    <i></i>\r\n                    </span>\r\n\r\n                    <span class=\"dl-user-profile-small-name\">{{userName}}</span>\r\n                </button> -->\r\n                <button class=\"btn btn-default dl-user-profile-btn dropdown-toggle\" data-toggle=\"dropdown\">\r\n                    <span class=\"dl-profile-image dl-profile-online\">\r\n	                    <img src=\"images/employee.jpg\" alt=\"user image\" style=\"border-radius: 100%;\" />\r\n                    </span>\r\n                    <!--fa-ellipsis-v-->\r\n                    <span class=\"dl-user-profile-small-name\"><i class=\"fa fa-caret-down\"></i></span>\r\n				</button>\r\n                <ul class=\"dropdown-menu pull-right\">\r\n                	<li class=\"dropdown-header\">Signed in as</li>\r\n                	<li class=\"text-center\">{{userName}}</li>\r\n                	<li class=\"divider\"></li>\r\n                    <li>\r\n                        <a tabindex=\"-1\" href=\"#/profile\"><span class=\"badge pull-right\"><i class=\"fa fa-user\"></i></span> Your profile</a>\r\n                    </li>\r\n                    <li>\r\n                        <a tabindex=\"-1\" href=\"#/favorites\"><span class=\"badge pull-right\"><i class=\"fa fa-star\"></i></span> Favorites</a>\r\n                    </li>\r\n                    <li>\r\n                        <a tabindex=\"-1\" href=\"#/savedsearches\"><span class=\"badge pull-right\"><i class=\"fa fa-search\"></i></span> Searches</a>\r\n                    </li>\r\n                    <li>\r\n                        <a tabindex=\"-1\" href=\"#/help\"><span class=\"badge pull-right\"><i class=\"fa fa-question\"></i></span> Help</a>\r\n                    </li>\r\n                    <li class=\"divider\"></li>\r\n                    <li>\r\n                    	<a tabindex=\"-1\" href=\"#/settings\"><span class=\"badge pull-right\"><i class=\"fa fa-cog\"></i></span> Settings</a>\r\n                    <li>\r\n                        <a tabindex=\"-1\" ng-click=\"logOut()\"><span class=\"badge pull-right\"><i class=\"fa fa-lock\"></i></span> Sign out</a>\r\n                    </li>\r\n                    <li>\r\n                        <a tabindex=\"-1\" ng-click=\"goFullscreen()\"><span class=\"badge pull-right\"><i class=\"fa fa-arrows-alt\"></i></span> Fullscreen</a>\r\n                    </li>\r\n                    <!--<li>\r\n                        <a tabindex=\"-1\" href=\"javascript:void(0)\"><span class=\"badge pull-right\">3</span>News</a>\r\n                    </li>\r\n                    <li>\r\n                        <a tabindex=\"-1\" href=\"javascript:void(0)\"><span class=\"badge pull-right\">1</span>Messages</a>\r\n                    </li>\r\n                    <li class=\"divider\"></li>\r\n                    <li class=\"dropdown-header\">More</li>\r\n                    <li>\r\n                        <a tabindex=\"-1\" href=\"javascript:void(0)\">Edit Profile..</a>\r\n                    </li>-->\r\n                </ul>\r\n            </div>\r\n            <div ng-switch-default>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");
$templateCache.put("ext-modules/dlFramework/dlUserProfile/dlUserProfileTemplate.html","<div class=\"dl-user-profile\" ng-if=\"isMenuVertical && isAuthenticated\">\r\n    <span class=\"dl-profile-image-side dl-profile-online\">\r\n        <img src=\"images/employee.jpg\" alt=\"user image\" style=\"border-radius: 100%\" />\r\n        <i></i>\r\n    </span>\r\n    <div style=\"position: absolute; left: 100px; width:200px;\">\r\n        <div class=\"text-center\">\r\n            <div class=\"dl-user-profile-btn-group btn-group\" style=\"display:inline;\">\r\n                <button class=\"btn dl-user-profile-btn dropdown-toggle\" data-toggle=\"dropdown\">\r\n                    <i class=\"fa fa-caret-down\" style=\"padding:5px;\"></i>\r\n                </button>\r\n                <ul class=\"dropdown-menu pull-left\">\r\n                    <li class=\"dropdown-header\">Signed in as</li>\r\n                    <li class=\"text-center\">{{userName}}</li>\r\n                    <li class=\"divider\"></li>\r\n                    <li>\r\n                        <a tabindex=\"-1\" href=\"#/profile\"><span class=\"badge pull-right\"><i class=\"fa fa-user\"></i></span> Your profile</a>\r\n                    </li>\r\n                    <li>\r\n                        <a tabindex=\"-1\" href=\"#/favorites\"><span class=\"badge pull-right\"><i class=\"fa fa-star\"></i></span> Favorites</a>\r\n                    </li>\r\n                    <li>\r\n                        <a tabindex=\"-1\" href=\"#/savedsearches\"><span class=\"badge pull-right\"><i class=\"fa fa-search\"></i></span> Searches</a>\r\n                    </li>\r\n                    <li>\r\n                        <a tabindex=\"-1\" href=\"#/help\"><span class=\"badge pull-right\"><i class=\"fa fa-question\"></i></span> Help</a>\r\n                    </li>\r\n                    <li class=\"divider\"></li>\r\n                    <li>\r\n                        <a tabindex=\"-1\" href=\"#/settings\"><span class=\"badge pull-right\"><i class=\"fa fa-cog\"></i></span> Settings</a>\r\n                    <li>\r\n                        <a tabindex=\"-1\" ng-click=\"logOut()\"><span class=\"badge pull-right\"><i class=\"fa fa-lock\"></i></span> Sign out</a>\r\n                    </li>\r\n                    <li>\r\n                        <a tabindex=\"-1\" ng-click=\"goFullscreen()\"><span class=\"badge pull-right\"><i class=\"fa fa-arrows-alt\"></i></span> Fullscreen</a>\r\n                    </li>\r\n                    <!--<li>\r\n                <a tabindex=\"-1\" href=\"javascript:void(0)\"><span class=\"badge pull-right\">3</span>News</a>\r\n            </li>\r\n            <li>\r\n                <a tabindex=\"-1\" href=\"javascript:void(0)\"><span class=\"badge pull-right\">1</span>Messages</a>\r\n            </li>-->\r\n                    <!--<li class=\"divider\"></li>\r\n            <li class=\"dropdown-header\">More</li>\r\n            <li>\r\n                <a tabindex=\"-1\" href=\"#/manage\">Edit Profile..</a>\r\n            </li>-->\r\n                </ul>\r\n            </div>\r\n            <!-- <span class=\"text-left\" style=\"margin-left: -20px; margin-top: -10px;\">\r\n                <p>Logged in as:</p>\r\n                <p>{{userName}}</p>\r\n            </span> -->\r\n        </div>\r\n\r\n        <!--<button class=\"btn btn-info btn-xs\">\r\n            <i class=\"fa fa-chevron-down\"></i>\r\n        </button>-->\r\n\r\n    </div>\r\n</div>\r\n");}]);