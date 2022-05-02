const ITEMS_CLASS = 'input_items';
const DELETE_BTN_CLASS = 'delete_btn';

const LIST_TEMPLATE = document.querySelector('.list_template').innerHTML;

const addBtn = document.querySelector('.input_btn');
const inputText = document.querySelector('.input_text');
const taskList = document.querySelector('.list_block');
const errorEl = document.querySelector('.error');
const deleteBtn = document.querySelector('.delete_btn');


addBtn.addEventListener('click', onAddLiItems);
taskList.addEventListener('click', onListElementsClick);

const toDoList = [];

function onAddLiItems(e) {
    if (validateInput()) {
        showError();
        clearInputs();
    } else {
        remuveError();
        addItems();
        addToDoList();
    }

    e.preventDefault();
    clearInputs();
}

function addItems() {
    const taskItemHtml = getListHTML();

    taskList.insertAdjacentHTML('beforeend', taskItemHtml);
}

function getListHTML() {
    return LIST_TEMPLATE.replace('{{Name}}', getInputText()) 
}

function getInputText() {
    
    return inputText.value;
}

function validateInput() {
    const inputText = getInputText();

    if (inputText==='') {
        return (inputText==='')
    }
}

function addToDoList() {
    toDoList.push(getInputText());
}

function clearInputs() {
    inputText.value = '';
}

function onListElementsClick(e) {
    if (e.target.classList.contains(DELETE_BTN_CLASS)) {
        deleteContacts(e.target.closest('.' + ITEMS_CLASS));
    }
}

function showError() {
    errorEl.classList.add('show');
}

function remuveError() {
    errorEl.classList.remove('show');
}

function deleteContacts(el) {
    el.remove();
}