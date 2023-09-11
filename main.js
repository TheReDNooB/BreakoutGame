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

const ball = {
    x: 305,
    y: 350,
    radius: 7,
    dx: 4,
    dy: 9
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

function renderBall(){
    context.beginPath();

    context.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI);
    context.fillStyle = "black";
    context.fill();

    context.closePath();
}

function render(){
    renderPlayer();
    renderBall();
}