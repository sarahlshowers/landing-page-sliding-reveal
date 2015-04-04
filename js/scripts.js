var animate = document.getElementById('animate');
var sliderUp = document.querySelector('.sliderUp');
var logoUp = document.querySelector('.logoUp');
var sliderDown = document.querySelector('.sliderDown');

animate.addEventListener('click', animateSlider, false);

function animateSlider() {
    if (sliderUp.classList.contains('closed')) {
        sliderUp.classList.remove('closed');
        sliderUp.classList.add('opened');
    }
    if (logoUp.classList.contains('closed')) {
        logoUp.classList.remove('closed');
        logoUp.classList.add('opened');
    }
    if (sliderDown.classList.contains('closed')) {
        sliderDown.classList.remove('closed');
        sliderDown.classList.add('opened');
    }
}