const images = document.querySelectorAll('.slider-img');
const nextButtom = document.querySelector('.next');
const prevButtom = document.querySelector('.prev');
let slideIndex = 0;

nextButtom.addEventListener('click', () => {
    next();
})
prevButtom.addEventListener('click', () => {
    prev();
})

function showImage(index) {
    images[index].classList.add('active');
}
function hiddenImage(index) {
    images[index].classList.remove('active');
}

function next() {
    hiddenImage(slideIndex);
    slideIndex += 1;
    if (slideIndex > images.length - 1) {
        slideIndex = 0;
    }
    showImage(slideIndex);
}
function prev() {
    hiddenImage(slideIndex);
    slideIndex -= 1;
    if (slideIndex < 0) {
        slideIndex = images.length - 1;
    }
    showImage(slideIndex);
}