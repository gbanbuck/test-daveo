var module = angular.module('module',[]);
module.controller('Inscription',['$scope',function($scope){
    //$scope.patternMDP = /^(?=.*[a-z]+)(?=.*[A-Z]+)(?=.*[0-9]+)([^\s]{6,})$/;
    $scope.expMDP = /^[A-Za-z0-9\s\w\W]{6,}$/;
    $scope.expText = /^[A-Za-z\s]*$/;
    $scope.expMail = /^[^\W][a-zA-Z0-9_]*(\.[a-zA-Z0-9_]+)*\@[a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*\.[a-zA-Z]{2,4}$/;

}]);
module.directive('equalsTo', [function () {

   /*
   * <input type="password" ng-model="Password" />
   * <input type="password" ng-model="ConfirmPassword" equals-to="Password" />
   */
   return {
   restrict: 'A', // S'utilise uniquement en tant qu'attribut
   scope: true,
   require: 'ngModel',
   link: function (scope, elem, attrs, control) {
   var check = function () {
   //Valeur du champs courant 
   var v1 = scope.$eval(attrs.ngModel); // attrs.ngModel = "ConfirmPassword"
   //valeur du champ à comparer

   var v2 = scope.$eval(attrs.equalsTo).$viewValue; // attrs.equalsTo = "Password"

   return v1 == v2;
   };
   scope.$watch(check, function (isValid) {
   // Défini si le champ est valide
   control.$setValidity("equalsTo", isValid);
   });
   }
   };
}]);