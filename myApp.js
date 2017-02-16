var app = angular.module('myApp', []);

app.directive('optIn', function(){
  return {

    templateUrl: 'opt-in.html',
    restrict: 'EA',
    transclude: true
  };
});

app.controller('myCtrl',function(){
  console.log("skippy");
})
