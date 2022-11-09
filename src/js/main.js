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
    let deleteButton = document.createElement("button");

    checkButton.type = "checkbox";
    checkButton.classList = "ul__checkbox";

    deleteButton.type = "button";
    deleteButton.classList = "ul__deleteButton";
    deleteButton.innerHTML = "Delete";

    li.innerHTML += todos[i].title;

    if (todos[i].done === true) {
      li.classList = "done";
      checkButton.classList = "--done";
    }

    ul.appendChild(li);
    ul.appendChild(checkButton);
    ul.appendChild(deleteButton);

    checkButton.addEventListener("click", () => {
      todos[i].done = !todos[i].done;
      createHTML(todos);
    });

    // deleteButton.addEventListener("click", () => {
    // //   li.className = "delete";
    // //   deleteButton.className = "delete";
    // //   checkButton.className = "delete";
    // //   console.log(todos[i]);
    // // });
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

//SORTERA//

//KOLLA VAD MER SOM SKULLE GÖRAS//

//CSS SÅ KLART//
