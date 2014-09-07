var app = angular.module("BoardGame.directives", []);

app.directive('mob',function () {
	return {
		restrict: 'A',
		templateUrl: 'template/mob.php',
		scope: {
			mobs: "=mob"
		},
		link: function (scope, elements, attr) {
			scope.mobType = attr.type;
			scope.mob = {
				green: getValues(scope.mobType,"green"),
				red: getValues(scope.mobType,"red"),
				neutral: getValues(scope.mobType,"neutral"),
				expansion: getValues(scope.mobType,"expansion")
			};
			console.log(scope.mob);
			scope.hasTypes = true;
			scope.hasOpacity="";
			if (scope.mobType == "boss") {
				scope.hasTypes = false;
				scope.hasOpacity="no-action";
			}
			scope.mobGreens=0;
			scope.mobReds=0;
			scope.mobNeutrals=0;
			scope.mobExpansions=0;
			scope.oldmob = {
				greens: 0,
				reds: 0,
				neutrals: 0,
				expansions: 0
			};

			scope.removeOne = function (hp, dmg) {
				scope.mobs.count--;
				for (var i = 0; i < scope.mobs.mobs.length; i++) {
					if (scope.mobs.mobs[i].hp == hp && scope.mobs.mobs[i].dmg == dmg) {
						//remove a stuff with stuff. what.
						scope.mobs.mobs.splice(i, 1);
						return;
					}
				}
			}

			scope.$watch('mobGreens', function () {
				if (scope.mobGreens < 0) scope.mobGreens = 0;
				if (scope.oldmob.greens < scope.mobGreens) { //added one
					scope.mobs.count++;
					scope.mobs.mobs.push(new Creature(scope.mob.green[0], scope.mob.green[1]));
				}
				if (scope.oldmob.greens > scope.mobGreens) { //deleted one, tricky one!
					scope.removeOne(scope.mob.green[0], scope.mob.green[1]);
				}
				scope.oldmob.greens = scope.mobGreens;
			});

			scope.$watch('mobReds', function () {
				if (scope.mobReds < 0) scope.mobReds = 0;
				if (scope.oldmob.reds < scope.mobReds) { //added one
					scope.mobs.count++;
					scope.mobs.mobs.push(new Creature(scope.mob.red[0], scope.mob.red[1]));
				}
				if (scope.oldmob.reds > scope.mobReds) { //deleted one, tricky one!
					scope.removeOne(scope.mob.red[0], scope.mob.red[1]);
				}
				scope.oldmob.reds = scope.mobReds;
			});

			scope.$watch('mobNeutrals', function () {
				if (scope.mobNeutrals < 0) scope.mobNeutrals = 0;
				if (scope.oldmob.neutrals < scope.mobNeutrals) { //added one
					scope.mobs.count++;
					scope.mobs.mobs.push(new Creature(scope.mob.neutral[0], scope.mob.neutral[1]));
				}
				if (scope.oldmob.neutrals > scope.mobNeutrals) { //deleted one, tricky one!
					scope.removeOne(scope.mob.neutral[0], scope.mob.neutral[1]);
				}
				scope.oldmob.neutrals = scope.mobNeutrals;
			});
			scope.$watch('mobExpansions', function () {
				if (scope.mobExpansions < 0) scope.mobExpansions = 0;
				if (scope.oldmob.expansions < scope.mobExpansions) { //added one
					scope.mobs.count++;
					scope.mobs.mobs.push(new Creature(scope.mob.expansion[0], scope.mob.expansion[1]));
				}
				if (scope.oldmob.expansions > scope.mobExpansions) { //deleted one, tricky one!
					scope.removeOne(scope.mob.expansion[0], scope.mob.expansion[1]);
				}
				scope.oldmob.expansions = scope.mobExpansions;
			});
		}
	}
});
