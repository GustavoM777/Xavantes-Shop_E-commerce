let image0 = document.getElementById('img0')


function selectPicture1() {
    image0.setAttribute('src', '../produtos/imagem/1/img1.jpg')
}

function selectPicture2() {
    image0.setAttribute('src', '../produtos/imagem/1/img2.gif')
}

function selectPicture3() {
    image0.setAttribute('src', '../produtos/imagem/1/img3.jpg')
}

function selectPicture4() {
    image0.setAttribute('src', '../produtos/imagem/1/img4.jpg')
}

let number1 = document.getElementById('number')

function minus() {
    if (number1.value > 1) {
        number1.setAttribute('value', `${number1.value - 1}`)
        return number1.value--
    }
    else {
        alert('Quantidade não pode ser menor do que 1')
    }
}

function plus() {
    id = number1.value++
    number1.setAttribute('value', `${id + 1}`)
}

console.log(number1.value)

