var doc = document.getElementById("Dibujando");
var lienzo = doc.getContext("2d");
var ancho = doc.width;

var bot = document.getElementById("Boton");
var tex = document.getElementById("Texto");

function DibujarLinea(color, xini, yini, xfin, yfin)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xini, yini);
  lienzo.lineTo(xfin, yfin);
  lienzo.stroke();
  lienzo.closePath();
}

DibujarLinea("blue", 1,1,1,299)
DibujarLinea("blue", 299,1,1,1)
DibujarLinea("blue", 299,1,299,299)
DibujarLinea("blue", 1,299,299,299)

function ClickBoton()
{
  var l = 0
  var yi, xf
  var lineas = tex.value
  var espacio = ancho/lineas

  for (l=0; l<lineas; l = l+1)
  {
    yi=espacio*l
    xf=espacio*(l+1)
    DibujarLinea("lightblue", 0, yi, xf, 300)
  }
}

bot.addEventListener("click", ClickBoton);
