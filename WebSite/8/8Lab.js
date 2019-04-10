var defaultPerson = {
    name: {
        first: 'Qwe',
        second: 'Asd'
    },
    activity: 'walking'
}
console.log(defaultPerson.name.first, defaultPerson.name.second, defaultPerson.activity);

defaultPerson.name.first = 'Zxc';
defaultPerson.activity = {
    favouriteActivity: "skiing",
    hobbie: 'reading' 
}

console.log(defaultPerson.name.first, defaultPerson.name.second, defaultPerson.activity);

function animal( name ) {
    this.name = name;

    this.welcoming = () => {
        return this.string = 'Hi, ' + this.name;
    }
}

var animal1 = new animal('Peppa pig');
console.log(animal1.name);
console.log(animal1.welcoming());

// Расширение для Array
Array.prototype.sumOfElements = (arr) => {
    var array1 = [];

    for (var i = 0; i < arr.length; i++) {
        if (Number.isFinite(arr[i])) {
            array1.push(arr[i]);
        }
    }
    console.log(array1);
    
    var sum = 0;
    for (var j = 0; j < array1.length; j++) {
        sum = sum + array1[j];
    }
    console.log("Sum of elements = " + sum);
}

var arr = [1, 2, 3, 4, 5, 'asd'];
arr.sumOfElements(arr);