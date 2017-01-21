app.service('PageService', function($rootScope, $http) {
  var eventList = null,
      fieldsList = null;

  return {

    grabList: function() {
      var q = 'api/getEventList.php';
      $http.get(q).then(
        function successCallback(res) {
          if (res.data[0] == 0) {
            eventList = res.data[1];
            $rootScope.$broadcast('eventListGood', eventList);
          } else {
            $rootScope.$broadcast('eventListError');
          }
        }, function errorCallback(res) {
          $rootScope.$broadcast('eventListError');
        }
      );
    },

    getGraphFields: function() {
      var q = 'api/getTestFields.php';
      $http.get(q).then(
        function successCallback(res) {
          if (res.data[0] == 0) {
            fieldsList = res.data[1];
            $rootScope.$broadcast('fieldsListGood', fieldsList);
          } else {
            $rootScope.$broadcast('fieldsListError');
          }
        }, function errorCallback(res) {
          $rootScope.$broadcast('fieldsListError');
        }
      );
    }

  };

});
