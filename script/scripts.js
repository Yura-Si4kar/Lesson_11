const DELETE_BTN_CLASS = 'delete-btn';
const INPUT_STRING = 'list_elements';
const DONE_CLASS = 'done';

const inputForm = document.querySelector('.input_block');
const toDoListEl = document.querySelector('.input_blocks');
const listTemplate = document.querySelector('.list_template').innerHTML;
const inputText = document.querySelectorAll('.input_text');
const errorText = document.querySelector('.error');
const addBtn = document.querySelector('.input_btn');
const resultEl = document.querySelector('.input_blocks');

inputForm.addEventListener('submit', onTaskFormSubmit);
toDoListEl.addEventListener('click', onTasksListClick);
// resultEl.addEventListener('click', changeColor);

let toDoList = [];

function onTaskFormSubmit(e) {
    e.preventDefault();

    const newTask = getTask();

    if (isTaskValid(newTask)) {
        addTask(newTask);
        resetForm();
        removeError();
    } else {
        showError();
    }
}

function getTask() {
    const task = {};

    inputText.forEach((inp) => {
        task[inp.name] = inp.value;
    });

    return task;
}

function generateTaskHtml(task) {
    return listTemplate.replace('{{id}}', task.id)
                        .replace('{{name}}', task.name)
                        .replace('{{doneClass}}', task.done ? 'done' : '');
}

function isTaskValid(task) {
    return isTextFieldValid(task.name);
}

function isTextFieldValid(value) {
    return value !== '';
}

function addTask(task) {
    const newTaskHtml = generateTaskHtml(task);
    toDoListEl.insertAdjacentHTML('beforeend', newTaskHtml);

    toDoList.push(task);
    task.id = Date.now();
    renderList();
}

function getTaskID(el) {
    return +el.closest('.' + INPUT_STRING).dataset.id;
}

function onTasksListClick(e) {
    if (e.target.classList.contains(INPUT_STRING)) {
        taskID = getTaskID(e.target);
        switchingСolors(taskID);
    }

    if (e.target.classList.contains(DELETE_BTN_CLASS)) {
        taskID = getTaskID(e.target);
        deleteTask(taskID);
    }   
}

function renderList() {
    toDoListEl.innerHTML = toDoList.map(generateTaskHtml).join('\n');
}

function resetForm() {
    inputForm.reset();
}

function getTaskString(el) {
    return el.closest('.' + INPUT_STRING);
}

function showError() {
    errorText.classList.add('show');
}

function removeError() {
    errorText.classList.remove('show');
}

function switchingСolors(id) {
    const task = toDoList.find((task) => task.id === id);

    task.done = !task.done;

    renderList();
}

function deleteTask(id) {
    toDoList = toDoList.filter((task) => task.id !== id);

    renderList();
}