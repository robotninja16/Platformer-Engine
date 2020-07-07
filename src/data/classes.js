class Point {
    x = 0;
    y = 0;
    vel = null;
    /**
     * @returns {Point} A new instance of the point.
     * @param {Number} x The x position of the point.
     * @param {Number} y The y position of the point.
     * @param {Number} xv The x velocity of the point.
     * @param {Number} yv The y velocity of the point.
     */
    constructor(x, y, xv, yv) {
        this.x = x;
        this.y = y;
        this.vel = new Velocity(xv == undefined ? 0 : xv, yv == undefined ? 0 : yv);
        return this;
    }
    /**
     * Moves the point by the specified x and y positions.
     * @param {Number} x (Optional: Requires y) The x velocity to move the point.
     * @param {Number} y (Optional: Requires x) The y velocity to move the point.
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
    constructor(xv, yv) {
        this.xv = xv;
        this.yv = yv;
    }
}