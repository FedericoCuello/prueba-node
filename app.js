function miComida(comida,aderezo){
    return "a mi me gusta el " + comida + " con " + aderezo;
}
function saludar(comida,aderezo,callback){
    return 'Hola mi nombre es Federico y ' + miComida(comida,aderezo) + '!';
}
//console.log(saludar('arroz','mayonesa',miComida));


//function dni(dni1,dni2){
  //  return dni1 [5] + dni2 [2];
//}
//function recolectoDni(dni1,dni2,callback){
  //  return 'El digito numero 5 del primer DNI es ' + dni(dni1) + ' , y el digito numero 2 del segundo DNI es ' + dni(dni2); 
//}
//console.log(recolectoDni('37984646','10801691',dni));

let iniciales = (nombre,apellido) => nombre[0] + apellido [0];
let saludo = (nombre,apellido,callback) => 'Hola ' + iniciales(nombre,apellido) + '!';

//console.log(saludo('Federico','Cuello',iniciales));

function miPelicula(peli){
    let miPeliculaFavorita = 'Mi pelicula favorita es ';
    function clousure (){
        return miPeliculaFavorita + ' ' + peli;
    }
    return clousure();
}
console.log(miPelicula('Moster INC'));

console.log(334); 