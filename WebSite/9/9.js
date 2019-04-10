function deleteElement (currentName) {
    var elements = document.getElementById('main').getElementsByClassName('child');
    var emptyDiv = document.createElement('h1').innerHTML = 'Список пуст!';

    console.log(currentName)

    for (let i = 0; i < elements.length; i++) {

        if (elements[i].getAttribute('name') == currentName) {
            elements[i].remove();
            break;
        }

        if (elements.length == 0) {
            main.appendChild(emptyDiv);
            console.log('hi');
        }
    }
}

function addElement () {
    var element = document.createElement('div');
    var classNameAttr = document.createAttribute('class');
    var nameAttr = document.createAttribute('name');
    var onClickAttr = document.createAttribute('onclick');
    const currentIndex = upTheCounter();

    onClickAttr.value = `deleteElement(${currentIndex})`;
    classNameAttr.value = 'child';
    nameAttr.value = `${currentIndex}`;

    element.setAttributeNode(classNameAttr);
    element.setAttributeNode(onClickAttr);
    element.setAttributeNode(nameAttr);
    element.innerHTML = '<button>delete</button>';
    main.appendChild(element);
}

function checkElementsArray () {
    var elements = document.getElementById('main').getElementsByClassName('child');
    var checkElement = document.createElement('div');
    var checker = document.getElementById('checker');
    var checkDiv = document.getElementById('checkDiv');
    console.log(checkDiv);
    checker.remove(checkDiv);
    checkElement.innerHTML = `<h3>Sum of data = ${elements.length}</h3>`;
    checker.appendChild(checkElement);
}

var counter = 0;

function upTheCounter () {
    return counter++;
}