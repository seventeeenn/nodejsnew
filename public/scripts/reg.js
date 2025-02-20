function validatePassword() {
    const password = document.getElementById('inPass').value;
    const errorMessage1 = document.getElementById('errorPass');
    const errorMessage2 = document.getElementById('errorConfPass');
    const confPassword = document.getElementById('confInPass').value;

    const user = document.getElementById('user').value;
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const date = document.getElementById('date').value;
    const errorMessage3 = document.getElementById('errorAll');

    if (!user || !name || !surname || !date || !password || !confPassword) {
        errorMessage3.textContent = 'Пожалуйста, заполните все поля.';
    } else {
        //const AvatarUrl = document.getElementById узнать по поводу картинки
        errorMessage3.textContent = '';
        localStorage.setItem('userLogin', user);
        localStorage.setItem('userPassword', password);
        //localStorage.setItem('userAvatarUrl', AvatarUrl);

        console.log('Данные успешно сохранены в локальном хранилище.');

        window.location.href = './regsuccess.html';
    }

    if (confPassword!=password) {
        errorMessage2.textContent = 'Пароли должны совпадать.';
    } else {
        errorMessage2.textContent = '';
    }

    if (password.length < 8) {
        errorMessage1.textContent = 'Пароль должен содержать минимум 8 символов.';
        return;
    } else if (!/\d/.test(password)) {
        errorMessage1.textContent = 'Пароль должен содержать хотя бы одну цифру.';
        return;
    } else if (!/[A-ZА-Я]/.test(password)) {
        errorMessage1.textContent = 'Пароль должен содержать хотя бы одну заглавную букву.';
        return;
    }

    errorMessage1.textContent = '';

    
}

const regsuc = document.getElementById('regsuc');
function text() {
    const namelog = localStorage.getItem('userLogin');
    regsuc.textContent = (`Registration has been completed successfully, ${namelog}!`);
}
text();

function goHome() {
    window.location.href = './home.html';
}


