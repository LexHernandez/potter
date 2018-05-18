//Declaramos variables
var name = prompt ("¿Cual es tu nombre?");
var correct = document.getElementById("correct");
var nogame = document.getElementById("nogame");
var reply = document.getElementById("reply");
var total = document.getElementById("total")
//declaramos variables de preguntas
var q1 = "¿Cuál es la plataforma para tomar el tren a Hogwarts? "
var q2 = "¿Cuál es el nombre de la casa a la que pertenece Harry Potter? "
var q3 = "¿Qué elemento comparten las varitas de Harry y Voldemort? "
var q4 = "¿Cuál es el nombre de Lord Voldemort? "

var txt;
var answer = confirm ("Hola " + name +  " ¿estás list@ para jugar?");
//declaramos variables de respuestas correctas
var accurate1 = q1 + " b) 9 3/4";
var reply1 = " ";
var accurate2 = q2 + " a) Gryffindor";
var reply2 = " ";
var accurate3 = q3 + " a) Pluma de Fenix";
var reply3 = " ";
var accurate4 = q4 + " b) Tom Marvolo Riddle";
var reply4 = " ";
//declaramos if para ordenar evento al aceptar comenzar el juego
if (answer) {
  alert (txt="Instrucciónes: \n Lee las pregunta, escribe en el recuadro blanco tu respuesta a, b o c");
//Ponemos contador en 0 para que sea utilizado como sumado y ademas se declaran variables corretas e incorrectas
        var score = 0;

//Se colocan las preguntas con toLowerCase para hacer transformaciones para mayusculas a minisculas.
        var p1 = prompt (q1 + "\n a) 5 1/2 \n b) 9 3/4 \n c) 8 2/3").toLowerCase();
        //Loop para insertar respuesta
          while (p1 == "") {
            alert ("Inserta una respuesta");
            p1 = prompt (q1 + "\n a) 5 1/2 \n b) 9 3/4 \n c) 8 2/3").toLowerCase();
          }

//Ahora vamos a ordenar a if que aumente a contador un uno ya que la respuesta esta correcta
        if (p1 == "b"){ score ++

      }
            reply1 = "Tu respuesta fue " + p1 ;

        var p2 = prompt (q2 + "\n a) Gryffindor \n b) Hufflepuff \n c) Slytherin").toLowerCase() ;
        //Loop para insertar respuesta
        while (p2 == "") {
            alert ("Inserta una respuesta");
            p2 = prompt (q2 + "\n a) Gryffindor \n b) Hufflepuff \n c) Slytherin").toLowerCase() ;
          }

        if (p2 == "a"){ score ++
      }
          reply2 = "Tu respuesta fue " + p2 ;

        var p3 = prompt (q3 + " \n a) Pluma de Fenix \n b) Pelo de Unicornio \n c) Fibra de Corazón de Dragón").toLowerCase() ;
        while (p3 == "") {
            alert ("Inserta una respuesta");
            p3 = prompt (q3 + " \n a) Pluma de Fenix \n b) Pelo de Unicornio \n c) Fibra de Corazón de Dragón").toLowerCase() ;
          }
        if (p3 == "a"){ score ++
      }
          reply3 = "Tu respuesta fue " + p3 ;

        var p4 = prompt (q4 + "\n a) Tom Marvin Riddle \n b) Tom Marvolo Riddle \n c) Tom Martin  Riddle").toLowerCase() ;
        while (p4 == "") {
            alert ("Inserta una respuesta");
            p4 = prompt (q4 + "\n a) Tom Marvin Riddle \n b) Tom Marvolo Riddle \n c) Tom Martin  Riddle").toLowerCase() ;
          }
        if (p4 == "b"){ score ++
      }

      reply4 = "Tu respuesta fue " + p4 ;
//Negamos la continuación del la trivia
}
else {
  reply1 = "tu no ingresaste ninguna respuesta";
  reply2 = "tu no ingresaste ninguna respuesta";
  reply3 = "tu no ingresaste ninguna respuesta";
  reply4 = "tu no ingresaste ninguna respuesta";
  nogame.innerHTML = ("Buu!... " + name + ", eres un muggle!");

}
//Se procede a imprimir respuestas totales y su relación con las contestadas.

correct.innerHTML = accurate1 + "\n" + "\n" +  accurate2 + "\n" + "\n" + accurate3 + "\n" + "\n" + accurate4 ;

reply.innerHTML = reply1 + "\n" + "\n" + "\n" + reply2 + "\n" + "\n" + "\n" + reply3 + "\n" + "\n" + "\n" + reply4 ;

//Se totalizan los puntos totales obtenidos.

total.innerHTML = "Tu score fue " + score;
