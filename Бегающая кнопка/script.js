const btnYes = document.querySelector('.btn-yes');
const modWind = document.querySelector('.modal-window');
const fon = document.querySelector('.fon');
const btnClose = document.querySelector('.btn-close');
const btnNo = document.querySelector('.no');
let num = 500;

function open() {
    modWind.classList.remove('none');
    fon.classList.remove('none');
}

function close() {
    modWind.classList.add('none');
    fon.classList.add('none');
}

function random(max) {
    for (let i = 0; i < 300; i++) {
        btnNo.style.top = Math.ceil(Math.random() * max) + 'px';
        if (btnNo.style.top < '200px') {
            btnNo.style.bottom = '';
            btnNo.style.right = '';
            btnNo.style.top = Math.ceil(Math.random() * max) + 'px';
            btnNo.style.left = Math.ceil(Math.random() * max) + 'px';
        }    
        else {
            btnNo.style.top = '';
            btnNo.style.left = '';
            btnNo.style.bottom = Math.ceil(Math.random() * max) + 'px';
            btnNo.style.right = Math.ceil(Math.random() * max) + 'px';
        }  
    }
}

btnYes.addEventListener('click', open);

btnClose.addEventListener('click', close);

btnNo.addEventListener('mouseover', function () {
    random(num);
});

