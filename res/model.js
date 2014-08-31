var Creature_unique = 0;
var Creature = function(HP, Damage) {
	this.identifier = ++Creature_unique;
	this.hp = HP;
	this.dmg = Damage;
}
Creature.prototype.addHP = function() {
	this.hp++;
}
Creature.prototype.delHP = function() {
	this.hp--;
	if (this.hp < 1)
		this.hp = 1;
}
Creature.prototype.addDMG = function() {
	this.dmg++;
}
Creature.prototype.delDMG = function() {
	this.dmg--;
	if (this.dmg < 1)
		this.dmg = 1;
}

var getValues = function(mobModel, model) {
	console.log("requested",mobModel, model);
	var data = { //[hp,dmg]
		green: {
			duck:[2,2],
			boss:[20,20]
		},
		red: {
			duck:[2,3]
		},
		neutral: {
			duck:[4,4]
		},
		expansion: {
			duck:[8,8]
		}
	};
	return data[model][mobModel];
}
