const btn = document.body.querySelector('.btn');
const closeBtn = document.body.querySelector('.close-btn');
const cont = document.body.querySelector('.content');
const modWind = document.body.querySelector('.modal-window');

function close() {
    cont.classList.remove('dis');
    modWind.classList.remove('dis');
}

function open() {
    cont.classList.add('dis');
    modWind.classList.add('dis');
}

[closeBtn, modWind].forEach(element => {
    element.addEventListener('click', close)
});

btn.addEventListener('click', open)
 



                                                // КРАСИТЬ КВАДРАТ ПО ВВОДУ В INPUT
const box = document.body.querySelector('.box');
const changeColor = document.body.querySelector('.inp');

changeColor.addEventListener('input', change);

let colors = {
    red: 'red',
    blue: 'blue',
    orange: 'orange',
    green: 'green',
    black: 'black',
    yellow: 'yellow',
    purple: 'purple',
    grey: 'grey',
    pink: 'pink',
}

function change(event) {
    box.style.background = colors[event.target.value] || 'transparent';
}