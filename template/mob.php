<div class="text-center">
	<div class="btn-group">
		<a class="btn btn-sm btn-success visible-xs" ng-click="mobGreens=mobGreens-1">-</a>
		<a class="btn btn-sm btn-success visible-xs" ng-click="mobGreens=mobGreens+1">+</a>
	</div>
	<div class="btn-group">
		<a class="btn btn-lg btn-success hidden-xs" ng-click="mobGreens=mobGreens-1">-</a>
		<a class="btn btn-lg btn-success hidden-xs" ng-click="mobGreens=mobGreens+1">+</a>
	</div>
	<div class="btn-group" ng-class="hasOpacity">
		<a class="btn btn-lg btn-danger hidden-xs" ng-click="mobReds=mobReds-1">-</a>
		<a class="btn btn-lg btn-danger hidden-xs" ng-click="mobReds=mobReds+1">+</a>
	</div>
	<div class="btn-group" ng-class="hasOpacity">
		<a class="btn btn-sm btn-danger visible-xs" ng-click="mobReds=mobReds-1">-</a>
		<a class="btn btn-sm btn-danger visible-xs" ng-click="mobReds=mobReds+1">+</a> 
	</div>
</div>
<div class="row">
	<div class="col-xs-12">
		<div class="contain">
			<div class="aligner top">
				<div class="data left">
					<p class="bg-success"><strong>{{mobGreens}}</strong></p>
				</div>
				<div class="data right">
					<p class="bg-danger" ng-show="hasTypes"><strong>{{mobReds}}</strong></p>
				</div>
			</div>
		</div>
		<img src="res/img/{{mobType}}.png" alt="{{mobType}} image" style="width:100%;" class="img-round">
		<div class="contain">
			<div class="aligner bottom">
				<div class="data left">
					<p class="bg-info" ng-show="hasTypes"><strong>{{mobNeutrals}}</strong></p>
				</div>
				<div class="data right">
					<p class="bg-violet" ng-show="hasTypes"><strong>{{mobExpansions}}</strong></p>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="text-center">
	<div class="btn-group" ng-class="hasOpacity">
		<a class="btn btn-sm btn-info visible-xs" ng-click="mobNeutrals=mobNeutrals-1">-</a>
		<a class="btn btn-sm btn-info visible-xs" ng-click="mobNeutrals=mobNeutrals+1">+</a>
	</div>
	<div class="btn-group" ng-class="hasOpacity">
		<a class="btn btn-lg btn-info hidden-xs" ng-click="mobNeutrals=mobNeutrals-1">-</a>
		<a class="btn btn-lg btn-info hidden-xs" ng-click="mobNeutrals=mobNeutrals+1">+</a>
	</div>
	<div class="btn-group" ng-class="hasOpacity">
		<a class="btn btn-lg btn-violet hidden-xs" ng-click="mobExpansions=mobExpansions-1">-</a>
		<a class="btn btn-lg btn-violet hidden-xs" ng-click="mobExpansions=mobExpansions+1">+</a>
	</div>
	<div class="btn-group" ng-class="hasOpacity">
		<a class="btn btn-sm btn-violet visible-xs" ng-click="mobExpansions=mobExpansions-1">-</a>
		<a class="btn btn-sm btn-violet visible-xs" ng-click="mobExpansions=mobExpansions+1">+</a>
	</div>
</div>
<br/>

