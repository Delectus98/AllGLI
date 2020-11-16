
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !
function Shape(color, outline)
{
    this.color = color;
    this.outline = outline;
}

function Rectangle(x,y, w, h, outline, color) {
    //Rectangle.prototype = new Shape(color, outline);
    this.color = color;
    this.outline = outline;
    this.tlx = x;
    this.tly = y;
    this.w = w;
    this.h = h;
}

function Line(bx, by, ex, ey, outline, color) {
    //Line.prototype = new Shape(color, outline);
    this.color = color;
    this.outline = outline;
    this.bx = bx;
    this.by = by;
    this.ex = ex;
    this.ey = ey;
    console.log(bx + ":" + by + ":" + ex + ":" + ey);
}

function Drawing() {
    this.array = [];
}

Drawing.prototype.getForms = function () {
    return this.array;
}
