document.getElementById('login-submit').addEventListener('click', function() {
    // getting user Email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;

    // getting user Password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    // check user's email & password
    if (userEmail == 'mdsanju387@gmail.com' && userPassword == 'regnoveinsanju') {
        window.location.href = 'banking.html';
    } else {
        console.log('invalid user');
    }
});