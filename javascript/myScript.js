var myApp = angular.module("myCV", []);

myApp.controller("getAboutMe", ['$scope', '$http', function($scope, $http){
	$http.get('json/aboutMe.json').success(function(data) {
		$scope.result = data;
	});
}]);

myApp.controller("getSummary", ['$scope', '$http', function($scope, $http){
	$http.get('json/summary.json').success(function(data) {
		$scope.result = data;
	});
}]);

myApp.controller("getExperience", ['$scope', '$http', function($scope, $http){
	$http.get('json/experience.json').success(function(data) {
		$scope.result = data;
	});
}]);

myApp.controller("getProject", ['$scope', '$http', function($scope, $http){
	$http.get('json/project.json').success(function(data) {
		$scope.result = data;
	});
}]);

myApp.controller("getSkill", ['$scope', '$http', function($scope, $http){
	$http.get('json/skill.json').success(function(data) {
		$scope.result = data;
	});
}]);

myApp.controller("getEducation", ['$scope', '$http', function($scope, $http){
	$http.get('json/education.json').success(function(data) {
		$scope.result = data;
	});
}]);

myApp.controller("navController", function ($scope, $location) {
    $scope.isCollapsed = true;
	
    $scope.$on('$routeChangeSuccess', function () {
        $scope.isCollapsed = true;
		alert("huhuuhu");
    });
});
 
