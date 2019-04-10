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
    onClickAttr.value = `deleteElement(${upTheCounter() + 1})`;
    classNameAttr.value = 'child';
    nameAttr.value = `${upTheCounter()}`;
    element.setAttributeNode(classNameAttr);
    element.setAttributeNode(onClickAttr);
    element.setAttributeNode(nameAttr);
    element.innerHTML = '<button>delete</button>';
    main.appendChild(element);
}

function checkElementsArray () {
    var elements = document.getElementById('main').getElementsByClassName('child');
    console.log(elements);
}

var counter = 3;

function upTheCounter () {
    return counter = counter + 1;
}