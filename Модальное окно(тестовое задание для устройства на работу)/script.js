const btn = document.querySelector('.fon-open-btn');
const background = document.querySelector('.title');
const modalWindow = document.querySelector('.modal-window');
const btnX = document.querySelector('.close-btn');
const phone = document.querySelector('.input');
const modWindBtn = document.querySelector('.btn');
const modWindCont = document.querySelector('.modal-window-content');
const modWindEnd = document.querySelector('.modal-window-end');
let timeoutID; 
// МАСКА ДЛЯ ТЕФОНОВ
const mask = IMask(
    phone,
    {mask : '+{7} (000) 000 - 00 - 00'}
)

// ОТКРЫТЬ МОДАЛЬНОЕ ОКНО И ЗАКРЫТЬ ЕГО
function open() {
    reset()
    background.classList.add('visible');
    modalWindow.classList.add('visible');
    console.log('Прочитал поп-ап');
}

function close() {
    background.classList.remove('visible');
    modalWindow.classList.remove('visible');
    console.log('Закрыл поп-ап')
}

btn.addEventListener('click', open);

[btnX, background].forEach(element => {
    element.addEventListener('click', close)
})

// ЦВЕТ РАМКИ ИНПУТ ПРИ ВЗАИМОЗДЕЙСТВИИ С НИМ
phone.addEventListener('input',function() {
    if (phone.value === '') {
        phone.classList.remove('invalid', 'valid');
        phone.classList.add('typing');
    }
    else if (!mask.masked.isComplete) {
        phone.classList.remove('typing', 'valid');
        phone.classList.add('invalid');
    } 
    else {
        phone.classList.remove('typing', 'invalid');
        phone.classList.add('valid');
    }
})
phone.addEventListener('blur', function(){
    if (phone.value === '') {
        phone.classList.remove('invalid', 'valid', 'typing');
    }
    else if (!mask.masked.isComplete) {
        phone.classList.remove('typing', 'valid');
        phone.classList.add('invalid');
    } 
    else {
        phone.classList.remove('typing', 'invalid');
        phone.classList.add('valid');
    }
})

function reset() {
        modWindCont.classList.remove('none');
        modWindEnd.classList.add('none');
        phone.value = '';
        phone.classList.remove('valid', 'invalid');
}

// ОТПРАВКА ФОРМЫ
modWindCont.addEventListener('submit', function(e) {
    e.preventDefault();
    if (!mask.masked.isComplete) {
        return;
    }
    console.log("Ответил в поп-ап\n" + phone.value);
    modWindCont.classList.add('none');
    modWindEnd.classList.remove('none');
    timeoutID = setTimeout (close, 5000);
});

btnX.addEventListener('click', function() {
    clearTimeout(timeoutID)
})














