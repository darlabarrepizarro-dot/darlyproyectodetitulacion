let puntos = 0;

function entrar(){
  document.getElementById("bienvenida").style.display="none";
  mostrar("inicio");
}

function mostrar(id){
  document.querySelectorAll(".seccion")
    .forEach(s => s.classList.remove("activa"));
  document.getElementById(id).classList.add("activa");
}

function responder(ok){
  const m = document.getElementById("mensaje");
  m.style.display = "block";
  if(ok){
    puntos++;
    m.textContent = "✅ Buena acción ecológica";
    m.className = "mensaje bien";
  }else{
    m.textContent = "❌ Pensemos mejor";
    m.className = "mensaje mal";
  }
}
