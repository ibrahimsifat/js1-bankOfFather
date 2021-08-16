//selection
let dipositInput = document.getElementById('depositeInput')

let dipositText = document.getElementById('depositText')

let dipositBtn = document.getElementById('depositBtn')
    // addevenlitchener of deposite
dipositBtn.addEventListener('click', function() {
    // collect input value
    let dipositInputString = dipositInput.value
    let dipositInputAmount = parseFloat(dipositInputString)

    // deposite text
    let dipositTextString = dipositText.innerText
    let dipositTextAmount = parseFloat(dipositTextString)
        //addition 
    let newdipositAmount = dipositTextAmount + dipositInputAmount
        // sectct value 
    dipositText.innerText = newdipositAmount
        //clear input
    dipositInput.value = ''

    // add deposit value on blance
    let balanceText = document.getElementById('balanceText')
    let balanceTextString = balanceText.innerText
        //convarting string to number
    let balanceTextAmount = parseFloat(balanceTextString)
        //adding blance and diposit
    let newBalanceValue = balanceTextAmount + dipositInputAmount
        //displaying
    balanceText.innerText = newBalanceValue
})


//withdraw btn add event
//select add
let withdrawInput = document.getElementById('withdrawInput')
let withdrawText = document.getElementById('withdrawText')
let withdrawBtn = document.getElementById('withdrawBtn')
    // add evevt on the btn
withdrawBtn.addEventListener('click', function() {
    // get value of input
    let withdrawInputString = withdrawInput.value;
    let withdrawInputAmount = parseFloat(withdrawInputString);
    // get value of text
    let withdrawTextString = withdrawText.innerText;
    let withdrawTextAmount = parseFloat(withdrawTextString)
        // adding display value 
    let newwithdrawValue = withdrawInputAmount + withdrawTextAmount
        // display value 
    withdrawText.innerText = newwithdrawValue
        //clear input
    withdrawInput.value = ''
        // decreasing blancing value

    let balanceText = document.getElementById('balanceText');
    // get innertext
    let balanceTextString = balanceText.innerText;
    // convarting string to num
    let balanceTextAmount = parseFloat(balanceTextString)
    let newBalanceValue = balanceTextAmount - withdrawInputAmount
        //displaying value
    balanceText.innerText = newBalanceValue
})