'use strict';

let keyPressed;

document.addEventListener("keydown", e => {

    switch (e.code)
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

function ending()
{    
    document.querySelector('.end').style.display = 'none';
    document.querySelector('.endingTime').style.display = 'flex';
    document.getElementById('yee').play();
}