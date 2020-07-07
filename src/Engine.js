function preload() {

}

function setup() {
    createCanvas(1200, 800);
    frameRate(50);
    levelWidth = width*2;
}

function draw() {
    push();
    noStroke();
    background(0);
    if (playerPos.x > width * 0.5) {
        if (playerPos.x > levelWidth - (width * 0.5))
            scrollX = levelWidth - width;
        else
            scrollX = playerPos.x - (width * 0.5);
        translate(-scrollX, 0);
    }
    fill("#D00000");
    rect(0, 0, width, height);
    rect(width * 1.75, 0, 100, 700);
    fill("white");
    rect(37, 50, 20, height - 80);
    if (wallJumpTime <= 0 || playerPos.vel.xv == 0) {
        if (keyIsDown(37))
            playerPos.vel.xv -= ACCELERATION;
        if (keyIsDown(39))
            playerPos.vel.xv += ACCELERATION;
        playerPos.vel.xv *= keyIsDown(16) ? DASH_FRICTION : FRICTION;
    }
    else wallJumpTime--;
    playerPos.Move(Math.round(playerPos.vel.xv), 0);
    if (checkGroundCollision()) {
        while (checkGroundCollision())
            playerPos.x -= playerPos.vel.xv / Math.abs(playerPos.vel.xv);
        if (keyIsDown(38) && playerPos.vel.yv < 0) {
            playerPos.vel.xv = (playerPos.vel.xv / Math.abs(playerPos.vel.xv)) * -9;
            playerPos.vel.yv = JUMP_POWER;
            wallJumpTime = 15;
        }
        else
            playerPos.vel.xv = 0;
    }
    playerPos.vel.yv += GRAVITY;
    if (playerPos.vel.yv < TERMINAL_VELOCITY)
        playerPos.vel.yv = TERMINAL_VELOCITY;
    playerPos.Move(0, playerPos.vel.yv);
    if (checkGroundCollision()) {
        while (checkGroundCollision())
            playerPos.y += playerPos.vel.yv / Math.abs(playerPos.vel.yv);
        if (keyIsDown(38) && playerPos.vel.yv < 0)
            playerPos.vel.yv = JUMP_POWER;
        else
            playerPos.vel.yv = 0;
    }
    fill("white");
    rect(playerPos.x, playerPos.y, 25, 25);
    pop();
}