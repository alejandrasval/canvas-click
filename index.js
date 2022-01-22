let d = document.getElementById("dibujito");
let text = document.getElementById("text_lines");
let btn = document.getElementById("btn");
let lienzo = d.getContext("2d");
let yi, xf;
let width = d.width;

btn.addEventListener("click", drawClick);

function draw(color, x_inicial, y_inicial, x_final, y_final) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(x_inicial, y_inicial);
  lienzo.lineTo(x_final, y_final);
  lienzo.stroke();
  lienzo.closePath();
}

function drawClick() {
  let lines = parseInt(text.value);

  for (let l = 0; l < lines; l++) {
    yi = (width / lines) * l;
    xf = (width / lines) * (l + 1);
    draw("pink", 0, yi, xf, 300);
    console.log("Linea " + 1);
  }
}
