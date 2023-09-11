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

const bricks = {
    rows: 7,
    cols: 4,
}

const brick = {
    w: 65,
    h: 20,
    padding: 15,
    offsetX: 45,
    offsetY: 60,
    visible: true,
}

const bricksArr = [];

for(let i = 0; i < bricks.rows; i++){
    bricksArr[i] = [];

    for( let j = 0; j < bricks.cols; j++){
        const x = i * (brick.w +brick.padding) + brick.offsetX;
        const y = j * (brick.h +brick.padding) + brick.offsetY;

        bricksArr[i][j] = {
            x,
            y,
            ...brick,
        }
    }
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

function renderBricks(){
    bricksArr.forEach((col) => {
        col.forEach((brick) => {
            context.beginPath();

            context.rect(brick.x, brick.y, brick.w, brick.h);
            context.fillStyle = brick.visible ? "#C21A70" : "transparent"
            context.fill();
            context.closePath();
        })
    })
}

function render(){
    renderPlayer();
    renderBall();
    renderBricks();
}