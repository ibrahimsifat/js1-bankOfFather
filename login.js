let user = document.getElementById('user')
let password = document.getElementById('password')
let submit = document.getElementById('submitbtn')
    //define email and password
var defineEmail = 'abc@baap.com'
var definePassword = 'password'
submit.addEventListener('click', function() {
        let userValue = user.value
        let userPassword = password.value

        if (userValue == defineEmail && userPassword == definePassword) {
            window.location.href = 'Banking.html'
        } else if (userValue == '' && userPassword == '') {
            alert('enter data first')
        } else if (userValue == '') {
            alert('Enter your email')
        } else if (userPassword == '') {
            alert('enter your password')
        } else(
            alert('Wrong Value')
        )
    })
    ////show the user pass word


// show user password 
let password2 = document.getElementById('password2')
console.log(password2)

let user2 = document.getElementById('user2')
let showBtnuser = document.getElementById('showbtnuser')
let showbtnpassword = document.getElementById('showbtnpassword')
showBtnuser.addEventListener('click', function() {

    user2.style.visibility = 'visible'

})
showbtnpassword.addEventListener('click', function() {

    password2.style.visibility = 'visible'

})