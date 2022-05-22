const firstUnit = document.querySelector('.first-unit')
const secondUnit = document.querySelector('.second-unit')
const input = document.querySelector('input')
const result = document.querySelector('.result')
const convertButton = document.querySelector('.conv')
const resetButton = document.querySelector('.reset')
const changeButton = document.querySelector('.change')

const changeUnits = () => {
    if (firstUnit.textContent === '°C') {
        firstUnit.textContent = '°F'
        secondUnit.textContent = '°C'
        result.textContent = ''
    } else {
        firstUnit.textContent = '°C'
        secondUnit.textContent = '°F'
        result.textContent = ''
    }
}

const fahrToCel = () => {
    let fahrenheit = input.value * 1.8 + 32
    result.textContent = `${input.value} °C to ${fahrenheit.toFixed(1)} °F`
    input.value = ''
}

const celToFahr = () => {
    let celsius = (input.value - 32) / 1.8
    result.textContent = `${input.value} °F to ${celsius.toFixed(1)} °C`
    input.value = ''
}

const conversion = () => {
    if (firstUnit.textContent === '°C') {
        fahrToCel()
    } else {
        celToFahr()
    }
}

const reset = () => {
    input.value = ''
    result.textContent = ''
}


convertButton.addEventListener('click', conversion)
changeButton.addEventListener('click', changeUnits)
resetButton.addEventListener('click', reset)