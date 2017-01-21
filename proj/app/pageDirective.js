app.directive('page', function() {
  return {
    restrict: 'E',
    replace: 'true',
    templateUrl: 'app/pageTemplate.html',
    controller: 'PageController'
  };
});
