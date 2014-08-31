var app = angular.module('BoardGame.filters', []);

app.filter('range', function() {
	return function (input, max, min) {
			max = parseInt(max);
			if (min == undefined) min = 1;
			min = parseInt(min);
			for (var i = min; i <= max; i++)
					input.push(i);
			return input;
	}
});

app.filter('typewrite', function () {

	function typewriteNumberMonsters(number) {
			var count = "zero monsters";
			switch (number) {
				case 1:
					count="one monster";
					break;
				case 2:
					count="two monsters";
					break;
				case 3:
					count="three monsters";
					break;
				case 4:
					count="four monsters";
					break;
				case 5:
					count="five monsters";
					break;
				case 6:
					count="six monsters";
					break;
				case 7:
					count="seven monsters";
					break;
				case 8:
					count="eight monsters";
					break;
				case 9:
					count="nine monsters";
					break;
				default:
					count=number+" monsters";
				break;
			}
			return count;
	}

	return function (input) {
		// console.log("input", input);
		return typewriteNumberMonsters(input.count);
	};
});


app.filter('total', function() {

	return function (vector, key) {
		var sum = 0;
		for (i = 0; i < vector.length; i++) {
			// console.log(vector[i], "key",key);
			sum += vector[i][key];
		}
		return sum+"";
	}

});
