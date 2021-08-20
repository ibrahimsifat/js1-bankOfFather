let dipositInput = document.getElementById('dipositInput')
let dipositBtn = document.getElementById('dipositBtn')
    //withdraw
let withdrawInput = document.getElementById('withdrawInput')
let withdrawBtn = document.getElementById('withdrawBtn')
    //display text 
let dipositText = document.getElementById('dipositText')
let withdrawText = document.getElementById('withdrawText')
    //balence text
let balenceText = document.getElementById('balanceText')
    // updateValue function 
function updateValue(value, isDiposit) {
    let input = document.getElementById(value + 'Input')
    let inputValue = parseFloat(input.value)
    let text = document.getElementById(value + 'Text')
    let textValue = parseFloat(text.innerText)
    text.innerText = inputValue + textValue
        //balenceTotal
    let balenceTotal = parseFloat(balenceText.innerText)
    if (isDiposit) {
        balenceText.innerText = balenceTotal + inputValue
    } else {
        balenceText.innerText = balenceTotal - inputValue
    }
}
dipositBtn.addEventListener('click', function() {
    updateValue('diposit', true)
})
withdrawBtn.addEventListener('click', function() {
    updateValue('withdraw', false)
})