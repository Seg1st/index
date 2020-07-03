
var Estado_barra = false;
var Etado_signo;

function onOff(){
   if(Estado_barra == false){
      Estado_barra = true;
      Etado_signo = "<img src=\"icons/panel_lateral_0.png\" alt=\"\" srcset=\"\">";
   }
   else{
      Estado_barra = false;
      Etado_signo = "<img src=\"icons/panel_lateral_1.png\" alt=\"\" srcset=\"\">";
   }
   document.getElementById('estado').innerHTML = Etado_signo;      
}


/* almacenar el boton dentro de la Constante "mi_boton", el punto indica que es a una clase */
const mi_boton = document.querySelector('.boton-transcision');
/* Cada vez que le de cick "mi_boton" que haga la fubnción */
mi_boton.addEventListener('click', function (){
   /* para agregar o quitar una clase css */
   document.getElementById('barra_lateral').classList.toggle('activo');
   document.getElementById('contenido').classList.toggle('activo');
   onOff();
})


/* Al cargar */

function on_load(){
   document.getElementById('barra_lateral').classList.toggle('activo');
   document.getElementById('contenido').classList.toggle('activo');
   onOff();
}


setTimeout(() => {on_load()}, 700);