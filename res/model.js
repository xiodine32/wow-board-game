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
			gnoll: [3, 3],
			scarlet_crusader: [3, 4],
			spider: [10, 4],
			worgen: [10, 7],
			wildkin: [11, 9],
			drake: [16, 10],
			ogre: [12, 10],
			doom_guard: [15, 11],
			infernal: [16, 12],
			yeti: [8, 8],
			ooze: [6, 6],
			arakkoa: [7, 8],
			moarg: [11, 11],
			wrath_guard: [12, 16],
			shivan: [16, 13],
			fungal_giant: [10, 8],
			murloc: [2, 3],
			ghoul: [2, 3],
			naga: [8, 5],
			wraith: [10, 5]
		},
		red: {
			gnoll: [5, 4],
			scarlet_crusader: [5, 5],
			spider: [12, 5],
			worgen: [11, 9],
			wildkin: [13, 10],
			drake: [18, 12],
			ogre: [12, 12],
			doom_guard: [17, 13],
			infernal: [18, 13],
			yeti: [10, 10],
			ooze: [7, 8],
			arakkoa: [9, 10],
			moarg: [14, 14],
			wrath_guard: [15, 19],
			shivan: [19, 16],
			fungal_giant: [11, 10],
			murloc: [4, 5],
			ghoul: [4, 5],
			naga: [10, 6],
			wraith: [11, 7]
		},
		neutral: {
			gnoll: [4, 4],
			scarlet_crusader: [4, 4],
			spider: [11, 4],
			worgen: [10, 7],
			wildkin: [13, 9],
			drake: [17, 11],
			ogre: [11, 11],
			doom_guard: [16, 12],
			infernal: [17, 13],
			yeti: [9, 9],
			ooze: [7, 7],
			arakkoa: [8, 9],
			moarg: [13, 12],
			wrath_guard: [14, 17],
			shivan: [17, 15],
			fungal_giant: [11, 9],
			murloc: [2, 4],
			ghoul: [3, 4],
			naga: [9, 5],
			wraith: [10, 6]
		},
		expansion: {
			gnoll: [8, 9],
			scarlet_crusader: [8, 8],
			spider: [14, 12],
			worgen: [13, 11],
			wildkin: [15, 12],
			drake: [24, 18],
			ogre: [16, 16],
			doom_guard: [19, 15],
			infernal: [21, 15],
			yeti: [13, 12],
			ooze: [10, 11],
			arakkoa: [14, 16],
			moarg: [20, 20],
			wrath_guard: [18, 21],
			shivan: [21, 19],
			fungal_giant: [20, 18],
			murloc: [6, 8],
			ghoul: [8, 10],
			naga: [13, 10],
			wraith: [13, 9]
		}
	};
	return data[model][mobModel];
}
