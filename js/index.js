let count = 0

const imageBlock = document.querySelector('.image');

function changeImage() {
    setInterval(() => {
        if (count < 4) {
            count++
            imageBlock.setAttribute('src', `../assets/images/image${count}.jpeg`)
        } else {
            count = -1
            count++
            imageBlock.setAttribute('src', `../assets/images/image${count}.jpeg`)
        }
    }, 3000)
}

changeImage();

function increase() {
    if (count < 4) {
        count++
        imageBlock.setAttribute('src', `../assets/images/image${count}.jpeg`)
    } else {
        count = -1
        count++
        imageBlock.setAttribute('src', `../assets/images/image${count}.jpeg`)
    }
}

function decrease() {
    if (count > 0) {
        count--
        imageBlock.setAttribute('src', `../assets/images/image${count}.jpeg`)
    } else {
        count = 5
        count--
        imageBlock.setAttribute('src', `../assets/images/image${count}.jpeg`)
    }
}

document.querySelector('.next').addEventListener('click', () => increase());
document.querySelector('.previous').addEventListener('click', () => decrease());
