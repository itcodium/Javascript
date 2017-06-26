angular.module('app.services', [])
.service('AppServiceCaller', function ($http, $window) {

        var config = { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } };

        var response = function (response) {
            return response;
        }
        var error = function (error) {
            return error;
        }

        this.get = function(url,parametros) {
             return $http.get(url, { params: parametros }, {}).then(response, error);
        };
        this.post= function (url, parametros) {
            return $http.post(url, parametros, config).then(response, error);
        };
        this.put = function (url,parametros) {
            return $http.put(url, parametros, config).then(response, error);
        };
        this.delete = function(url) {
            return $http.delete(url, { params: {} }, {}).then(response, error);
        };
         
});





