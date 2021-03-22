//Practica
const respuesta1 = document.getElementById("pregunta1.1");
const respuesta2 = document.getElementById("pregunta1.2");
const respuesta3 = document.getElementById("pregunta2.1");
const respuesta4 = document.getElementById("pregunta2.2");
//Eventos
respuesta1.addEventListener("click", () => {
  swal("Bien hecho!", "La respuesta es correcta.", "success");
});
respuesta2.addEventListener("click", () => {
  swal("Cuidado!", "Recuerda, las variables son cosas que cambian.", "error");
});
respuesta3.addEventListener("click", () => {
  swal(
    "Cuidado!",
    "Recuerda, las constantes son cosas que NO cambian.",
    "error"
  );
});
respuesta4.addEventListener("click", () => {
  swal("Bien hecho!", "La respuesta es correcta.", "success");
});
//Actividad
const respuesta5 = document.getElementById("pregunta3.1");
const respuesta6 = document.getElementById("pregunta3.2");
const respuesta7 = document.getElementById("pregunta3.3");
const respuesta8 = document.getElementById("validar1");
const respuesta9 = document.getElementById("validar2");
const respuesta10 = document.getElementById("validar3");
const respuesta11 = document.getElementById("validar4");
const respuesta12 = document.getElementById("validar5");
//Eventos
respuesta5.addEventListener("click", () => {
  swal("Bien hecho!", "La respuesta es correcta.", "success");
});
respuesta6.addEventListener("click", () => {
  swal("Cuidado!", "La respuesta es incorrecta", "error");
});
respuesta7.addEventListener("click", () => {
  swal("Cuidado!", "La respuesta es incorrecta", "error");
});
respuesta8.addEventListener("click", () => {
  let i = 0;
  const pregunta1 = document.getElementById("pregunta4.1").checked;
  const text1 = document.getElementById("texto1");
  if (pregunta1) {
    text1.className = "correcto";
    i++;
  } else {
    text1.className = "";
  }
  const pregunta2 = document.getElementById("pregunta4.2").checked;
  const text2 = document.getElementById("texto2");
  if (pregunta2) {
    text2.className = "incorrecto";
    i--;
  } else {
    text2.className = "";
  }
  const pregunta3 = document.getElementById("pregunta4.3").checked;
  const text3 = document.getElementById("texto3");
  if (pregunta3) {
    text3.className = "correcto";
    i++;
  } else {
    text3.className = "";
  }
  const pregunta4 = document.getElementById("pregunta4.4").checked;
  const text4 = document.getElementById("texto4");
  if (pregunta4) {
    text4.className = "incorrecto";
    i--;
  } else {
    text4.className = "";
  }
  if (i == 2) {
    swal("Bien hecho!", "Las respuestas son correctas.", "success");
  }
});
respuesta9.addEventListener("click", () => {
  let i = 0;
  const respuesta1 = document.getElementById("pregunta5.1");
  const respuesta2 = document.getElementById("pregunta5.2");
  const respuesta3 = document.getElementById("pregunta5.3");
  if (respuesta1.value == 2) {
    i++;
    respuesta1.className = "btnTexto correcto";
  } else {
    i--;
    respuesta1.className = "btnTexto incorrecto";
  }
  if (respuesta2.value == 1) {
    i++;
    respuesta2.className = "btnTexto correcto";
  } else {
    i--;
    respuesta2.className = "btnTexto incorrecto";
  }
  if (respuesta3.value == 10) {
    i++;
    respuesta3.className = "btnTexto correcto";
  } else {
    i--;
    respuesta3.className = "btnTexto incorrecto";
  }
  if (i == 3) {
    swal("Bien hecho!", "Las respuestas son correctas.", "success");
  }
});
respuesta10.addEventListener("click", () => {
  let i = 0;
  const respuesta1 = document.getElementById("pregunta6.1");
  const respuesta2 = document.getElementById("pregunta6.2");
  const respuesta3 = document.getElementById("pregunta6.3");
  if (respuesta1.value == 2) {
    i++;
    respuesta1.className = "btnTexto correcto";
  } else {
    i--;
    respuesta1.className = "btnTexto incorrecto";
  }
  if (respuesta2.value == 2) {
    i++;
    respuesta2.className = "btnTexto correcto";
  } else {
    i--;
    respuesta2.className = "btnTexto incorrecto";
  }
  if (respuesta3.value == 2) {
    i++;
    respuesta3.className = "btnTexto correcto";
  } else {
    i--;
    respuesta3.className = "btnTexto incorrecto";
  }
  if (i == 3) {
    swal("Bien hecho!", "Las respuestas son correctas.", "success");
  }
});
respuesta11.addEventListener("click", () => {
  let i = 0;
  const pregunta1 = document.getElementById("pregunta7.1").checked;
  const text5 = document.getElementById("texto5");
  if (pregunta1) {
    i--;
    text5.className = " incorrecto";
  } else {
    text5.className = "";
  }
  const pregunta2 = document.getElementById("pregunta7.2").checked;
  const text6 = document.getElementById("texto6");
  if (pregunta2) {
    i++;
    text6.className = " correcto";
  } else {
    text6.className = "";
  }
  const pregunta3 = document.getElementById("pregunta7.3").checked;
  const text7 = document.getElementById("texto7");
  if (pregunta3) {
    i++;
    text7.className = " correcto";
  } else {
    text7.className = "";
  }
  const pregunta4 = document.getElementById("pregunta7.4").checked;
  const text8 = document.getElementById("texto8");
  if (pregunta4) {
    i--;
    text8.className = " incorrecto";
  } else {
    text8.className = "";
  }
  if (i == 2) {
    swal("Bien hecho!", "Las respuestas son las correctas.", "success");
  }
});
respuesta12.addEventListener("click", () => {
  let i = 0;
  const pregunta1 = document.getElementById("pregunta8.1").checked;
  const text9 = document.getElementById("texto9");
  if (pregunta1) {
    i--;
    text9.className = " incorrecto";
  } else {
    text9.className = "";
  }
  const pregunta2 = document.getElementById("pregunta8.2").checked;
  const text10 = document.getElementById("texto10");
  if (pregunta2) {
    i++;
    text10.className = " correcto";
  } else {
    text10.className = "";
  }
  const pregunta3 = document.getElementById("pregunta8.3").checked;
  const text11 = document.getElementById("texto11");
  if (pregunta3) {
    i++;
    text11.className = " correcto";
  } else {
    text11.className = "";
  }
  const pregunta4 = document.getElementById("pregunta8.4").checked;
  const text12 = document.getElementById("texto12");
  if (pregunta4) {
    i--;
    text12.className = " incorrecto";
  } else {
    text12.className = "";
  }
  if (i == 2) {
    swal("Bien hecho!", "Las respuestas son las correctas.", "success");
  }
});
