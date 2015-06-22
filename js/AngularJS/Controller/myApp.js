
var myApp = angular.module('myApp',['ngAnimate']);

<!-- DIRECTIVE -->
	myApp.directive('customButton', function () {
		return {
			restrict: 'A',
		    replace: true,
		    transclude: true, // affiche le texte ou pas 
		    template: '<a href="wp-content/themes/wpbootstrap/template/initTab.php" class="myawesomebutton" ng-transclude>' +
		                '<i class="icon-ok-sign"></i>' +
		              '</a>',
			link : function (scope,element,attrs) {

			}
		}
	});
	
	myApp.directive('video', function(){
		return {
			restrict: 'A',
			replace: true,
			transclude: true,
			template: '<input type="mail" class="ng-pristine ng-valid ng-touched" ng-transclude>'+
						'</input>',
			link : function (scope,element,attrs) {

			}
		}
	});
	myApp.directive('email',function(){
		return{
			restrict: 'A',
			replace: true,
			transclude: true,
			template: '<input type="mail" class="ng-pristine ng-valid ng-touched" ng-transclude>'+
						'</input>',
			link : function (scope,element,attrs) {

			}
		}
	});

<!-- FACTORIES -->

<!-- SERVICE -->

<!-- CONTROLLER -->
	myApp.controller("SlideController",['$scope','$http',function($scope,$http){
		$scope.test = "test";
        $http({
		    method: 'GET',
		    url: '//localhost/auctionproject/app/webroot/text.json'
		  })
		  .success(function (data, status, headers, config) {
		  	
			$scope.commentaires =  data.commentaires;
		    // données récupérées avec succès
		  })
		  .error(function (data, status, headers, config) {

		  	$scope.error = "Aucune données";
		    // erreur de récupération :(
		  });
    }]);
	myApp.controller('slideVideo', ['$scope', '$http', function ($scope,$http){
		$scope.affiche = true;
		$http({
		    method: 'GET',
		    url: '//localhost/auctionproject/app/webroot/video.json'
		  })
		  .success(function (data, status, headers, config) {
		  	
			$scope.allvideo =  data.video;
		    // données récupérées avec succès
		  })
		  .error(function (data, status, headers, config) {

		  	$scope.error = "Aucune données";
		    // erreur de récupération :(
		  });
		  $scope.afficher = function(){
		  	if($scope.affiche==true) $scope.affiche=false;
		  	else $scope.affiche=true;
		  }

	}]);