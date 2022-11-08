import { Todo } from "./models/Todo";

// FUNKTIONER //

function close() {
  let parent = this.parentElement;
  for (let i = 0; i < close.length; i++) {
    parent.style.display = "none";
  }
}

// RESTEN //

let todos = [new Todo("Springa"), new Todo("Gå"), new Todo("Skola")];

let ul = document.getElementById("theList");
let liTag = document.getElementsByTagName("LI");

// LOOPAR - in i funktioner??? //

for (let i = 0; i < todos.length; i++) {
  ul.innerHTML += "<li>" + todos[i].what + "</li>";
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "theList__li__span";
  span.appendChild(txt);
  liTag[i].appendChild(span);
}

let spanClose = document.getElementsByClassName("theList__li__span");

spanClose.addEventListener("click", close);

let div = document.getElementById("div");

localStorage.setItem("todos", JSON.stringify(todos));

let fromLS = localStorage.getItem("todos");
let todosObj = JSON.parse(fromLS);

todos = todosObj.map((todo) => {
  return new Todo(todo.what);
});

console.log(todos);

function myFunction(myList) {
  for (let i = 0; i < myList.length; i++) {
    let container = document.createElement("div");
    let heading1 = document.createElement("h3");
    button1 = document.createElement("button");

    //let pTag1 = document.createElement("p");

    container.classList = "container";
    heading1.classList = "container__what";
    button1.classList = "container__button";
    //pTag1.classList = "container__where";
    heading1.innerHTML += myList[i].what;
    button1.innerHTML += "klar";
    //pTag1.innerHTML += myList[i].where;

    container.appendChild(heading1);
    container.appendChild(button1);
    //container.appendChild(pTag1);

    div.appendChild(container);
  }
}

myFunction(todos);

let inputElement = document.getElementById("userInput");

let theText = inputElement.value;

console.log(theText);

// let inputNew = document.getElementById("inputNew");

// inputNew.addEventListener("click", addNew);

//function addNew(todo) {
//todos.push(todo);
//myFunction(todo);
//

// till html <div id="newTask">
// <input type="text" id="userInput" value="">
// <button type="button" id="buttonAdd">Lägg till</button> </div>

// let addButton = document.getElementById("buttonAdd");

// function addClick() {
// console.log("klick hände");
// }

// addButton.addEventListener("click", addClick);
