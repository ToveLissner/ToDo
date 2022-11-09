import { Todo } from "./models/Todo";

let todos = [];

let form = document.getElementById("form");
let userInput = document.getElementById("userInput");

let ul = document.getElementById("theList");

// FUNKTIONER //

form.addEventListener("submit", (event) => {
  event.preventDefault();
  addTodo(userInput.value);
});

function addTodo(userInput) {
  let newTodos = new Todo(userInput, false);
  todos.push(newTodos);

  saveToLS(todos);
}

function createHTML(todos) {
  ul.innerHTML = "";
  for (let i = 0; i < todos.length; i++) {
    let li = document.createElement("li");
    let checkButton = document.createElement("button");

    checkButton.type = "checkbox";
    checkButton.classList = "ul__checkbox";

    li.innerHTML += todos[i].title;
    ul.appendChild(li);
    ul.appendChild(checkButton);
  }
}

function saveToLS(todos) {
  localStorage.setItem("todos", JSON.stringify(todos));

  createHTML(todos);
}

function getFromLS() {
  let fromLS = localStorage.getItem("todos");
  if (fromLS) {
    todos = JSON.parse(fromLS);
    createHTML(todos);
  }
}

getFromLS();

function completedTodo() {}

function deleteTodo() {}

// todos = todosObj.map((todo) => {
//   return new Todo(todo.title, todo.done);
// });

// let liTag = document.getElementsByTagName("LI");

// // LOOPAR - in i funktioner??? //

// for (let i = 0; i < todos.length; i++) {
//   ul.innerHTML += "<li>" + todos[i].what + "</li>";
//   let span = document.createElement("SPAN");
//   let txt = document.createTextNode("\u00D7");
//   span.className = "theList__li__span";
//   span.appendChild(txt);
//   liTag[i].appendChild(span);
// }

// let spanClose = document.getElementsByClassName("theList__li__span");

// spanClose.addEventListener("click", close);

// let div = document.getElementById("div");

// console.log(todos);

// function myFunction(myList) {
//   for (let i = 0; i < myList.length; i++) {
//     let container = document.createElement("div");
//     let heading1 = document.createElement("h3");
//     button1 = document.createElement("button");

//     //let pTag1 = document.createElement("p");

//     container.classList = "container";
//     heading1.classList = "container__what";
//     button1.classList = "container__button";
//     //pTag1.classList = "container__where";
//     heading1.innerHTML += myList[i].what;
//     button1.innerHTML += "klar";
//     //pTag1.innerHTML += myList[i].where;

//     container.appendChild(heading1);
//     container.appendChild(button1);
//     //container.appendChild(pTag1);

//     div.appendChild(container);
//   }
// }

// myFunction(todos);

// let inputElement = document.getElementById("userInput");

// let theText = inputElement.value;

// console.log(theText);

// // let inputNew = document.getElementById("inputNew");

// // inputNew.addEventListener("click", addNew);

// //function addNew(todo) {
// //todos.push(todo);
// //myFunction(todo);
// //

// // till html <div id="newTask">
// // <input type="text" id="userInput" value="">
// // <button type="button" id="buttonAdd">Lägg till</button> </div>

// // let addButton = document.getElementById("buttonAdd");

// // function addClick() {
// // console.log("klick hände");
// // }

// // addButton.addEventListener("click", addClick);
