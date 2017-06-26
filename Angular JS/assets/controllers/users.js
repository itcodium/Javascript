
var pageUserText = {
    first_name: "First Name",
    last_name: "Last Name",
    avatar: "Avatar",
};

app.controller('userController', function ($scope, $http,$location, $httpParamSerializerJQLike, AppServiceCaller, AppControlText, MathService) {
    console.log("MathService", MathService.multiply(2,8));

    $scope.AppControlText = AppControlText;
    $scope.pageUserText = pageUserText;

    $scope.user = {};
    $scope.user.first_name = "eve_new";
    $scope.user.last_name = "holt_new";
    $scope.user.avatar = "http://image.jpg";

    $scope.submit = function () {
        AppServiceCaller.post(APP_USER, $httpParamSerializerJQLike($scope.usuario), true).then(function (resp) {
            if (resp.status == 'OK' || resp.status == '201' || resp.status == '200') {
                $location.path('/user/edit');
            } 
            console.log("data -> ", resp)

        });
    }
})


app.controller('edituserController', function ($scope, $filter, $http, AppServiceCaller, AppControlText, $httpParamSerializerJQLike) {
    $scope.AppControlText = AppControlText;
    $scope.pageUserText = pageUserText;
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

