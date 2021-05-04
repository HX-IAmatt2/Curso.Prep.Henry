// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí

  
  return(Object.entries(objeto)); 

}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí

  const contador = {};

  for (let i=0; i<string.length; i++) {  
    
    let valor=string[i];
    
    if (contador[valor] === undefined) {
      contador[valor]=1;
    }
    
    else {
      contador[valor]=contador[valor]+1;
    }
  } 

  return contador;

}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí

  var mayusculas = []; 
  var minusculas = [];
  var resultado=0;

  for (var i = 0; i < s.length; i++)
      {
          if (s[i] == s[i].toUpperCase()){              
              mayusculas.push(s[i]);
          }
          if (s[i] == s[i].toLowerCase()){
              minusculas.push(s[i]);
          }
      }
  resultado = mayusculas.join('').concat(minusculas.join(''));
  
  return resultado;

}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

  var cadena=str.split(' ');
  var cadena2=[];
  var res=[];
  
  for (var i = 0; i < cadena.length; i++) {
    let x = cadena[i].split('').reverse().join('');
    cadena2.push(x);
  }
  
  res=cadena2.join(' ')
  
  return res;

} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí

  var contador=0;
  var res=0;
  var n = numero.toString();  

  for (var i = 0; i < n.length; i++) {
    contador ++;
    if (n[i]!=n[n.length-contador]) {
      res = "No es capicua";
    }
    else {
      res = "Es capicua";
    }
  }
  return res;
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí

  var array = cadena.split('');
  var res=[];
  
  for (var i = 0; i < array.length; i++) {
  
    if (array[i]==='a' || array[i]==='b' || array[i]==='c') {
    }
  
    else 
    {res.push(array[i])
    };
  
  }
  
  return(res.join(''));
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  arr.sort(function(a, b){return a.length - b.length});
  return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

