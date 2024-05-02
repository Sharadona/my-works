const cards = document.querySelectorAll('.card');
const end = document.querySelector('.end-game');
const restart = document.querySelector('.restart');
let num = 3;

let firstCard = null;
let secondCard = null;
let clickable = true;

function resetState() {
    firstCard = null;
    secondCard = null;
    clickable = true;
}

function matchCard() {
    setTimeout (() => {
        cards[firstCard].classList.add('match-card');
        cards[secondCard].classList.add('match-card');

        resetState()
    }, 300);
}

function closeCard() {
    setTimeout (() => {
        cards[firstCard].classList.add('close-card');
        cards[secondCard].classList.add('close-card');

        resetState()
    }, 300);
}

function random() {
    cards.forEach(card => {
        if (card.textContent.includes(1)) {
            card.textContent = 3;
        } 
        else if (card.textContent.includes(2)) {
            card.textContent = 1;
        }
        else {
            card.textContent = 2;
        }
    })
}

cards.forEach((card, index) => 
    card.addEventListener('click', () => {
        if(card.classList.contains('match-card')) {          // проверка на наличие класс ред
            return; 
        } 
        if (!clickable) {                                    // переворот карты, это законченное действие, ретёрн это выход из действия
            return;
        }
        card.classList.remove('close-card');

        if(firstCard == null) {
            firstCard = index;
        } 
        if (index != firstCard) {
            secondCard = index;
            clickable = false;
        }

        if (firstCard != null && secondCard != null) {
            if (
                cards[firstCard].textContent ===
                cards[secondCard].textContent
            ) {
                matchCard()
            } else {
                closeCard()
            }
        }
        setTimeout(() => {
            if (Array.from(cards).every(card => card.className.includes('match-card'))) {
                end.classList.add('visible');
            }
        }, 1000);
    }
));

restart.addEventListener('click', function() {
    end.classList.remove('visible');
    cards.forEach(card => {
        card.classList.remove('match-card');
        card.classList.add('close-card');
    })
    random();
});