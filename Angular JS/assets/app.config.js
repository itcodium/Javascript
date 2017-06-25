 

// Configuración de las rutas
app.config(function ($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'assets/pages/home.html',
            controller: 'homeController'
        })
         .when('', {
             templateUrl: 'assets/pages/home.html',
             controller: 'homeController'
         })
        .when('/user', {
            templateUrl: 'assets/pages/user/user.html',
            controller: 'userController'
        })
         .when('/user/edit', {
             templateUrl: 'assets/pages/user/edit.html',
            controller: 'edituserController'
        })
       
        .otherwise({
            redirectTo: '/'
        });
});

