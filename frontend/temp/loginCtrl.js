angular.module('app').controller('LoginCtrl', ['$scope', '$http', function ($scope, $http) {

    $scope.loginSubmit = function () {
        $http.post('/api/login', {
                email: $scope.email,
                password: $scope.password,
            })
            .then(function onSuccess() {
                window.location = '#/addpost';
            })
            .catch(function onError(err) {

            });
    }
}]);