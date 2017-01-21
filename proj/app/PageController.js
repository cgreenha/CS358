app.controller("PageController", function($scope, PageService) {
  //first param is state (-1=error
  //                       0=loading,
  //                       1=dataGood),
  //sec param is data
  $scope.selTest = {
    "code": 0,
    "data": []
  };
  //userSelected is modeled by select
  $scope.userSelected = null;
  //nField is used to tell which fields the user is wanting to view.
  $scope.xField = null;
  $scope.yField = null;
  $scope.selx = "";
  $scope.sely = "";


  //Load list of events on load
  PageService.grabList();


  //TODO: figure better place to put this stuff perhaps it would be best to
  //  shove this into a completely separate directive
  google.charts.load("current", {"packages":["corechart"]});
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ["Age", "Weight"],
      [1, 1],
      [2, 2],
      [3, 3],
      [4, 4],
      [5, 5],
      [6, 6]
    ]);
    var options = {
      title: "Age vs. Weight comparison",
      hAxis: {title: "Age", minValue: 0, maxValue: 10},
      vAxis: {title: "Weight", minValue: 0, maxValue: 10},
      legend: "none"
    };
    var chart = new google.visualization.ScatterChart(document.getElementById("chart_div"));
    chart.draw(data, options);

    //responsive sizing
    function resizeHandler() {
      chart.draw(data, options);
    }
    if (window.addEventListener) {
      window.addEventListener("resize", resizeHandler, false);
    } else if (window.attachEvent) {
      window.attachEvent("onresize", resizeHandler);
    }
  }


  //misc functions
  $scope.showRes = function() {
    return ($scope.userSelected !== null);
  }
  //TODO: refactor so that this lookup is redundant
  //see "find object by id javascript objects" second
  //  comment about lookup object
  function getTestById(id) {
    for (var i=0; i < $scope.selTest["data"].length; i++) {
      if ($scope.selTest["data"][i].id === id) {
        return $scope.selTest["data"][i];
      }
    }
    return null;
  }
  $scope.getComments = function(id) {
    if ($scope.showRes()) {
      return getTestById(id).comments;
    } else {
      return "";
    }
  }

  /*
   * Handles loading the list of all the tests
   */
  $scope.$on("eventListGood", function(event, args) {
    $scope.selTest["code"] = 1;
    $scope.selTest["data"] = args;

    //TODO: shove into more sensible location
    PageService.getGraphFields();
  });
  $scope.$on("eventListError", function(event) {
    $scope.selTest["code"] = -1;
    $scope.selTest["data"] = [];
  });

  /*
   * Handles loading the selectable fields for a specific test
   */
  $scope.$on("fieldsListGood", function(event, args) {
    $scope.xField = args;
    $scope.yField = args;
  });
  $scope.$on("fieldsListError", function(event) {
    //TODO
    console.log("Some error occurred");
  });

});
