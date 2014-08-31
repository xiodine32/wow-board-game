<div class="page-header text-center"><h3>
	Playing against {{fight.mob.typewrite}}<br/>
	<span class="label label-success">{{fight.mob.hp}} health</span>
	<span class="label label-danger">{{fight.mob.dmg}} damage</span>
</h3></div>

<div class="page-header text-center">
	<h2>Outcome:
		<span ng-show="fight.outcome.dead" class="label label-success">Victory</span>
		<span ng-hide="fight.outcome.dead" class="label label-danger">Defeat</span>
	</h2>
	<p ng-hide="fight.outcome.done">You still need
		<span ng-hide="fight.outcome.dead">
			<span class="label label-info">
				{{fight.outcome.required.instant}} instant damage
			</span>
			&nbsp;to kill or
			<span class="label label-warning">
				{{fight.outcome.required.attrition}} attrition
			</span>
			&nbsp;<span ng-hide="fight.outcome.required.defense==0">and/or</span >
		</span>
		<span ng-hide="fight.outcome.required.defense==0">
			<span class="label label-success">
				{{fight.outcome.required.defense}} defense/attack damage
			</span>
			&nbsp;to not take damage.
		</span>
	</p>
	<p style="color:red;" ng-hide="(fight.outcome.hpTaken+fight.player.hplost)==0 || fight.mob.dead">
	You will take
		<span class="label label-danger" ng-hide="fight.outcome.dead">
			{{fight.outcome.hpTaken}} damage
		</span>
	<span ng-hide="fight.outcome.dead">&nbsp; this turn, totalling</span>
	<span class="label label-danger">
		{{fight.outcome.hpTaken + fight.player.hplost}} damage
	</span>
	.
	</p>
</div>
<div class="page-header text-center" ng-show="fight.mob.dead">
	<h2>Damage Taken: <span class="label label-danger">{{fight.player.hplost}}</span></h2>
</div>
<div class="page-header text-center" ng-hide="fight.mob.dead">
	<h2>Turn {{fight.turns}}</h2>
</div>
<style>
.small-label {
	font-size:12px;
	padding-top:9px !important;
}
</style>
<form ng-submit="newTurn()" class="form-horizontal" ng-hide="fight.mob.dead">
	<div class="form-group">
		<label class="col-xs-2 control-label small-label">Defense</label>
	  <div class="col-xs-4">
	  	<select type="number" class="form-control" ng-model="fight.dice.turn.defense" ng-options="n for n in [] | range:31:0" ng-change="updateTemp()"></select>
  	</div>
  	<label class="col-xs-2 control-label small-label">Instant</label>
	  <div class="col-xs-4">
	  	<select type="number" class="form-control" ng-model="fight.dice.turn.instant" ng-options="n for n in [] | range:31:0" ng-change="updateTemp()"></select>
  	</div>
 	</div>
 	<div class="form-group">
 		<label class="col-xs-2 control-label small-label">Attack</label>
	  <div class="col-xs-4">
	  	<select type="number" class="form-control" ng-model="fight.dice.turn.attack" ng-options="n for n in [] | range:31:0" ng-change="updateTemp()"></select>
  	</div>
  	<label class="col-xs-2 control-label small-label">Attrition</label>
	  <div class="col-xs-4">
	  	<select type="number" class="form-control" ng-model="fight.dice.turn.attrition" ng-options="n for n in [] | range:31:0" ng-change="updateTemp()"></select>
  	</div>
	</div>
	<div class="form-group">
		<div class="col-xs-offset-2 col-xs-10"><button class="btn btn-primary btn-block btn-lg">End Turn {{fight.turns}}</button></div>
	</div>
</form>

<div class="page-header text-center">
	<h2>Statistics</h2>
</div>
<table class="table text-left">
	<thead>
		<tr>
			<th>Name</th>
			<th>Data</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Total Defense Dice</td>
			<td>{{fight.dice.temp.defense}}</td>
		</tr>
		<tr>
			<td>Total Instant Dice</td>
			<td>{{fight.dice.temp.instant}}</td>
		</tr>
		<tr>
			<td>Total Attack Dice</td>
			<td>{{fight.dice.temp.attack}}</td>
		</tr>
		<tr>
			<td>Total Attrition Dice</td>
			<td>{{fight.dice.temp.attrition}}</td>
		</tr>
	</tbody>
</table>
<a href="#/setup" target="_parent" class="btn btn-primary btn-lg btn-block" ng-show="fight.mob.dead">New Fight</a>
