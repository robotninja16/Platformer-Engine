function preload() {

}

function setup() {
    createCanvas(500, 500);
    frameRate(50);
}

function draw() {
    background(0);
    rect(37, 50, 20, height - 80);
    if (wallJumpTime <= 0 || personPos.vel.xv == 0) {
        if (keyIsDown(37))
            personPos.vel.xv -= ACCELERATION;
        if (keyIsDown(39))
            personPos.vel.xv += ACCELERATION;
        personPos.vel.xv *= FRICTION;
    }
    else wallJumpTime--;
    personPos.Move(personPos.vel.xv, 0);
    if (checkGroundCollision()) {
        while (checkGroundCollision())
            personPos.x -= personPos.vel.xv / Math.abs(personPos.vel.xv);
        if (keyIsDown(38) && personPos.vel.yv < 0) {
            personPos.vel.xv = (personPos.vel.xv / Math.abs(personPos.vel.xv)) * -9;
            personPos.vel.yv = JUMP_POWER;
            wallJumpTime = 15;
        }
        else
            personPos.vel.xv = 0;
    }
    personPos.vel.yv += GRAVITY;
    if (personPos.vel.yv < TERMINAL_VELOCITY)
        personPos.vel.yv = TERMINAL_VELOCITY;
    personPos.Move(0, personPos.vel.yv);
    if (checkGroundCollision()) {
        while (checkGroundCollision())
            personPos.y += personPos.vel.yv / Math.abs(personPos.vel.yv);
        if (keyIsDown(38) && personPos.vel.yv < 0)
            personPos.vel.yv = JUMP_POWER;
        else
            personPos.vel.yv = 0;
    }
    fill("white");
    rect(personPos.x, personPos.y, 25, 25);
}