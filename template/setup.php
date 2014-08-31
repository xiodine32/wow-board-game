<div class="page-header text-center">
	<h2>Creatures</h2>
</div>

<form ng-submit="submitMobs(mobs)" class="form" role="form">
	<div class="form-group">
		<div class="row">
			<div type="duck" class="col-md-3 col-sm-4 col-xs-6" mob mobs="mobs"></div>
			<div type="duck" class="col-md-3 col-sm-4 col-xs-6" mob mobs="mobs"></div>
			<div type="duck" class="col-md-3 col-sm-4 col-xs-6" mob mobs="mobs"></div>
			<div type="boss" class="col-md-3 col-sm-4 col-xs-6" mob mobs="mobs"></div>
		</div>

		<div class="form-group" ng-hide="mobs.count==0">
			<button class="btn btn-lg btn-primary btn-block">Fight!</button>
		</div>

	</div>
	<!-- mob{hp,dmg} -->
	<!-- mobs{count,mob[]} -->
	<div>
		<div class="page-header text-center">
			<h3>Debug information</h3>
		</div>
	</div>
<table class="table table-striped table-hover table-condensed">
	<thead>
		<tr>
			<th>#</th>
			<th>HP</th>
			<th>DMG</th>
		</tr>
	</thead>
	<tbody>
		<tr ng-repeat="mob in mobs.mobs">
			<td>{{$index+1}}</td>
			<td>{{mob.hp}}</td>
			<td>{{mob.dmg}}</td>
		</tr>
	</tbody>
</table>
