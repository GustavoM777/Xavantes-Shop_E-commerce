let image0 = document.getElementById('img0')


function selectPicture1() {
    image0.setAttribute('src', '../produtos/imagem/img1.jpg')
}

function selectPicture2() {
    image0.setAttribute('src', '../produtos/imagem/img2.jpg')
}

function selectPicture3() {
    image0.setAttribute('src', '../produtos/imagem/img3.jpg')
}

function selectPicture4() {
    image0.setAttribute('src', '../produtos/imagem/img4.jpg')
}

let number1 = document.getElementById('number')

function minus() {
    id = number1.value--
    number1.setAttribute('value',`${id-1}`)
}

function plus() {
    id = number1.value++
    number1.setAttribute('value',`${id+1}`)
}

console.log(minus1)
console.log(plus1)
console.log(number1.value)
console.log(test)