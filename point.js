function Point(x, y) {
    this.x = x;
    this.y = y;
}

Point.prototype.distanceTo = function(p) {
    return Math.sqrt(Math.pow(this.x - p.x, 2) + Math.pow(this.y - p.y, 2));
}

Point.prototype.distanceToInt = function(p) {
    return Math.round(this.distanceTo(p));
}

Point.prototype.moveCloserTo = function(p) {
    if (new Point(this.x+1,this.y).distanceTo(p) < this.distanceTo(p))
        this.x += 1;
    else if (new Point(this.x, this.y+1).distanceTo(p) < this.distanceTo(p))
        this.y += 1;
    else if (new Point(this.x-1, this.y).distanceTo(p) < this.distanceTo(p))
        this.x -= 1;
    else
        this.y -= 1;
}
