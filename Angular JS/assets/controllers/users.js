

var ModalTemplate = function () {
    this.target = ""
    this.title = ""
    this.text = ""
    this.app_text = ""
    this.model = {}
    this.click = function () {
        console.log("Click this.target", this.target);
    },
    this.show = function () {
        console.log("Click this.target", this.target);
        // $("#" + this.target).modal('show');
    }
    this.hide = function () {
        // $("#" + this.target).modal('hide');
    }
}


var usuario_testing = {
    "usuario": "test",    
    "nombre": "test",
    "apellido": "test",
    "email": "test@test.com",
    "password":"" ,
    "vigencia_desde": "2016-01-01",
    "vigencia_hasta": '',
    "creado_por":"test",
    "id_perfil": 1,
    }


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
        "usuario_minlength": "Ingresar al menos 3 caracteres",
        "password_verify":"Reescribir la contraseña"
    };
    var api = new ApiCaller("usuarios");
    var validate= new FormValidations();
    function UserBase($scope, AppServiceCaller, AplicationText) {
        $scope.pageText = PageText;
        $scope.AplicationText = AplicationText;
        api.setCaller(AppServiceCaller)
    };

    this.UserList = function ($scope, AppServiceCaller, AplicationText) {
        UserBase.call(this, $scope, AppServiceCaller, AplicationText);
        $scope.title = "Listado de usuarios"
        var userGet_callBack = function (res) {
            $scope.users = res.data;
        }
        api.get(userGet_callBack);

        $scope.modalEditUser = new ModalTemplate();
        $scope.modalEditUser.title = "Edicion de usuario"
        $scope.modalEditUser.target = "editUser";
        $scope.modalEditUser.form = {
            src: "assets/pages/user/edittest.html",
            name: "frmEditUser"
        };
        $scope.modalEditUser.pageText = $scope.pageText;
        $scope.modalEditUser.AplicationText = AplicationText;

        $scope.modalEditUser.show = function (item) {
            $scope.modalEditUser.user = item;
            $("#" + this.target).modal('show');
        }

        $scope.modalEditUser.submit = function (form) {
            console.log("Form", form)
            if (form.$valid) {
                console.log("Valid ", $scope.modalEditUser.user)
            } else {
                console.log("Not Valid", $scope.modalEditUser.user)
            }
        }

    };

    
    this.UserInsert=function($scope,AppServiceCaller, AplicationText) {
        UserBase.call(this, $scope, AppServiceCaller, AplicationText);
        $scope.title = "Alta de usuarios"
        $scope.user = usuario_testing;
        var userPost_callBack = function (res) {
            if (!api.isError(res)) {
                alert(res.data.message)
            }
        }
        $scope.submit = function (form) {
            if ($scope.form.$valid) {
                if (!validate.passwordEquals($scope.user.password, $scope.user.password_verify)) {
                    alert("La contraseñas no coinciden.")
                    return;
                }
                api.post($scope.user,userPost_callBack);
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


app.controller('controllerUserEdit', ["$scope", "AppServiceCaller", "AplicationText", UserModule.UserEditController])
app.controller('controllerUserList', ["$scope", "AppServiceCaller", "AplicationText", UserModule.UserListController])
app.controller('controllerUserInsert', ["$scope", "AppServiceCaller", "AplicationText", UserModule.UserInsertController])

 




/*
modalEditUser.show = function (item, pOperation) {
    $scope.modalAddNode.model.operation = pOperation;
    $scope.item_edit = item;
    $("#" + this.target).modal('show');
    $scope.modalAddNode.model.id_menu = item.id_menu;

    if (pOperation == $scope.operation.UPDATE_NODE) {
        $scope.modalAddNode.model.node = item.title;
        $scope.modalAddNode.title = $scope.page_lang.modificar_nodo;
    } else {
        $scope.modalAddNode.title = $scope.page_lang.titulo_agregar;
    }
    $scope.modalAddNode.model.lang = APP_PAGE_LANGUAGE.getLanguage();
}

modalEditUser.submit = function () {
    Service_Caller.set(APP_MENU, $httpParamSerializerJQLike($scope.modalAddNode.model), false).then(function (resp) {
        if (resp.status == 'OK') {
            $scope.modalEditUser.model = {};
            $scope.modalEditUser.hide();
        }
    });
}

*/




