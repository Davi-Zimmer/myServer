"use strict";
function loginAndSingUpEvents() {
    const login = document.querySelector('#gotoLogin');
    const singUp = document.querySelector('#gotoSingUp');
    function toggleLogginVisibility(loginActived) {
        const loginStyle = document.querySelector('.loginItems')?.style;
        const singUpStyle = document.querySelector('.singUpItems')?.style;
        if (!loginStyle || !singUpStyle)
            return;
        if (loginActived) {
            loginStyle.display = 'flex';
            singUpStyle.display = 'none';
            return;
        }
        loginStyle.display = 'none';
        singUpStyle.display = 'flex';
    }
    if (!login || !singUp)
        return;
    login.addEventListener('click', () => {
        login.classList.add('buttonSelected');
        singUp.classList.remove('buttonSelected');
        toggleLogginVisibility(true);
    });
    singUp.addEventListener('click', () => {
        singUp.classList.add('buttonSelected');
        login.classList.remove('buttonSelected');
        toggleLogginVisibility(false);
    });
}
function documentLoaded() {
    loginAndSingUpEvents();
}
document.addEventListener('DOMContentLoaded', documentLoaded);
