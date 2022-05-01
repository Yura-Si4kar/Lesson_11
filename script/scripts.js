const inputEl = document.querySelector('.input_text');
const inputBtn = document.querySelector('.input_btn');
const errorText = document.querySelector('.error');
const resultEl = document.querySelector('.input_blocks');

inputEl.addEventListener('input', getInput)
inputBtn.addEventListener('click', onAddInput);
resultEl.addEventListener('click', changeColor);

function onAddInput() {
    if (invalideInput()) {
        showError();        
    } else {
        const li = createLi();
        resultEl.append(li);
        removeError();
    }
    
    cleanString();
}

function createLi() {
    const listEl = document.createElement('li');
    listEl.textContent = getInput();
    return listEl;    
}

function getInput() {
    const input = inputEl.value;

    if (invalideInput(input)) {
        showError();
    } else if (Infinity >= input.length) {
        removeError();
    }

    return input;
}

function invalideInput(value) {
    return 3 >= inputEl.value.length || value==='' ? 'wrong' : null;
}

function cleanString() {
    inputEl.value = '';
}

function showError() {
    inputEl.classList.add('border_error');
    errorText.classList.add('show');
}

function removeError() {
    inputEl.classList.remove('border_error');
    errorText.classList.remove('show');
}

function changeColor(li) {
    if (li.target.style.color) {
        li.target.style.color = '';
    } else {
        li.target.style.color = 'yellowgreen';
    }
}