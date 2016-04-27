var myApp = angular.module("myCV", []);

myApp.controller("header", function($scope) {
    $scope.title= "Bé tập tính";
});

myApp.controller("getAboutMe", ['$scope', '$http', function($scope, $http){
	$http.get('json/aboutMe.json').success(function(data) {
		$scope.result = data;
	});
}]);
