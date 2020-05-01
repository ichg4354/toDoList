const toDoForm = document.querySelector('.js-toDoForm'),
toDoInput = toDoForm.querySelector('input'),
toDosJs = document.querySelector('.js-todo')

let toDoList = []

function paintToDos(text) {
    const li = document.createElement('li')
    const delBtn = document.createElement('button')
    const span = document.createElement('span')
    delBtn.innerText = '❌'
    span.innerText = text
    li.appendChild(span)
    li.appendChild(delBtn)
    toDosJs.appendChild(li)

    const toDos = {
        text: text,
        id: toDoList.length + 1
    }

    li.classList.add(toDoList.length + 1)

    toDoList.push(toDos)

    saveToDos(toDoList)

    delBtn.addEventListener('click', function (event) {
        toDosJs.removeChild(event.target.parentNode)
        newToDos = toDoList.filter(function (toDoEach) {
            return toDoEach.id != parseInt(event.target.parentNode.className);
        })
        toDoList = newToDos
        saveToDos(toDoList)
    })
}

// const delBtn = document.querySelector('button')

// delBtn.addEventListener('click', function (event) {
//     toDosJs.removeChild(event.target.parentNode)
//     newToDos = toDoList.filter(function (toDoEach) {
//         return toDoEach.id != parseInt(event.target.parentNode.className);
//     })
//     saveToDos(newToDos);
//     console.log(newToDos)


function loadtoDos() {
    const loadedtoDos = localStorage.getItem('toDos')
    const parsedtoDos = JSON.parse(loadedtoDos)
    parsedtoDos.forEach(function(eachToDo) {
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