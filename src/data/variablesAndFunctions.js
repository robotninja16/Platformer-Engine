const JUMP_POWER = 13;
const GRAVITY = -1;
const TERMINAL_VELOCITY = -16;
const FRICTION = 0.85;
const DASH_FRICTION = 0.9;
const ACCELERATION = 1;

var playerPos = new Point(0, 0, 0, 0);
var wallJumpTime = 0;
var levelWidth;
var scrollX = 0;

/**
 * Checks whether the player has collided with the ground or not.
 * @returns {boolean} Whether or not the player has collided with the ground.
 */
function checkGroundCollision() {
    return (collideRectRect(playerPos.x, playerPos.y, 25, 25, 0, height + 1, width * 2, 1)
        || collideRectRect(playerPos.x, playerPos.y, 25, 25, -2, 0, 1, height)
        || collideRectRect(playerPos.x, playerPos.y, 25, 25, (width * 2) + 1, 0, 1, height)
        || collideRectRect(playerPos.x, playerPos.y, 25, 25, 37, 50, 20, height - 80));
}