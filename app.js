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
    // adding value function
function updateValue(inputId, textId, totalAdd) {
    let input = document.getElementById(inputId)
    let inputValue = parseFloat(input.value)
    let text = document.getElementById(textId)
    let textValue = parseFloat(text.innerText)
    if (balenceText.innerText <= inputValue) {
        alert('not enough moeny ')
    } else {
        if (inputValue > 0) {
            text.innerText = inputValue + textValue
        }
    }

    //clear input value
    input.value = ''
    let total = document.getElementById('balanceText')
    let totalValue = parseFloat(total.innerText)
    if (inputValue > 0 && totalValue > inputValue) {
        if (totalAdd) {
            total.innerText = totalValue + inputValue
        } else {
            total.innerText = totalValue - inputValue

        }
    }
}
//deposit event handle 
dipositBtn.addEventListener('click', function() {
        updateValue('dipositInput', 'dipositText', true)
    })
    //withdrow event handle 
withdrawBtn.addEventListener('click', function() {
    updateValue('withdrawInput', 'withdrawText', false)
})