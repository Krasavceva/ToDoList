let tasks = [
  "Маникюр",
  "Купить билеты на Филлипины ",
  "Почитать книгу",
  "Купить билеты на Бали",
  "Купить билеты на Пхукет",
  "Купить билеты в Бразилию",
];

function finishTask(sender) {
  sender.parentElement.classList.toggle("done");
} //зачеркивание при выборе

function addTask() {
  let name = document.getElementById("newTask").value;
  //console.log(name);
  tasks.push(name); //добавить задачу
  generateTasks(); // сохранить задачу на странице
  if (name == "") {
    alert("Задача не добавлена");
  }
  document.getElementById("newTask").value = "";
}

function generateTasks() {
  let optionString = "";
  for (let task of tasks) {
    optionString += `<div><input type='checkbox' 
onchange='finishTask(this)' ><span>${task}</span><button id="delete"> Delete</button></div>`;
  } //это цикл с генерацией на лету
  document.getElementById("container").innerHTML = optionString;
}

document.addEventListener(
  "DOMContentLoaded", //DOMContentLoaded ивент загрузки страницы
  function () {
    generateTasks();
  }
);
