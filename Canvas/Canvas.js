var d = document.getElementById("Dibujo-canvas");
var lienzo = d.getContext("2d");

/* Dibujar lineas en canvas sin una funcion

lienzo.beginPath();
lienzo.strokeStyle = "red";
lienzo.moveTo(100, 100);
lienzo.lineTo(200, 200);
lienzo.stroke();
lienzo.closePath();
*/

/* Crear una funcion para dibujar en canvas */
/* Numero 1 */
Dibujarlinea("red", 80, 110, 80, 270);
Dibujarlinea("red", 80, 110, 50, 140);
Dibujarlinea("red", 50, 140, 30, 120);
Dibujarlinea("red", 30, 120, 110, 40);
Dibujarlinea("red", 110, 40, 110, 270);
Dibujarlinea("red", 80, 270, 110, 270);

/* Numero 4 */
Dibujarlinea("red", 0, 0, 0, 0);
Dibujarlinea("red", 0, 0, 0, 0);
Dibujarlinea("red", 0, 0, 0, 0);
Dibujarlinea("red", 0, 0, 0, 0);
Dibujarlinea("red", 0, 0, 0, 0);
Dibujarlinea("red", 0, 0, 0, 0);
Dibujarlinea("red", 0, 0, 0, 0);
Dibujarlinea("red", 0, 0, 0, 0);
Dibujarlinea("red", 0, 0, 0, 0);
Dibujarlinea("red", 0, 0, 0, 0);
Dibujarlinea("red", 0, 0, 0, 0);
Dibujarlinea("red", 0, 0, 0, 0);

function Dibujarlinea(color, x_inicial, y_inicial, x_final, y_final) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(x_inicial, y_inicial);
  lienzo.lineTo(x_final, y_final);
  lienzo.stroke();
  lienzo.closePath();
}
