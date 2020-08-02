var fotoMostrada = "1";
function cambiar(){
var imagen = document.getElementById("Imagen")
	if(fotoMostrada == "1"){
	imagen.src = "FOTOS/2.jpg"
	fotoMostrada = "2";
	}
	else{
	imagen.src = "FOTOS/3.jpg"
	fotoMostrada = "3";
	}	
}	