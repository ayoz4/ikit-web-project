function deleteElement (currentName) {
    var elements = document.getElementById('main').getElementsByClassName('child');
    console.log(elements);

    for (let i = 0; i < elements.length; i++) {

        if (elements[i].getAttribute('name') == currentName) {
            elements[i].remove();
            break;
        }
    }
}   