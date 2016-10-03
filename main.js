window.addEventListener("load", cargarPagina); 
  var contador = 1;
  function cargarPagina(){
    var boton = document.getElementById("boton");
    boton.disabled = true;
    boton.addEventListener("click", sharing);
  }
  function sharing(e){ 
    e.preventDefault();
    var textoArea =document.getElementById("blablabla");
    var texto = document.getElementById("blablabla").value;
    var repla = texto.replace(/\n/g, "<br>");//salto de linea global 
    crear(repla,textoArea);
  }    
  function crear(repla,textoArea){	

  if (existeContenido(textoArea.value)) {
	  var parrafo = document.createElement("div");
	  var padre = document.getElementById("seccion");
	  parrafo.innerHTML = repla ;
	  padre.appendChild(parrafo);
	  parrafo.classList.toggle("divis");
	  padre.insertBefore(parrafo,padre.childNodes[0]);
    var horitas =new Date();
    var horas=horitas.getHours();
    var min= horitas.getMinutes();
    var hor = document.createElement("h5");
        hor.classList.toggle("divi");
        hor.innerHTML= " "+ horas+":"+ min;
        parrafo.insertBefore(hor,parrafo.childNodes[0]);
    var divEmoji =document.createElement("div"); 
        padre.appendChild(divEmoji);
    var emojia = document.createElement("a");
         emojia.classList.toggle("btn-floating","btn-small","waves-effect","waves-light","salmon");
    var emojib = document.createElement("a");
        emojib.classList.toggle("btn-floating","btn-small","waves-effect","waves-light","salmon");
    var emojic = document.createElement("a");
        emojic.classList.toggle("btn-floating","btn-small","waves-effect","waves-light","salmon");
        padre.appendChild(emojia);
        padre.appendChild(emojib);
        padre.appendChild(emojic);
        emojia.innerHTML="<i>thumb_down</i>";
    //up.classList.toggle("material-icons","salmon");
		    textoArea.value= "";
    	  boton.disabled=true; 
        contador++;
  }else{
    alert("Ingresa contenido -.-"); 
  }
}
  var textBox =document.getElementById("blablabla");
    textBox.addEventListener("keyup", deleted); 
      function deleted(){
        var botons = document.getElementById("boton");
        var longi = this.value.length;
        var breakLines = this.value.match(/\n/g);
        if (this.value.trim().length == 0){
           botons.disabled= true;
        }
        else{
           botons.disabled= false;
        }
      } 
  function existeContenido(mensaje) {
    mensaje = mensaje.trim();
    if (mensaje.length == 0) {
      return false;
    } else {
      return true;
    }
  } 
 