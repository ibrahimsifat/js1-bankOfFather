// selection 
let depositInput = document.getElementById('depositInput')
let depositText = document.getElementById('depositText')
let depositBtn = document.getElementById('depositBtn')
    // withdraw 
let withdrawInput = document.getElementById('withdrawInput')
let withdrawText = document.getElementById('withdrawText')
let withdrawBtn = document.getElementById('withdrawBtn')
    // balance 
let balanceText = document.getElementById('balanceText')
    // get input to floting number
function getInput(inputId) {
    let input = document.getElementById(inputId)
    let inputString = input.value
    let inputAmount = parseFloat(inputString)
    return inputAmount
}
// get text number function 
function getText(textId) {
    let text = document.getElementById(textId)
    let textString = text.innerText
    let textAmount = parseFloat(textString)
    return textAmount
}
//deposit section add event handle
depositBtn.addEventListener('click', function() {
        depositText.innerText = getInput('depositInput') + getText('depositText')
            //balence add
        balanceText.innerText = getBalence('balanceText') + getInput('depositInput')
            // clear input 
        depositInput.value = ''
    })
    //withdraw section add event handle
withdrawBtn.addEventListener('click', function() {
        withdrawText.innerText = getInput('withdrawInput') + getText('withdrawText')
        balanceText.innerText = getBalence('balanceText') - getInput('withdrawInput')
            // clear input 
        withdrawInput.value = ''
    })
    //balence function
function getBalence(balenceId, ) {
    let balenceValue = document.getElementById(balenceId)
    let balenceString = balenceValue.innerText
    let balenceAmount = parseFloat(balenceString)
    return balenceAmount
}