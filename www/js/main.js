var app = angular.module('app', []);
app.controller('ctrler', function ($scope) {
var zib = $scope;
	$scope.rvars = { username: "", password: "" };
	$scope.login = function () {
		if ($scope.rvars.username !== 'zub') {
			alert('mismatch');
		}
	}
});