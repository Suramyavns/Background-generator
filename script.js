var body = document.getElementById('body');
var color1 = document.querySelector('#color1');
var color2 = document.querySelector('#color2');
var css = document.querySelector('h3');
var btn = document.querySelector('.random');


function setgradient() {
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
    css.textContent = body.style.background
}

function random() {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
};

function randomcolorgenerator() {
    color1.value = random();
    color2.value = random();
    setgradient();
}
color1.addEventListener('input', setgradient);
color2.addEventListener('input', setgradient);
btn.addEventListener('click', randomcolorgenerator)