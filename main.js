const canvas = document.querySelector('#canvas');
const context = canvas.getContext('2d');
const scoreSpan = document.querySelector('#scoreSpan');

canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

const player = {
    x: 270,
    y: 360,
    w: 70,
    h: 15,
    dx: 5
}

function game(){
    update();
    render();
    requestAnimationFrame(game);
}
requestAnimationFrame(game);

function update(){

}

//--------------render--------------

function renderPlayer(){
    context.beginPath();

    context.rect(player. x, player.y ,player.w, player.h);
    context.fillStyle = "black";
    context.fill();

    context.closePath();
}

function render(){
    renderPlayer();
}