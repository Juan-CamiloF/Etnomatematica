const respuesta1 = document.getElementById("validar1");
respuesta1.addEventListener("click", () => {
  let i = 0;
  const respuesta1 = document.getElementById("pregunta1.1");
  if (respuesta1.value == "a" || respuesta1.value == "A") {
    i++;
    respuesta1.className = "btnTexto correcto";
    const canvas = document.getElementById("canvasActividad1");
    if (canvas && canvas.getContext) {
      let ctx = canvas.getContext("2d");
      ctx.lineWidth = 2;
      ctx.strokeStyle = "rgb(0, 0, 255)";
      ctx.beginPath();
      ctx.moveTo(0, 50);
      ctx.lineTo(200, 50);
      //Flecha
      ctx.moveTo(199, 50);
      ctx.lineTo(195, 60);
      ctx.moveTo(199, 50);
      ctx.lineTo(195, 40);
      ctx.stroke();
    }
  } else {
    respuesta1.className = "btnTexto incorrecto";
    i--;
  }
  const respuesta2 = document.getElementById("pregunta1.2");
  if (respuesta2.value == "a" || respuesta2.value == "A") {
    i++;
    respuesta2.className = "btnTexto correcto";
    const canvas = document.getElementById("canvasActividad1");
    if (canvas && canvas.getContext) {
      let ctx = canvas.getContext("2d");
      ctx.lineWidth = 2;
      ctx.strokeStyle = "rgb(0, 0, 255)";
      ctx.beginPath();
      ctx.moveTo(0, 50);
      ctx.lineTo(200, 150);
      //Flecha
      ctx.moveTo(199, 150);
      ctx.lineTo(195, 160);
      ctx.moveTo(199, 150);
      ctx.lineTo(195, 140);
      ctx.stroke();
    }
  } else {
    i--;
    respuesta2.className = "btnTexto incorrecto";
  }
  const respuesta3 = document.getElementById("pregunta1.3");
  if (respuesta3.value == "b" || respuesta3.value == "B") {
    i++;
    respuesta3.className = "btnTexto correcto";
    const canvas = document.getElementById("canvasActividad1");
    if (canvas && canvas.getContext) {
      let ctx = canvas.getContext("2d");
      ctx.lineWidth = 2;
      ctx.strokeStyle = "rgb(0, 0, 255)";
      ctx.beginPath();
      ctx.moveTo(0, 150);
      ctx.lineTo(200, 60);
      //Flecha
      ctx.moveTo(199, 60);
      ctx.lineTo(195, 70);
      ctx.moveTo(199, 60);
      ctx.lineTo(195, 50);
      ctx.stroke();
    }
  } else {
    i--;
    respuesta3.className = "btnTexto incorrecto";
  }
  const respuesta4 = document.getElementById("pregunta1.4");
  if (respuesta4.value == "b" || respuesta3.value == "B") {
    i++;
    respuesta4.className = "btnTexto correcto";
    const canvas = document.getElementById("canvasActividad1");
    if (canvas && canvas.getContext) {
      let ctx = canvas.getContext("2d");
      ctx.lineWidth = 2;
      ctx.strokeStyle = "rgb(0, 0, 255)";
      ctx.beginPath();
      ctx.moveTo(0, 150);
      ctx.lineTo(200, 150);
      //Flecha
      ctx.moveTo(199, 150);
      ctx.lineTo(195, 160);
      ctx.moveTo(199, 150);
      ctx.lineTo(195, 140);
      ctx.stroke();
    }
  } else {
    i--;
    respuesta4.className = "btnTexto incorrecto";
  }
  if (i == 4) {
    swal("Bien hecho!", "Las respuestas son correctas.", "success");
  }
});
const respuesta2 = document.getElementById("validar2");
respuesta2.addEventListener("click", () => {
  let i = 0;
  const respuesta1 = document.getElementById("pregunta2.1");
  if (respuesta1.value == "7" || respuesta1.value == 7) {
    i++;
    respuesta1.className = "btnTexto correcto";
    const canvas = document.getElementById("canvasActividad2");
    if (canvas && canvas.getContext) {
      let ctx = canvas.getContext("2d");
      ctx.lineWidth = 2;
      ctx.strokeStyle = "rgb(0, 0, 255)";
      ctx.beginPath();
      ctx.moveTo(0, 50);
      ctx.lineTo(200, 80);
      //Flecha
      ctx.moveTo(199, 80);
      ctx.lineTo(195, 90);
      ctx.moveTo(199, 80);
      ctx.lineTo(195, 70);
      ctx.stroke();
    }
  } else {
    i--;
    respuesta1.className = "btnTexto incorrecto";
  }
  const respuesta2 = document.getElementById("pregunta2.2");
  if (respuesta2.value == "8" || respuesta2.value == 8) {
    i++;
    respuesta2.className = "btnTexto correcto";
    const canvas = document.getElementById("canvasActividad2");
    if (canvas && canvas.getContext) {
      let ctx = canvas.getContext("2d");
      ctx.lineWidth = 2;
      ctx.strokeStyle = "rgb(0, 0, 255)";
      ctx.beginPath();
      ctx.moveTo(0, 50);
      ctx.lineTo(200, 180);
      //Flecha
      ctx.moveTo(199, 180);
      ctx.lineTo(195, 190);
      ctx.moveTo(199, 180);
      ctx.lineTo(195, 170);
      ctx.stroke();
    }
  } else {
    i--;
    respuesta2.className = "btnTexto incorrecto";
  }
  const respuesta3 = document.getElementById("pregunta2.3");
  if (respuesta3.value == "7" || respuesta3.value == 7) {
    i++;
    respuesta3.className = "btnTexto correcto";
    const canvas = document.getElementById("canvasActividad2");
    if (canvas && canvas.getContext) {
      let ctx = canvas.getContext("2d");
      ctx.lineWidth = 2;
      ctx.strokeStyle = "rgb(0, 0, 255)";
      ctx.beginPath();
      ctx.moveTo(0, 150);
      ctx.lineTo(200, 90);
      //Flecha
      ctx.moveTo(199, 90);
      ctx.lineTo(195, 100);
      ctx.moveTo(199, 90);
      ctx.lineTo(195, 80);
      ctx.stroke();
    }
  } else {
    i--;
    respuesta3.className = "btnTexto incorrecto";
  }
  const respuesta4 = document.getElementById("pregunta2.4");
  if (respuesta4.value == "8" || respuesta4.value == 8) {
    i++;
    respuesta4.className = "btnTexto correcto";
    const canvas = document.getElementById("canvasActividad2");
    if (canvas && canvas.getContext) {
      let ctx = canvas.getContext("2d");
      ctx.lineWidth = 2;
      ctx.strokeStyle = "rgb(0, 0, 255)";
      ctx.beginPath();
      ctx.moveTo(0, 150);
      ctx.lineTo(200, 180);
      //Flecha
      ctx.moveTo(199, 180);
      ctx.lineTo(195, 190);
      ctx.moveTo(199, 180);
      ctx.lineTo(195, 170);
      ctx.stroke();
    }
  } else {
    i--;
    respuesta4.className = "btnTexto incorrecto";
  }
  const respuesta5 = document.getElementById("pregunta2.5");
  if (respuesta5.value == "7" || respuesta5.value == 7) {
    i++;
    respuesta5.className = "btnTexto correcto";
    const canvas = document.getElementById("canvasActividad2");
    if (canvas && canvas.getContext) {
      let ctx = canvas.getContext("2d");
      ctx.lineWidth = 2;
      ctx.strokeStyle = "rgb(0, 0, 255)";
      ctx.beginPath();
      ctx.moveTo(0, 250);
      ctx.lineTo(200, 100);
      //Flecha
      ctx.moveTo(199, 100);
      ctx.lineTo(195, 110);
      ctx.moveTo(199, 100);
      ctx.lineTo(195, 90);
      ctx.stroke();
    }
  } else {
    i--;
    respuesta5.className = "btnTexto incorrecto";
  }
  const respuesta6 = document.getElementById("pregunta2.6");
  if (respuesta6.value == "8" || respuesta6.value == 8) {
    i++;
    respuesta6.className = "btnTexto correcto";
    const canvas = document.getElementById("canvasActividad2");
    if (canvas && canvas.getContext) {
      let ctx = canvas.getContext("2d");
      ctx.lineWidth = 2;
      ctx.strokeStyle = "rgb(0, 0, 255)";
      ctx.beginPath();
      ctx.moveTo(0, 250);
      ctx.lineTo(200, 200);
      //Flecha
      ctx.moveTo(199, 200);
      ctx.lineTo(195, 210);
      ctx.moveTo(199, 200);
      ctx.lineTo(195, 190);
      ctx.stroke();
    }
  } else {
    i--;
    respuesta6.className = "btnTexto incorrecto";
  }
});
const respuesta3 = document.getElementById("validar3");
respuesta3.addEventListener("click", () => {
  let i = 0;
  const respuesta1 = document.getElementById("pregunta3.1");
  if (respuesta1.value.toLowerCase().trim() == "perro") {
    i++;
    respuesta1.className = "btnTextoLargo correcto";
  } else {
    i--;
    respuesta1.className = "btnTextoLargo incorrecto";
  }
  const respuesta2 = document.getElementById("pregunta3.2");
  if (respuesta2.value.toLowerCase().trim() == "gato") {
    i++;
    respuesta2.className = "btnTextoLargo correcto";
  } else {
    i--;
    respuesta2.className = "btnTextoLargo incorrecto";
  }
  const respuesta3 = document.getElementById("pregunta3.3");
  if (respuesta3.value.toLowerCase().trim() == "mariposa") {
    i++;
    respuesta3.className = "btnTextoLargo correcto";
  } else {
    i--;
    respuesta3.className = "btnTextoLargo incorrecto";
  }
  const respuesta4 = document.getElementById("pregunta3.4");
  if (respuesta4.value == "1" || respuesta4.value == 1) {
    i++;
    respuesta4.className = "btnTextoLargo correcto";
  } else {
    i--;
    respuesta4.className = "btnTextoLargo incorrecto";
  }
  const respuesta5 = document.getElementById("pregunta3.5");
  if (respuesta5.value == "2" || respuesta5.value == 2) {
    i++;
    respuesta5.className = "btnTextoLargo correcto";
  } else {
    i--;
    respuesta5.className = "btnTextoLargo incorrecto";
  }
  if (i == 5) {
    swal("Bien hecho!", "Las respuestas son correctas.", "success");
  }
});

const respuesta4 = document.getElementById("pregunta4.1");
const respuesta5 = document.getElementById("pregunta4.2");
respuesta4.addEventListener("click", () => {
  swal(
    "Cuidado!",
    "Recuerda, los elementos del rango son variables dependientes",
    "error"
  );
});
respuesta5.addEventListener("click", () => {
  swal("Bien hecho!", "La respuesta es correcta.", "success");
});

const respuesta6 = document.getElementById("validar5");
respuesta6.addEventListener("click",()=>{
  let i = 0;
  const respuesta1 = document.getElementById("pregunta5.1");
  if(respuesta1.value.toLowerCase() == 'a'){
    i++;
    respuesta1.className = "btnTexto correcto"
  }else{
    i--;
    respuesta1.className = "btnTexto incorrecto"
  }
  const respuesta2 = document.getElementById("pregunta5.2");
  if(respuesta2.value.toLowerCase() == 'e'){
    i++;
    respuesta2.className = "btnTexto correcto"
  }else{
    i--;
    respuesta2.className = "btnTexto incorrecto"
  }
  const respuesta3 = document.getElementById("pregunta5.3");
  if(respuesta3.value.toLowerCase() == 'i'){
    i++;
    respuesta3.className = "btnTexto correcto"
  }else{
    i--;
    respuesta3.className = "btnTexto incorrecto"
  }
  const respuesta4 = document.getElementById("pregunta5.4");
  if(respuesta4.value.toLowerCase() == 'o'){
    i++;
    respuesta4.className = "btnTexto correcto"
  }else{
    i--;
    respuesta4.className = "btnTexto incorrecto"
  }
  const respuesta5 = document.getElementById("pregunta5.5");
  if(respuesta5.value.toLowerCase() == 'u'){
    i++;
    respuesta5.className = "btnTexto correcto"
  }else{
    i--;
    respuesta5.className = "btnTexto incorrecto"
  }
  if(i==5){
    swal("Bien hecho!","Las respuesta son correctas.","success");
  }
})