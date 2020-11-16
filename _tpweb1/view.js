
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.
/*Shape.prototype.paint = function(ctx) {

};*/


Rectangle.prototype.paint = function(ctx) {
    ctx.lineWidth = this.outline;
    ctx.fillStyle = this.color;
    ctx.strokeStyle = this.color;
    ctx.beginPath();
    ctx.rect(this.tlx, this.tly, this.w, this.h);
    ctx.stroke();
};

Line.prototype.paint = function(ctx) {
    ctx.lineWidth = this.outline;
    ctx.fillStyle = this.color;
    ctx.strokeStyle = this.color;
    ctx.beginPath();
    ctx.moveTo(this.bx, this.by);
    ctx.lineTo(this.ex, this.ey);
    ctx.stroke();
};

Drawing.prototype.paint = function(ctx) {
    //console.log(this.getForms());
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    this.getForms().forEach(function (eltDuTableau) {
        // now fill the canvas
        eltDuTableau.paint(ctx);
    });
};



function updateShapeList()
{
    console.log("update list");
    $("#shapeList").empty();
    let i = 0
    for (let d in pencil.drawing.array) {
        console.log("object:");
        console.log(pencil.drawing.array[d]);
        console.log("/:");

        var button = $('<button type="button" class="btn btn-default" onclick="deleteShape('+i+')">' +
            '<span class="glyphicon glyphicon-remove-sign"></span>' +
            '<p style="color:'+pencil.drawing.array[d].color+';">'+i+'</p>' +
            '<p>'+pencil.drawing.array[d].constructor.name+'</p>' +
            '</button>');

        $("#shapeList").append(
            button
        );

        i++
    }
}
function deleteShape(i) {
    console.log("clicked:"+i);
    //if (i !== undefined)
        pencil.drawing.array.splice(i,1);
    pencil.drawing.paint(pencil.ctx);
    updateShapeList();
}
