const toDoForm = document.querySelector('.js-toDoForm'),
toDoInput = toDoForm.querySelector('input'),
toDosJs = document.querySelector('.js-todo')

const toDoList = []

function paintToDos(text) {
    const li = document.createElement('li')
    const delBtn = document.createElement('button')
    const span = document.createElement('span')
    span.innerText = text
    delBtn.innerText = '❌'
    li.appendChild(span)
    li.appendChild(delBtn)
    toDosJs.appendChild(li)

    const toDos = {
        text: text,
        id: toDoList.length + 1
    }

    toDoList.push(toDos)
    saveToDos(toDoList)
}

function loadtoDos() {
    const loadedtoDos = localStorage.getItem('toDos')
    const parsedtoDos = JSON.parse(loadedtoDos)
    parsedtoDos.forEach(function (eachToDo) {
        paintToDos(eachToDo.text)
    })
}

function saveToDos(toDos) {
    stringifiedtoDos = JSON.stringify(toDos)
    localStorage.setItem('toDos',stringifiedtoDos)
}


function toDoFormSubmitHandler(event) {
    event.preventDefault();
    const toDoValue = toDoInput.value
    paintToDos(toDoValue)
    toDoInput.value = ''
}



toDoForm.addEventListener('submit',toDoFormSubmitHandler)

function init() {
    loadtoDos();
}
init();