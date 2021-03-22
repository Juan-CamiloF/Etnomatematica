const respuesta1 = document.getElementById("pregunta1.1");
const respuesta2 = document.getElementById("pregunta1.2");
const respuesta3 = document.getElementById("pregunta2.1");
const respuesta4 = document.getElementById("pregunta2.2");
const respuesta5 = document.getElementById("pregunta2.3");
const respuesta6 = document.getElementById("pregunta3.1");
const respuesta7 = document.getElementById("pregunta3.2");
respuesta1.addEventListener("click", () => {
  swal("Bien hecho!", "La respuesta es correcta.", "success");
});
respuesta2.addEventListener("click", () => {
  swal("Cuidado!", "Revisa de nuevo.", "error");
});
respuesta3.addEventListener("click", () => {
  swal("Cuidado!", "Revisa de nuevo.", "error");
});
respuesta4.addEventListener("click", () => {
  swal("Cuidado!", "Revisa de nuevo.", "error");
});
respuesta5.addEventListener("click", () => {
  swal("Bien hecho!", "La respuesta correcta.", "success");
});
respuesta6.addEventListener("click", () => {
  swal("Cuidado!", "Revisa de nuevo.", "error");
});
respuesta7.addEventListener("click", () => {
  swal("Bien hecho!", "La respuesta es correcta.", "success");
});

const respuesta8 = document.getElementById("validar");
respuesta8.addEventListener("click", () => {
  let i = 0;
  const respuesta1 = document.getElementById("pregunta4.1");
  if (respuesta1.value == "20" || respuesta1.value == 20) {
    i++;
    respuesta1.className = "btnTexto correcto";
  } else {
    i--;
    respuesta1.className = "btnTexto incorrecto";
  }
  const respuesta2 = document.getElementById("pregunta4.2");
  if (respuesta2.value == "1" || respuesta2.value == 1) {
    i++;
    respuesta2.className = "btnTexto correcto";
  } else {
    i--;
    respuesta2.className = "btnTexto incorrecto";
  }
  const respuesta3 = document.getElementById("pregunta4.3");
  if (respuesta3.value == "6" || respuesta3.value == 6) {
    i++;
    respuesta3.className = "btnTexto correcto";
  } else {
    i--;
    respuesta3.className = "btnTexto incorrecto";
  }
  const respuesta4 = document.getElementById("pregunta4.4");
  if (respuesta4.value == "-17" || respuesta4.value == -17) {
    i++;
    respuesta4.className = "btnTexto correcto";
  } else {
    i--;
    respuesta4.className = "btnTexto incorrecto";
  }
  const respuesta5 = document.getElementById("pregunta4.5");
  if (respuesta5.value == "-3" || respuesta5.value == -3) {
    i++;
    respuesta5.className = "btnTexto correcto";
  } else {
    i--;
    respuesta5.className = "btnTexto incorrecto";
  }
  const respuesta6 = document.getElementById("pregunta4.6");
  if (respuesta6.value == "7" || respuesta6.value == 7) {
    i++;
    respuesta6.className = "btnTexto correcto";
  } else {
    i--;
    respuesta6.className = "btnTexto incorrecto";
  }
  const respuesta7 = document.getElementById("pregunta4.7");
  if (respuesta7.value == "-4" || respuesta7.value == -4) {
    i++;
    respuesta7.className = "btnTexto correcto";
  } else {
    i--;
    respuesta7.className = "btnTexto incorrecto";
  }
  const respuesta8 = document.getElementById("pregunta4.8");
  if (respuesta8.value == "-4" || respuesta8.value == -4) {
    i++;
    respuesta8.className = "btnTexto correcto";
  } else {
    i--;
    respuesta8.className = "btnTexto incorrecto";
  }
  if(i==8){
      swal("Bien hecho!","Las respuesta son correctas.","success");
  }
});
