var app = angular.module("BoardGame.controllers", []);

app.controller("SetupController", function($rootScope, $scope, $location){
	$scope.mobs = {};
	$scope.mobs.mobs=[];
	$scope.mobs.count = 0;

	$scope.submitMobs = function (mobData) {
		console.log("hello mobs", mobData);
		$rootScope.mobs = mobData;
		$location.path("/gems");
	}
	console.log("Setup!");
});
app.controller("GemsController", function($filter, $scope, $location, $rootScope){
	$scope.fight = {
		player: {
			hplost: 0,
		},
		turns: 1,
		mob: {
			typewrite:$filter('typewrite')($rootScope.mobs),
			hp:$filter('total')($rootScope.mobs.mobs,'hp'),
			dmg:$filter('total')($rootScope.mobs.mobs,'dmg'),
			dead: false
		},
		dice: {
			total: {
				defense: 0,
				instant: 0,
				attack: 0,
				attrition: 0
			},
			turn: {
				defense: 0,
				instant: 0,
				attack: 0,
				attrition: 0
			},
			temp: {
				defense: 0,
				instant: 0,
				attack: 0,
				attrition: 0
			}
		},
		outcome: {
			dead: false,
			done: false,
			hpTaken: 0,
			required: {
				defense: 0,
				instant: 0,
				attrition: 0
			}
		}
	};

	$scope.newTurn = function() {
		$scope.fight.dice.total.attack+=$scope.fight.dice.turn.attack;
		$scope.fight.dice.total.instant+=$scope.fight.dice.turn.instant;
		$scope.fight.dice.total.defense+=$scope.fight.dice.turn.defense;
		$scope.fight.dice.total.attrition+=$scope.fight.dice.turn.attrition;
		$scope.fight.dice.turn.attack = 0;
		$scope.fight.dice.turn.defense = 0;
		$scope.fight.dice.turn.instant = 0;
		$scope.fight.dice.turn.attrition = 0;
		$scope.fight.turns++;

		if ($scope.fight.outcome.dead) {
			$scope.fight.mob.dead = true;
			// $rootScope.combatDone = true;
			// $location.path("/results");
		}
		$scope.fight.player.hplost += $scope.fight.outcome.hpTaken;
		$scope.fight.outcome.dead = false;
		$scope.fight.outcome.done = $scope.fight.mob.dead;
		$scope.fight.outcome.hpTaken = 0;
		$scope.fight.outcome.required.instant = 0;
		$scope.fight.outcome.required.attrition = 0;
		$scope.fight.outcome.required.defense = 0;

		$scope.updateTemp();
	}

	$scope.damageDone = function () {
		var r = fight.mob.hp - fight.dice.total.instant - dice.instant;
		if (r < 0)
			return 0;
		return r;
	}

	$scope.updateTemp = function () {
		console.log("update");
		$scope.fight.outcome.done = $scope.fight.mob.dead;
		$scope.fight.dice.temp.defense = $scope.fight.dice.total.defense + $scope.fight.dice.turn.defense;
		$scope.fight.dice.temp.instant = $scope.fight.dice.total.instant + $scope.fight.dice.turn.instant;
		$scope.fight.dice.temp.attack = $scope.fight.dice.total.attack + $scope.fight.dice.turn.attack;
		$scope.fight.dice.temp.attrition = $scope.fight.dice.total.attrition + $scope.fight.dice.turn.attrition;

		var damageDealt = $scope.fight.dice.temp.instant + $scope.fight.dice.temp.attack + $scope.fight.dice.temp.attrition;
		$scope.fight.outcome.dead = damageDealt >= $scope.fight.mob.hp;


		//lol protection! KIDS, USE PROTECTION!
		var protection = $scope.fight.dice.turn.attack + $scope.fight.dice.turn.defense;
		if (protection > $scope.fight.mob.dmg) protection = $scope.fight.mob.dmg;
		$scope.fight.outcome.hpTaken = $scope.fight.mob.dmg - protection;

		$scope.fight.outcome.required.instant = $scope.fight.mob.hp - $scope.fight.dice.temp.attack - $scope.fight.dice.temp.attrition - $scope.fight.dice.temp.instant;
		$scope.fight.outcome.required.defense = $scope.fight.mob.dmg - ($scope.fight.dice.turn.attack + $scope.fight.dice.turn.defense);
		if ($scope.fight.outcome.required.defense < 0)
			$scope.fight.outcome.required.defense = 0;
		$scope.fight.outcome.required.attrition = $scope.fight.mob.hp - $scope.fight.dice.temp.attack - $scope.fight.dice.temp.attrition - $scope.fight.dice.temp.instant;
		if ($scope.fight.outcome.required.defense == 0 && $scope.fight.outcome.dead) {
			$scope.fight.outcome.done = true;
		}
		if ($scope.fight.outcome.required.instant <= 0) {
			$scope.fight.outcome.done = true;
			$scope.fight.outcome.hpTaken = 0;
		}
	}

	$scope.updateTemp();
	console.log("Gems!");
});
app.controller("ResultsController", function($scope, $location){
	console.log("Results!");
});


