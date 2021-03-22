const respuesta1 = document.getElementById("pregunta5.1");
const respuesta2 = document.getElementById("pregunta5.2");
const respuesta3 = document.getElementById("pregunta6.1");
const respuesta4 = document.getElementById("pregunta6.2");
const respuesta5 = document.getElementById("pregunta7.1");
const respuesta6 = document.getElementById("pregunta7.2");
const respuesta7 = document.getElementById("pregunta8.1");
const respuesta8 = document.getElementById("pregunta8.2");
const respuesta9 = document.getElementById("pregunta9.1");
const respuesta10 = document.getElementById("pregunta9.2");
const respuesta11 = document.getElementById("pregunta9.3");
const respuesta12 = document.getElementById("pregunta10.1");
const respuesta13 = document.getElementById("pregunta10.2");
const respuesta14 = document.getElementById("validar1");
const respuesta15 = document.getElementById("pregunta12.1");
const respuesta16 = document.getElementById("pregunta12.2");
const respuesta17 = document.getElementById("pregunta13.1");
const respuesta18 = document.getElementById("pregunta13.2");
const respuesta19 = document.getElementById("pregunta13.3");
respuesta1.addEventListener("click", () => {
  swal("Bien hecho!", "La respuesta es correcta.", "success");
});
respuesta2.addEventListener("click", () => {
  swal(
    "Cuidado!",
    "Recuerda, Todos los elementos del cojunto A deben tener un elemento en B",
    "error"
  );
});
respuesta3.addEventListener("click", () => {
  swal("Bien hecho!", "La respuesta es correcta.", "success");
});
respuesta4.addEventListener("click", () => {
  swal(
    "Cuidado!",
    "Recuerda, Todos los elementos del cojunto A deben tener un elemento en B",
    "error"
  );
});
respuesta5.addEventListener("click", () => {
  swal("Bien hecho!", "La respuesta es correcta.", "success");
});
respuesta6.addEventListener("click", () => {
  swal(
    "Cuidado!",
    "Recuerda, Todos los elementos del cojunto A deben tener un elemento en B",
    "error"
  );
});
respuesta7.addEventListener("click", () => {
  swal(
    "Cuidado!",
    "Recuerda, Todos los elementos del cojunto A deben tener un elemento en B",
    "error"
  );
});
respuesta8.addEventListener("click", () => {
  swal("Bien hecho!", "La respuesta es correcta.", "success");
});
respuesta9.addEventListener("click", () => {
  swal("Cuidado!", "Esta si es una función lineal", "error");
});
respuesta10.addEventListener("click", () => {
  swal("Bien hecho!", "La respuesta es correcta.", "success");
});
respuesta11.addEventListener("click", () => {
  swal("Cuidado!", "Esta si es una función lineal", "error");
});
respuesta12.addEventListener("click", () => {
  swal("Cuidado!", "Revisa de nuevo.", "error");
});
respuesta13.addEventListener("click", () => {
  swal("Bien hecho!", "La respuesta es correcta.", "success");
});
respuesta14.addEventListener("click", () => {
  const respuesta = document.getElementById("pregunta11");
  if (respuesta.value == "6" || respuesta.value == 6) {
    respuesta.className = "btnTexto correcto";
    swal("Bien hecho!", "La respuesta es correcta.", "success");
  } else {
    respuesta.className = "btnTexto incorrecto";
  }
});
respuesta15.addEventListener("click", () => {
  swal("Bien hecho!", "La respuesta es correcta.", "success");
});
respuesta16.addEventListener("click", () => {
  swal("Cuidado!", "Revisa de nuevo.", "error");
});
respuesta17.addEventListener("click", () => {
  swal("Cuidado!", "Revisa de nuevo.", "error");
});
respuesta18.addEventListener("click", () => {
  swal("Bien hecho!", "La respuesta es correcta.", "success");
});
respuesta19.addEventListener("click", () => {
  swal("Cuidado!", "Revisa de nuevo.", "error");
});
