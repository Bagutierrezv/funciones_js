/*function pintar() {
    ele.style.backgroundColor = 'yellow'
}
const ele = document.getElementById("ele1")
ele.addEventListener("click", pintar);*/

const ele = document.getElementById('ele1')
ele.style.backgroundColor = 'green'

const pintar =  (elemento,color) => {
    elemento.style.backgroundColor = color

    console.log(color)
}

ele.addEventListener('click', () => {
    pintar(ele,'yellow')
})