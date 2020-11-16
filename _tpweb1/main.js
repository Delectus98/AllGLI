
var canvas = document.getElementById('myCanvas');
var radioRect = document.getElementById('butRect');
var radioLine = document.getElementById('butLine');
var colorPicker = document.getElementById('colour');
var spinner = document.getElementById('spinnerWidth');
var ctx = canvas.getContext('2d');

canvas.width=800
canvas.height=600

// Code temporaire pour tester le DnD
ctx.fillStyle = '#F0F0F0'; // set canvas' background color
ctx.fillRect(0, 0, canvas.width, canvas.height);  // now fill the canvas
/////

// Code temporaire pour tester l'affiche de la vue
var rec = new Rectangle(10, 50, 50, 50, 10, '#000CC0');
//rec.paint(ctx);
var ligne = new Line(10, 20, 50, 100, 5, '#00C0C0');
//ligne.paint(ctx);

// Code final à utiliser pour manipuler Pencil.
var drawing = new Drawing();
drawing.array.push(ligne);
drawing.array.push(rec);
drawing.paint(ctx);
var pencil = new Pencil(ctx, drawing, canvas);
//drawing.paint(ctx, canvas);

// radio buttons and color picker controller
radioRect.onclick = function() {
    console.log("RECT MODE");
    pencil.currEditingMode = editingMode.rect;
}
radioLine.onclick = function() {
    console.log("LINE MODE");
    pencil.currEditingMode = editingMode.line;
}

function watchColorPicker(event) {
    console.log("COLOR MODE");
    pencil.currColour = "" + event.target.value;
}
colorPicker.addEventListener("change", watchColorPicker, false);
$(spinner).on('input', function () {
    console.log("changed width " + spinner.value);
    pencil.currLineWidth = spinner.value;
});
