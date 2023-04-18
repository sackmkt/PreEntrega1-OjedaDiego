function InicioPagina(){ 
alert("Bienvenido al primer trabajo del curso");

alert("Dinos, cuales son tus espectativas por aprender este lenguaje?");

let respuesta = prompt("Del 1 al 5, que numero pondrias: ");

if (respuesta <=5){
    alert("El numero esta perfecto, vamos a evaluarte");
} else {
    alert("NO ingresaste el numero dentro de lo solicitado, intentalo de nuevo");
    InicioPagina()
}
}

InicioPagina()


// switch(respuesta){

// }


