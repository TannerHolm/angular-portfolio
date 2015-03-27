var app = angular.module("app", ["ngRoute", "ngAnimate"]);

app.config(function($routeProvider) {
    $routeProvider
    .when('/',
      {
        templateUrl: "views/welcome.html",
        controller: "AppCtrl"
      }
    )
    .when('/front-end',
      {
        templateUrl: "views/front-end.html",
        controller: "AppCtrl"
      }
    )
    .when('/back-end',
      {
        templateUrl: "views/back-end.html",
        controller: "AppCtrl"
      }
    )
    .when('/personality',
      {
        templateUrl: "views/personality.html",
        controller: "AppCtrl"
      }
    )
    .when('/contact',
      {
        templateUrl: "views/contact.html",
        controller: "AppCtrl"
      }
    )

});

app.controller("AppCtrl", function($scope) {
    $scope.model = {
        message: "This is my app!!!"
    }
})
