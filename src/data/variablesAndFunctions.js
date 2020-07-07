const JUMP_POWER = 13;
const GRAVITY = -1;
const TERMINAL_VELOCITY = -16;
const FRICTION = 0.85;
const ACCELERATION = 1;

var personPos = new Point(0, 0, 0, 0);
var wallJumpTime = 0;

function checkGroundCollision() {
    return (collideRectRect(personPos.x, personPos.y, 25, 25, 0, height + 1, width, 1)
        || collideRectRect(personPos.x, personPos.y, 25, 25, 37, 50, 20, height - 80)
        || collideRectRect(personPos.x, personPos.y, 25, 25, width + 1, 0, 1, height)
        || collideRectRect(personPos.x, personPos.y, 25, 25, 37, 50, 20, height - 80));
}