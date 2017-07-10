var formUser = [{
    name: "nombre",
    label: "Nombre",
    required: true
}]

var UserModule = (function () {
    var PageText = {
        "usuario": "Usuario",
        "nombre": "Nombre",
        "apellido": "Apellido",
        "email": "Email",
        "password": "Password",
        "perfil": "Perfil",
        "vigencia_desde": "Vigencia desde",
        "vigencia_hasta": "Vigencia hasta",
    };
    var api = new ApiCaller("usuarios");
    this.UserList = function ($scope, AppServiceCaller, AplicationText) {
        $scope.title = "Listado de usuarios"
        UserBase.call(this, $scope, AppServiceCaller, AplicationText);
        var userGet_callBack = function (res) {
            $scope.users = res.data;
        }
        api.get(userGet_callBack);
    };

    function UserBase($scope, AppServiceCaller, AplicationText) {
        $scope.pageText = PageText;
        $scope.AplicationText = AplicationText;
        api.setCaller(AppServiceCaller)
    };
    this.UserInsert=function($scope,AppServiceCaller, AplicationText) {
        UserBase.call(this, $scope, AppServiceCaller, AplicationText);
        $scope.title = "Alta de usuarios"
        var getById_callBack = function (res) {
            $scope.user = res.data[0];
        }

        api.getById(5, getById_callBack);

        $scope.submit = function (form) {
            
            if ($scope.form.$valid) {
                console.log("insert!!")
            }
        }
        $scope.reset = function (form) {
            if (form) {
                form.$setPristine();
                form.$setUntouched();
            }
        };
 
        
    };
    
    this.UserEdit= function ($scope, AppServiceCaller, AplicationText) {
        $scope.title = "Editar usuario"
        UserBase.call(this, $scope, AppServiceCaller, AplicationText);
        var getById_callBack = function (res) {
            $scope.user = res.data;
            console.log("User by id", res.data)
        }
        api.get(5, getById_callBack);
    };
    return {
        UserInsertController: this.UserInsert,
        UserEditController: this.UserEdit,
        UserListController: this.UserList
    };

})();


app.controller('old', function ($scope, $filter, $http, $httpParamSerializerJQLike, AppServiceCaller, AplicationText) {
    $scope.AppControlText = AplicationText;
    $scope.pageUserText = PageText;
    $scope.user = {};
    $scope.user.avatar = "";

    $scope.select_item = true;
    $scope.edit = false;
    $scope.search = function () {
        $scope.select_item = true;
        $scope.edit = false;
        AppServiceCaller.get(APP_USER, {}).then(function (resp) {
            $scope.users = resp.data.data;
        });
    };

    $scope.search();

    $scope.delete = function (index) {
        AppServiceCaller.delete(APP_USER, $scope.users[index].id, true).then(function (resp) {
            console.log(resp.status)
            if (resp.status == 'OK' || resp.status == '204') {
                $scope.users.splice(index, 1);
            } else {
                $scope.cancel();
            }
        });
    };

    $scope.showforedit = function (index) {
        $scope.select_item = false;
        $scope.edit = true;
        $scope.select_index = index;
        $scope.user_aux = angular.copy($scope.users[index]);
        $scope.user = $scope.users[index];
    };

    $scope.update = function () {
        AppServiceCaller.put(APP_USER, $scope.user.id, $httpParamSerializerJQLike($scope.user)).then(function (resp) {
            if (resp.status != 'OK' && resp.status != '200') {
                $scope.cancel_update();
            }
            
            if (resp.status == '200' || resp.status == 'OK') {
                $scope.select_item = true;
                $scope.edit = false;
                alert(resp.data.updatedAt)
            }
        });
    };

    $scope.cancel= function () {
        $scope.select_item = true;
        $scope.edit = false;
        $scope.revert($scope.select_index)
    };
    $scope.revert = function (index) {
        $scope.users[index] = angular.copy($scope.user_aux)
    }
 
});

app.controller('UserEditController', ["$scope", "AppServiceCaller", "AplicationText", UserModule.UserListController])
app.controller('controllerUserList', ["$scope", "AppServiceCaller", "AplicationText", UserModule.UserListController])
app.controller('controllerUserInsert', ["$scope", "AppServiceCaller", "AplicationText", UserModule.UserInsertController])

 


 