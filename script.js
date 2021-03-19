'use strict';

let keyPressed;
let currentSlide;

document.addEventListener("keydown", e => {
    keyPressed = e.code

    switch (keyPressed)
    {
    case 'ArrowRight':
        alert('>')
        break;
    case 'ArrowLeft':
        alert('<')
        break;

    default:
        return;
    }
});

