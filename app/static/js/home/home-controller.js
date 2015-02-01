angular.module('gotsylla')
  .controller('HomeController', ['$scope', 'fileUpload', function ($scope, fileUpload) {
  	$scope.word = 'swag';


  	$scope.uploadFile = function(){
        var file = $scope.myFile;
        console.log('file is ' + JSON.stringify(file));

        var uploadUrl;
        if ($scope.myFile.type === 'text/plain') {
        	console.log('received plain text');
        	uploadUrl = 'http://localhost:5000/tfile';
        } else if ($scope.myFile.type === 'application/pdf') {
        	console.log("received pdf");
        	uploadUrl = 'http://localhost:5000/pfile';
        } else {
        	console.log('bad file type');
        }

        fileUpload.uploadFileToUrl(file, uploadUrl);
    };


  }])
  .directive('fileModel', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;
            
            element.bind('change', function(){
                scope.$apply(function(){
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
    };
	}])
  	.service('fileUpload', ['$http', function ($http) {
    this.uploadFileToUrl = function(file, uploadUrl){
        var fd = new FormData();
        fd.append('file', file);
        $http.post(uploadUrl, fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        })
        .success(function(){
        })
        .error(function(){
        });
    }
}]);
