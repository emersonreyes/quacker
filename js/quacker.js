const quacker = angular.module("quacker", []);

quacker.controller("mainCtrl", ["$scope", function($scope) {
	$scope.page = "Home";
	console.log($scope.page);

	$scope.posts = [];
	$scope.newPost = { createdBy: "", text: "", createdAt: "" };

	$scope.post = function() {
		$scope.newPost.createdAt = Date.now();
		$scope.posts.push($scope.newPost);
		$scope.newPost = { createdBy: "", text: "", createdAt: "" };
	};
}]);

quacker.controller("authCtrl", ["$scope", function($scope) {
	$scope.user = { username: "", password: "" };
	$scope.error_message = "";

	$scope.login = function() {
		// placeholder until authentication is implemented
		$scope.error_message = "login request for " + $scope.user.username;
	};

	$scope.register = function() {
		// placeholder until authentication is implemented
		$scope.error_message = "registration request for " + $scope.user.username;
	};
}]);