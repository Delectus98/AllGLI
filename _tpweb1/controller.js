
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;
	this.drawing = drawing;
	this.canvas = canvas;
	this.ctx = ctx;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.
	console.log("allo?" + canvas);
	this.dnd = new DnD(this.canvas, this);
};


// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
Pencil.prototype.onInteractionStart = function(dnd) {
	switch (this.currEditingMode) {
		case editingMode.line: {
			console.log("new line " + this.currColour);
			this.currentShape = new Line(dnd.bx, dnd.by, dnd.ex, dnd.ey, this.currLineWidth, ' ' + this.currColour);
			break;
		}
		case editingMode.rect: {
			console.log("new rect " + this.currColour);
			this.currentShape = new Rectangle(dnd.bx, dnd.by, dnd.bx, dnd.by, this.currLineWidth, ' ' + this.currColour);
			break;
		}
	}
}
Pencil.prototype.onInteractionEnd = function(dnd) {
	this.drawing.array.push(this.currentShape);
	this.currentShape = 0;
	this.drawing.paint(this.ctx, this.canvas);
	updateShapeList();
}
Pencil.prototype.onInteractionUpdate = function(dnd) {
	switch (this.currEditingMode) {
		case editingMode.line: {
			this.currentShape.ex = dnd.ex;
			this.currentShape.ey = dnd.ey;
			break;
		}
		case editingMode.rect: {
			this.currentShape.w = Math.abs(Math.max(dnd.ex, dnd.bx) - Math.min(dnd.ex, dnd.bx));
			this.currentShape.h = Math.abs(Math.max(dnd.ey, dnd.by) - Math.min(dnd.ey, dnd.by));
			this.currentShape.tlx = Math.min(dnd.ex, dnd.bx);
			this.currentShape.tly = Math.min(dnd.ey, dnd.by);
			break;
		}
	}
	this.drawing.paint(this.ctx, this.canvas);
	this.currentShape.paint(ctx);
}

