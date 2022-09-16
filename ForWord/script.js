'use strict';



document.querySelector('.close').addEventListener("click", function () {
    document.querySelector('.modal-container').style.display = "none";
});

document.getElementById('contact-submit').addEventListener("click", function () {

    document.querySelector('.modal-container').style.display = "flex";

    let userInpiut = document.querySelector('#fname');
    let greeting = document.querySelector('#greeting');


    let userEmail = document.querySelector('#email');
    let message = document.querySelector('#confirmation');

    let name = userInpiut.value;
    let email = userEmail.value;

    let trimName = name.split(' ')[0];
    let trimEmail = email.split('@')[1];
    let showEmail = trimEmail.split('.')[0];

    greeting.innerHTML = "Welcome, " + trimName + "!";
    message.innerHTML = "Thanks for fiilling out the form. A confirmation email has been sent to your " + showEmail + " account.";

});


function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
