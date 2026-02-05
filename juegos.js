const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight - 150;

let x = 100;

function loop(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = "#2e7d32";
  ctx.fillRect(x,200,50,50);
  requestAnimationFrame(loop);
}

function seleccionarJuego(){
  x += 20;
}

loop();
