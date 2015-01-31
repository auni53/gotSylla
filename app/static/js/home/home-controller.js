angular.module('gotsylla')
	.controller('HomeController', ['$scope', function ($scope) {
 		$scope.word = "car";

 		$scope.words;

 		$.get("http://127.0.0.1:5000/test", function(data){
 			console.log(data);
 			$scope.words = data;
 		})
  	}]);
