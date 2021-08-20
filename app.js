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
    if (inputValue > 0) {
        text.innerText = inputValue + textValue
    } else {
        text.innerText = textValue
    }

    //condition
    if (inputValue < 0) {
        alert(inputValue + ' is a nigative number Enter the valued number')

    } else if (inputValue > 0) {
        //balenceTotal
        let balenceTotal = parseFloat(balenceText.innerText)
        if (isDiposit) {
            balenceText.innerText = balenceTotal + inputValue
        } else {
            balenceText.innerText = balenceTotal - inputValue
        }
    }
}
dipositBtn.addEventListener('click', function() {
    updateValue('diposit', true)
        // clear input
    dipositInput.value = ''
})
withdrawBtn.addEventListener('click', function() {
    updateValue('withdraw', false)
        // clear input
    withdrawInput.value = ''
})