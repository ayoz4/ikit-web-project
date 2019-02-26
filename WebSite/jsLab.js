function test(arr) {
	var sum = 0;
	for (var i = 0; i < arr.length; i++) {
		sum = sum + arr[i]; 
	}
	alert("Сумма последовательности = " + sum);

	var min = arr[0];
	for (var i = 0; i < arr.length; i++) {
		if (arr[i + 1] < min) {
			min = arr[i + 1];
		}
	}
	alert("Минимальный элемент = " + min);

	var multiplier = 1;
	for (var i = 0; i < arr.length; i++) {
		multiplier = multiplier * arr[i];
	}
	alert("Произведение последовательности = " + multiplier);
}

var array = [3, 5, 7, 1, 3, 8, -1];
test(array);