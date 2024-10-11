// estructuras condicionales if


// if (condicion logica){
// ....
// } else{
    // ...
// }

// solicitar la edad al usuario e indicar por pantalla si puede votar o no

// tengo que pedirle la edad al usuario
// puede votar a partir de los 16 años
// parseInt numero entreo
// parseFloat numero con decimal
let edad = parseInt(prompt('Ingrese su edad'));


console.log(typeof(edad));
console.log(edad);

if (edad >= 16 && edad < 18 || edad >= 71){
    document.write('es optativo votar');
}else{
    document.write('no puede votar');
}