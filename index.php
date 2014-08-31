<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; minimum-scale=1.0;">

	<title>Board Game Helper v2 - no data</title>
	<link rel="stylesheet" href="res/vendor/bootstrap.min.css">
	<link rel="stylesheet" href="res/style.css">
	<script src="res/vendor/jquery.js"></script>
	<script src="res/vendor/bootstrap.min.js"></script>
	<script src="res/vendor/angular.min.js"></script>
	<script src="res/vendor/angular-route.min.js"></script>
	<script src="res/vendor/angular-animate.min.js"></script>




	<script src="res/model.js"></script>
	<script src="res/controllers.js"></script>
	<script src="res/services.js"></script>
	<script src="res/filters.js"></script>
	<script src="res/directives.js"></script>
	<script src="res/app.js"></script>

</head>

<body ng-app="BoardGame">
	<div class="container">
		<div class="page-header text-center">
			<a href="index.php" target="_parent" style="text-decoration:none; color:#222;"><h1>Board Game!</h1><h4><small>reset!</small></h4></a>
		</div>
		<div ng-view="view" class="page">

		</div>
	</div>
</body>
</html>
