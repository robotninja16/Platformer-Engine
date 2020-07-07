class Point {
    x = 0;
    y = 0;
    /**
     * @returns {Point} A new instance of the point.
     * @param {number} x The x position of the point.
     * @param {number} y The y position of the point.
     * @param {number} xv The x velocity of the point.
     * @param {number} yv The y velocity of the point.
     */
    constructor(x, y, xv, yv) {
        this.x = x;
        this.y = y;
        this.vel = new Velocity(xv == undefined ? 0 : xv, yv == undefined ? 0 : yv);
    }
    /**
     * Moves the point by the specified x and y positions.
     * @param {number} x (Optional: Requires y) The x velocity to move the point.
     * @param {number} y (Optional: Requires x) The y velocity to move the point.
     */
    Move(x, y) {
        if (x == undefined)
            this.Move(this.vel.xv, this.vel.yv);
        else {
            this.x += x;
            this.y -= y;
        }
        return;
    }
}
class Velocity {
    /**
     * @returns {Velocity} A new instance of the velocity.
     * @param {number} xv The x factor for this velocity.
     * @param {number} yv The y factor for this velocity.
     */
    constructor(xv, yv) {
        this.xv = xv;
        this.yv = yv;
    }
}