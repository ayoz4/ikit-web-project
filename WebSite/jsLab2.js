function info() {
	alert("Кол-во anchors = " + document.anchors.length + '\n' + 
		"Кол-во images = " + document.images.length + '\n' +
		"Кол-во links = " + document.links.length);

	console.log("Кол-во anchors = " + document.anchors.length + '\n' + 
		"Кол-во images = " + document.images.length + '\n' +
		"Кол-во links = " + document.links.length);
}

info();

info1 = () => {
	alert("Hi!");
}

info1();
