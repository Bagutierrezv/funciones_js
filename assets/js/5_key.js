const cuadros = document.getElementById('key')
const colorCuadro = (color) => {
    cuadros.style.backgroundColor = color
}
const nuevosDiv = (color) => {
    const crearDiv = document.createElement('div')
    crearDiv.style.width = '200px'
    crearDiv.style.height = '200px'
    crearDiv.style.margin = '32px'
    crearDiv.style.borderColor = '2px solid black'
    crearDiv.style.backgroundColor = color
    document.body.appendChild(crearDiv)
}

document.addEventListener('keydown', (e) => {
    console.log(e.key)
    if (e.key === 'a') {
        colorCuadro('pink')
    }
    else if (e.key === 's') {
        colorCuadro('orange')
    }
    else if (e.key === 'd') {
        colorCuadro('skyblue')
    }
    else if (e.key === 'q') {
        nuevosDiv('purple')
    }
    else if (e.key === 'w') {
        nuevosDiv('Gray')
    }
    else if (e.key === 'e') {
        nuevosDiv('brown')
    }
})