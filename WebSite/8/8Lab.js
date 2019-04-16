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
Array.prototype.sumOfElements = function () {
    //var array1 = [];
    var sum = 0;

    for (var i = 0; i < this.length; i++) {
        if (Number.isFinite(this[i])) {
            sum = sum + this[i];
        }
    }

    console.log(sum);
}

var arr = [1, 2, 3, 4, 5, 'asd'];
arr.sumOfElements();
