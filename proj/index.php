<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Valpo Flexural Beam Tests</title>

  <!-- CSS -->
  <link rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"
    integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7"
    crossorigin="anonymous">
  <link rel="stylesheet" href="css/basic.css">

  <!-- JS -->
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.9/angular.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"
    integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS"
    crossorigin="anonymous"></script>

  <!-- Google Charts API links -->
  <script src="https://www.gstatic.com/charts/loader.js"></script>

  <!-- AngularJS files -->
  <script src="app/appStart.js"></script>
  <script src="app/PageService.js"></script>
  <script src="app/PageController.js"></script>
  <script src="app/pageDirective.js"></script>

</head>
<body>

<div class="header">Valpo Flexural Beam Tests</div>
<div class="headerBot"></div>

<!-- Begin AngularJS SPA -->
<div ng-app="app">

  <!-- Directive that loads the page -->
  <page></page>

</div><!-- End AngularJS SPA -->


</body>
</html>
