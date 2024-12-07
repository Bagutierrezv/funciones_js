const cuadro1 = document.getElementById('cuadro1')
const cuadro2 = document.getElementById('cuadro2')
const cuadro3 = document.getElementById('cuadro3')
const cuadro4 = document.getElementById('cuadro4')

const pintarCuadro = (elemento, color) => {
    console.log(elemento, color)
    elemento.style.backgroundColor = color
}

cuadro1.addEventListener('click', () => {
    console.log(e)
    pintarCuadro(cuadro1, 'black')
})
cuadro2.addEventListener('click', () => {
    pintarCuadro(cuadro2, 'black')
})
cuadro3.addEventListener('click', () => {
    pintarCuadro(cuadro3, 'black')
})
cuadro4.addEventListener('click', () => {
    pintarCuadro(cuadro4, 'black')
})
