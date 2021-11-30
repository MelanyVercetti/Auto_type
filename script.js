const textElem = document.getElementById('text');
const speedElem = document.getElementById('speed');

const text = "Programming's cool";
let index = 1;
let speed = 300 / speedElem.value;

const showText = () => {
    textElem.innerText = text.slice(0, index);
    index++;

    if (index > text.length) {
        index = 1;
    }

    setTimeout(showText, speed);
};

showText();

speedElem.addEventListener('input', e => speed = 300 / e.target.value)