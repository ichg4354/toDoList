
const numOfPictures = 6

function createRanNum() {
    const ranNum = Math.floor(Math.random() * numOfPictures)
    return ranNum
}

function paintImage(num) {
    const body = document.querySelector('body')
    const image = new Image()
    image.src = `images/${num + 1}.jpg`
    body.prepend(image)
    image.classList.add('image')
}


function init() {
    const newNum = createRanNum()
    paintImage(newNum)
}
init();