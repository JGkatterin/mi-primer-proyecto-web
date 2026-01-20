function verificarAcceso() {
  let edad = document.getElementById("edad").value;
  let tieneBoleto = document.getElementById("boleto").checked;

  if (edad >= 18 && tieneBoleto) {
    document.getElementById("resultado").textContent = "✅ Acceso permitido";
  } else {
    document.getElementById("resultado").textContent = "❌ Acceso denegado";
  }
}

function cambiarTema() {
  document.body.classList.toggle("dark");
}
