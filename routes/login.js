function showPass() {
    const passwordField = document.getElementById('inPass');
    const passwordFieldType = passwordField.getAttribute('type');
    const imgPass = document.getElementById('imgPass1');

    if (passwordFieldType === 'password') {
        passwordField.setAttribute('type', 'text');
        imgPass.setAttribute('src', 'images/hidepass.png');
    } else {
        passwordField.setAttribute('type', 'password');
        imgPass.setAttribute('src', 'images/showpass.png');
    }
};

function confShowPass() {
    const passwordField = document.getElementById('confInPass');
    const passwordFieldType = passwordField.getAttribute('type');
    const imgPass = document.getElementById('imgPass2');

    if (passwordFieldType === 'password') {
        passwordField.setAttribute('type', 'text');
        imgPass.setAttribute('src', 'images/hidepass.png');
    } else {
        passwordField.setAttribute('type', 'password');
        imgPass.setAttribute('src', 'images/showpass.png');
    }
};

function resetForm() {
    document.getElementById('form').reset();
};