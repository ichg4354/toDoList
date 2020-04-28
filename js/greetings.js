const form = document.querySelector('.js-input'),
    input = form.querySelector('input'),
greetings = document.querySelector('.js-greetings')

const USER_LS = 'currentUser',
SHOWING_CLASS = 'showing'

function loadName() {
    const currentUser = localStorage.getItem(USER_LS)
    if (currentUser == null) {
        loadInput();
    } else {
        paintGreetings(currentUser);
    }
}

function loadInput() {
    greetings.classList.remove(SHOWING_CLASS)
    form.classList.add(SHOWING_CLASS)
}

function paintGreetings(text) {
    form.classList.remove(SHOWING_CLASS)
    greetings.classList.add(SHOWING_CLASS)
    greetings.innerText = `HELLO ${text}`
}

function saveName(text) {
    localStorage.setItem(USER_LS,`${text}`)
}

function inputHandler(event) {
    event.preventDefault();
    const writtenName = input.value
    saveName(writtenName)
    paintGreetings(writtenName)
}

form.addEventListener('submit',inputHandler)

function init() {
    loadName();
}
init();

