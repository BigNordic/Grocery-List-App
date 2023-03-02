document.body.addEventListener("keypress", seeEnter);
let userInput;
let section = document.getElementById("section");
let delAll = document.getElementById("delAll");
delAll.style.display = "none";

function addItem(){
	userInput = document.getElementById("input").value;
	let itemListContainer = document.createElement('div');
	itemListContainer.classList.add("container");
	let listElement = document.createElement('p');
	let numItems = document.createElement('input');
	numItems.setAttribute("type", "number");
	numItems.setAttribute("value", 1);
	numItems.classList.add("numInput")
	listElement.innerText = userInput;
	itemListContainer.appendChild(listElement);
	itemListContainer.appendChild(numItems);
	section.appendChild(itemListContainer);
	if(section.firstChild !== null){
		delAll.style.display = "block";
	} else {
		delAll.style.display = "none";
	}
	listElement.onclick = function (){
	section.removeChild(itemListContainer);
	if(section.firstChild !== null){
		delAll.style.display = "block";
	} else {
		delAll.style.display = "none";
	}
}
if(userInput == ""){
	section.removeChild(itemListContainer);
	if(section.firstChild == null){
		delAll.style.display = "none";
	}
}

delAll.onclick = function (){
	while(section.firstChild){
		section.removeChild(section.firstChild)
	}
	delAll.style.display = "none";
}
}

function clearInput(){
	let val = document.getElementById("input");
	val.value = ""
}

function seeEnter(e){
	if(e.keyCode == 13){
		callBoth();
	}
}

function callBoth(){
	addItem();
	clearInput();
}