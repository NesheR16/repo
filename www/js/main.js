/*var app = angular.module('app', ['ngSanitize']);
app.controller('ctrler', function ($scope) {
	$scope.customers = [
	{ name: 'aaaaaa', last: '<h1 class="nicy" style="font-size:9110px;">aaaaaa</h1>' },
	{ name: 'ccscs', last: 'scsveer' },
	{ name: 'shasdc', last: 'wefw' },
	{ name: 'qwef', last: 'qwf' }
	];
	$scope.myHtml = '<h1 style="color:#0C3;">aaaaaaa</h1>';
	$scope.komo = function () {
		return komo.html('sdcasdc');
	}
});*/
var app = angular.module('app', []);

app.directive('dynamic', function ($compile) {
  return {
    restrict: 'A',
    replace: true,
    link: function (scope, ele, attrs) {
    	console.log(attrs);
      scope.$watch(attrs.dynamic, function(html) {
        ele.html(html);
        $compile(ele.contents())(scope);
      });
    }
  };
});

function MyController($scope) {
  $scope.click = function(arg) {
    alert('Clicked ' + arg);
  }
  $scope.html = '<a ng-click="click(1)" href="#">Click me</a>';
}