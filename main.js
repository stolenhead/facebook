window.addEventListener("load", cargarPagina); 
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
		    textoArea.value= "";
    	  boton.disabled=true; 
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
 