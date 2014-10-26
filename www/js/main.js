var app = angular.module('app', ['ngSanitize']);
app.controller('ctrler', function ($scope) {
	$scope.customers = [
	{ name: 'aaaaaa', last: '<h1 class="nicy" style="font-size:9110px;">aaaaaa</h1>' },
	{ name: 'ccscs', last: 'scsveer' },
	{ name: 'shasdc', last: 'wefw' },
	{ name: 'qwef', last: 'qwf' }
	];
	$scope.myHtml = '<h1 style="color:#0C3;">aaaaaaa</h1>';
});