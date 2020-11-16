function DnD(canvas, controller) {
  console.log("dnd allo?");
  this.bx = 0;
  this.by = 0;
  this.ex = 0;
  this.ey = 0;
  this.dragged = false;
  this.canvas = canvas;
  this.controller = controller;
  this.canvas.addEventListener('mousedown', this.drag, false);
  this.canvas.addEventListener('mousemove', this.update, false);
  this.canvas.addEventListener('mouseup', this.drop, false);
  if (!this.canvas) {
    console.log("Why canvas is undefined???");
  }
  if (!this.controller) {
    console.log("Why controller is undefined???");
  }
};

DnD.prototype.drag = function (evt) {
  console.log("dragged");
  this.dragged = true;
  this.bx = getMousePosition(this.canvas, evt).x;
  this.by = getMousePosition(this.canvas, evt).y;
  this.ex = this.bx;
  this.ey = this.by;
  console.log(this.bx + ":" + this.by);

  pencil.onInteractionStart(this);
};

DnD.prototype.drop = function (evt) {
  console.log("dropped");
  if (this.dragged) {
    this.dragged = false;
    this.ex = getMousePosition(this.canvas, evt).x;
    this.ey = getMousePosition(this.canvas, evt).y;
    console.log(this.ex + ":" + this.ey);
    pencil.onInteractionEnd(this);
  }
};

DnD.prototype.update = function (evt) {
  //return this.poids / this.taille * this.taille;
  if (this.dragged)
  {
    console.log("moved");
    this.ex = getMousePosition(this.canvas, evt).x;
    this.ey = getMousePosition(this.canvas, evt).y;
    pencil.onInteractionUpdate(this);
  }
};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(cvs, evt) {
  if (!canvas) {
    console.log("Why canvas is undefined??? getMousePosition()");
  }
  let rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



