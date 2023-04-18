
alert("Bienvenido al primer trabajo del curso");

alert("Dinos, cuales son tus espectativas por aprender este lenguaje?");

let respuesta = prompt("Del 1 al 5, que numero pondrias: ");

function InicioPagina(){ 
if (respuesta <=5){
    alert("El numero esta perfecto, vamos a evaluarte");
    respuesta1();
} else {
    alert("NO ingresaste el numero dentro de lo solicitado, intentalo de nuevo");
    respuesta1();
}
}

InicioPagina()

function respuesta1(){
switch(respuesta){
        case "1":
            alert("Te noto muy poco motivado amigo, para que estudias?");
            break;
        case "2":
            alert("Tu motivacion es baja, pero mejorara a medida que aprendas.");
            break;
        case "3":
            alert("Un punto medio, pero estoy seguro que seguira creciendo.");
            break;
        case "4":
            alert("Bien, estas muy interesado, a seguir asi que no te vas a arrepentir!!!");
            break;
        case "5":
                alert("Increible, no esperaba menos! Este curso es para vos, tu puedes!!");
                break;
        default:
            alert("No hay ninguna informacion que nos sirva")
            break;


 }
}


