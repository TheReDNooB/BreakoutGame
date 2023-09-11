const canvas = document.querySelector('#canvas');
const context = canvas.getContext('2d');
const scoreSpan = document.querySelector('#scoreSpan');

canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeigth;

const player = {
    x: 270,
    y: 360,
    w: 70,
    h: 15,
    dx: 5
}