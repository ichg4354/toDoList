const toDoForm = document.querySelector('.js-toDoForm'),
toDoInput = toDoForm.querySelector('input'),
toDos = document.querySelector('.js-todo')



function paintToDos(text) {
    const li = document.createElement('li')
    const delBtn = document.createElement('button')
    const span = document.createElement('span')
    span.innerText = text
    delBtn.innerText = '❌'
    li.appendChild(span)
    li.appendChild(delBtn)
    toDos.appendChild(li)
}

function toDoFormSubmitHandler(event) {
    event.preventDefault();
    const toDoValue = toDoInput.value
    paintToDos(toDoValue)
    toDoInput.value = ''
    saveToDos(toDoValue)
}

function saveToDos(todoValue) {dfd
    
    
}


toDoForm.addEventListener('submit',toDoFormSubmitHandler)
dfd

function init() {
    
}
init();