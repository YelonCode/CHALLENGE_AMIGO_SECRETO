
var amigos = [];

// Reutilizar para escribir texto/HTML en un selector
function asignarTextoElemento(selector, txt){
  let el = document.querySelector(selector);
  if(el){
    el.innerHTML = txt;
  }
}

// Mostrar la lista de nombres en el <ul id="listaAmigos">
function mostrarLista(){
  let ul = document.getElementById('listaAmigos');
  ul.innerHTML = ''; // limpiar antes de volver a pintar
  for(let i = 0; i < amigos.length; i++){
    ul.innerHTML += '<li>' + amigos[i] + '</li>';
  }
}

// Limpiar el input
function limpiarCaja(){
  let caja = document.getElementById('amigo');
  caja.value = '';
}

// Agregar nombre a la lista (con validación básica)
function agregarAmigo(){
  let nombre = document.getElementById('amigo').value;
  let mensaje = document.getElementById('mensaje');

  if(nombre == null || nombre.trim() === ''){
    mensaje.innerHTML = 'Por favor, escribe un nombre válido.';
  } else if(nombre.match(/[0-9]/)){
  mensaje.innerHTML = 'No se permiten números';
    }
  else {
    amigos.push(nombre);          
    mostrarLista();               
    asignarTextoElemento('#resultado', ''); // limpiar resultado previo
    limpiarCaja();                
    mensaje.innerHTML = ''; // limpiar mensaje si todo está bien
  }
}

// Sortear un nombre al azar y mostrarlo en <ul id="resultado">
function sortearAmigo(){
  let mensaje = document.getElementById('mensaje');

  if(amigos.length === 0){
    mensaje.innerHTML = ' No hay nombres para sortear. Agrega al menos uno.';
    return;
  }

  var indice = Math.floor(Math.random() * amigos.length); 
  var elegido = amigos[indice];

  var ulResultado = document.getElementById('resultado');
  ulResultado.innerHTML = '<li>🎉 Tu amigo secreto es: <strong>' + elegido + '</strong></li>';

  mensaje.innerHTML = ''; // limpiar mensaje cuando hay resultado
}

// establecer un texto inicial
function condicionesIniciales(){
  asignarTextoElemento('h1', 'Amigo Secreto');
  asignarTextoElemento('#resultado', '');
  asignarTextoElemento('#mensaje', '');
}

condicionesIniciales();
