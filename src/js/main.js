import { Todo } from "./models/Todo";

let todos = [];

let form = document.getElementById("form");
let userInput = document.getElementById("userInput");

let ul = document.getElementById("theList");
let sortButton = document.getElementById("sortButton");
let button1234 = document.getElementById("button1234");

sortButton.classList = "sortButton";
button1234.classList = "button1234";

form.addEventListener("submit", (event) => {
  event.preventDefault();
  addTodo(userInput.value);
});

function addTodo(userInput) {
  let newTodos = new Todo(userInput, false, false, false);
  todos.push(newTodos);

  saveToLS(todos);
}

function createHTML(todos) {
  ul.innerHTML = "";
  userInput.value = "";

  for (let i = 0; i < todos.length; i++) {
    let li = document.createElement("li");
    let checkButton = document.createElement("button");
    let deleteButton = document.createElement("button");
    let deleteButton2 = document.createElement("button");

    checkButton.type = "button";
    checkButton.classList = "ul__checkButton";
    checkButton.innerHTML = "Markera/avmarkera";

    deleteButton.type = "button";
    deleteButton.classList = "ul__deleteButton";
    deleteButton.innerHTML = "Ta bort från listan";

    deleteButton2.type = "button";
    deleteButton2.classList = "ul__deleteButton";
    deleteButton2.innerHTML = "Radera";

    li.innerHTML += todos[i].title;

    button1234.addEventListener("click", () => {
      todos[i].del = false;
      createHTML(todos);
      saveToLS(todos);
    });

    if (todos[i].done === true) {
      li.classList = "done";
      checkButton.classList = "--done";
    }

    if (todos[i].del === true) {
      li.classList = "delete";
      checkButton.classList = "delete";
      deleteButton.classList = "delete";
      deleteButton2.classList = "delete";
    }

    if (todos[i].del2 === true) {
      li.classList = "delete";
      checkButton.classList = "delete";
      deleteButton.classList = "delete";
      deleteButton2.classList = "delete";
    }

    ul.appendChild(li);
    ul.appendChild(checkButton);
    ul.appendChild(deleteButton);
    ul.appendChild(deleteButton2);

    checkButton.addEventListener("click", () => {
      todos[i].done = !todos[i].done;
      createHTML(todos);
      saveToLS(todos);
    });

    deleteButton.addEventListener("click", () => {
      todos[i].del = true;
      createHTML(todos);
      saveToLS(todos);
    });

    deleteButton2.addEventListener("click", () => {
      if (
        confirm(
          "Denna åtgärd går ej att ångra. Är du helt säker på att du vill ta bort denna händelse?"
        ) === true
      ) {
        todos[i].del2 = true;
        createHTML(todos);
        saveToLS(todos);
      } else {
        todos[i].del2 = false;
        createHTML(todos);
        saveToLS(todos);
      }
    });
  }
}

sortButton.addEventListener("click", handleClick);

function handleClick() {
  let sortedTodos = todos.sort((a, b) => a.title.localeCompare(b.title));
  createHTML(todos);
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
