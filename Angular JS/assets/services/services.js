angular.module('app.services', [])
.service('AppServiceCaller', function ($http, $window, $httpParamSerializerJQLike) {

        var config = { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } };

        var response = function (response) {
            return response;
        }
        var error = function (error) {
            return error;
        }

        this.get = function(url,parametros) {
             return $http.get(url, { params: parametros }, {});
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


var ApiCaller = function (api) {

    this.setCaller = function (param) {
        console.log("this.caller ", this.caller)
        if (typeof this.caller == 'undefined') {
            this.caller = param;
        }
    }
    this.error = function (res) {
        console.log("error")
    }
    this.get = function (callback) {
        this.get(callback);
    }
    this.getById = function (id, callback) {
        this.get(callback, id);
    }
    this.get = function (callback, id) {
        this.caller.get(APP_API.getUrl(api, id), {})
            .then(callback, this.error)
    }

    this.post = function (data, callback) {
        this.caller.post(APP_API.getUrl(api), data)
            .then(callback, this.error)
    }

    this.put = function (id, callback) {
        this.caller.put(APP_API.getUrl(api, id), data)
            .then(callback, this.error)
    }
    this.delete = function (id, callback) {
        this.caller.delete(APP_API.getUrl(api, id), data)
            .then(callback, this.error)
    }
};






