function test(num_check) {
  let sum = 0;
  for (var i = 0; i < num_check.length; i++) {
    sum += num_check[i];
  }
  alert(`Сумма последовательности = ${sum}`);

  let min = num_check[0];
  for (var i = 0; i < num_check.length; i++) {
    if (num_check[i + 1] < min) {
      min = num_check[i + 1];
    }
  }
  alert(`Минимальный элемент = ${min}`);

  let multiplier = 1;
  for (var i = 0; i < num_check.length; i++) {
    multiplier *= num_check[i];
  }
  alert(`Произведение последовательности = ${multiplier}`);
}

function num_check(arr) {
  const array1 = [];

  for (let i = 0; i < arr.length; i++) {
    if (Number.isInteger(arr[i])) {
      array1.push(arr[i]);
    }
  }

  return array1;
}

const array = [3, 5, 7, 1, 3, 8, -1, 'ASD'];

test(num_check(array));
