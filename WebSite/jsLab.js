function test(num_check) {

	var sum = 0;
	for (var i = 0; i < num_check.length; i++) {
		sum = sum + num_check[i]; 
	}
	alert("Сумма последовательности = " + sum);

	var min = num_check[0];
	for (var i = 0; i < num_check.length; i++) {
		if (num_check[i + 1] < min) {
			min = num_check[i + 1];
		}
	}
	alert("Минимальный элемент = " + min);

	var multiplier = 1;
	for (var i = 0; i < num_check.length; i++) {
		multiplier = multiplier * num_check[i];
	}
	alert("Произведение последовательности = " + multiplier);
}

function num_check(arr) {
	var array1 = [];

	for (var i = 0; i < arr.length; i++) {
	 if (Number.isInteger(arr[i])) {
     	array1.push(arr[i]);
	 } 
	}

	return array1;
}

var array = [3, 5, 7, 1, 3, 8, -1, 'ASD'];

test(num_check(array));