function deleteElement (currentName) {
    var elements = document.getElementById('main').getElementsByClassName('child');
    var emptyDiv = document.createElement('h1').innerHTML = 'Список пуст!';

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
    classNameAttr.value = 'child';
    element.setAttributeNode(classNameAttr);
    element.innerHTML = '<button>delete</button>';
    main.appendChild(element);
}

function checkElementsArray () {
    var elements = document.getElementById('main').getElementsByClassName('child');
    console.log(elements);
}