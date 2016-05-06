var myApp = angular.module("myCV", ['ui.bootstrap']);

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

myApp.controller('CollapseCtrl', function ($scope) {
	$scope.title = "Edit";
    $scope.IsVisible = false;
    $scope.ShowHide = function () {
		$scope.IsVisible = $scope.IsVisible ? false : true;
		if($scope.IsVisible == true)
		{
			$scope.title = "Save";
		}
		else
		{
			$scope.title = "Edit";
		}
		
	}
});
 
