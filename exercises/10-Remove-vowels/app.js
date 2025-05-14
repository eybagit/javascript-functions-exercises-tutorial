// Your code goes here

//Ambas soluciones funcionan.

/*const rapid = (nombre) => {
    return nombre
        .split("") // Divide el string en un array de caracteres
        .filter(letra => !"aeiouAEIOU".includes(letra)) // Filtra las vocales
        .map(letra => letra.toUpperCase()) // Convierte las consonantes a mayúscula
        .join(""); // Une el array de nuevo en un string
}*/

const rapid = (nombre) => {
    let resultado= "";
    for (let i=0; i<nombre.length;i++){
        let letra = nombre[i];
        if (!"aeiouAEIOU".includes(letra)){
            resultado+= letra.toUpperCase();
        }
    }
    return resultado;
}


// Work above this line; do not change code below
let str = "John";
console.log(rapid(str));
