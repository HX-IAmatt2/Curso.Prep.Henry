// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:

  return array[0];
}

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:

  return array[array.length-1];
}

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:

  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:

  for (let i=0; i<array.length; i++) {
    array[i]++;
  }
  
  return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:

  array.push(elemento)
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:

  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:

  return palabras.join(" ");
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:

  let res=false;

  array.map(e => {if (e===elemento) {res=true}});
  
  return res;
  

  /* OPCION CON FOR
  for (let i=0; i<array.length; i++) {
    if (array[i]===elemento) {
      return true;
      break;
    }
  }
  return false;
  */
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:'

  var total=0

  numeros.map(e => total=total+e)

  /* OPCION CON FOR:
  for (let i=0; i<numeros.length; i++) {
    total=total+numeros[i]; }
  */

  return total;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:

 var sumatoria=0;

 resultadosTest.map(e => sumatoria=sumatoria+e)  // opcion corta con map

 // for (let i=0; i<resultadosTest.length; i++) {
 //   sumatoria=sumatoria+resultadosTest[i];}

  var promedio=sumatoria/resultadosTest.length;
  return promedio;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:

  let mayor=0;

  numeros.forEach(e => {if (e>mayor) {mayor=e}})   

/* OPCION CON FOR
  for (let i=0; i<numeros.length; i++) {
    if (numeros[i]>mayor) {
      mayor=numeros[i]
    }
  }*/

  return mayor;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:

  let total=1;

  if (arguments.length==0) {
    return 0;
  }
  
  for (let i=0; i<arguments.length; i++) {
    total=total*arguments[i];
  }
  
  return total;
}



function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí

  let conteo=0;

  arreglo.map(e => {if (e>18) conteo++})

  /* OPCION CON FOR
  for (var i=0; i<arreglo.length; i++) {
    if (arreglo[i]>18) {
      conteo++;
    }
  }*/

  return conteo;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   

if (numeroDeDia>=2 && numeroDeDia<=6) {return 'Es dia Laboral'}
else {return 'Es fin de semana'};

/* OPCION CON SWITCH
  switch (numeroDeDia) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      return "Es dia Laboral";
    case 1:
    case 7:
      return "Es fin de semana";
  }
  */
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  
  let num = n.toString()  // lo paso a string

  if (num.startsWith('9')==true) {return true} else {return false};  // Usando metodo de cadena
  
  // if (num[0]==9) {return true} else {return false};  
  
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  

  let res=0;

  arreglo.map(e => {if (e===arreglo[0]){res=true}else{res=false}});

  return res;

  /* OPCION CON FOR
  for (var i=0; i<arreglo.length; i++) {
    if (arreglo[i]===arreglo[0]) {
      res=true;
    }
    else {res=false;
    }
  }
  return res;
  */

} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:

  let final=[];

  final = array.filter(e=> e==='Enero' || e==='Marzo' || e==='Noviembre')  // Con filter nos ahorramos el IF y el PUSH !

  //array.map(e=> {if (e==='Enero' || e==='Marzo' || e==='Noviembre') {final.push(e)}});  // opcion con map (o forEach)

  /* OPCION CON FOR
  for (let i=0; i<array.length; i++) {

    if (array[i]==="Enero" || array[i]==="Marzo" || array[i]==="Noviembre") {
      final.push(array[i]);
    }
  }*/

  if (final.includes('Enero') && final.includes('Marzo') && final.includes('Noviembre')) {return final}

//if (final.length===3) {return final;} // Otra verificacion mas rancia

  else {return "No se encontraron los meses pedidos"};

}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  
  let res = array.filter(e=> e>100);  
  return res;

// array.map(e=> {if (e>100) {res.push(e)}});  // con forEach o map
  
  
/*OPCION CON FOR
  for (let i=0; i<array.length; i++) {

    if (array[i]>100) {

      res.push(array[i]);
    }
  }
*/

}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:

  var array=[]

  for (let i=0; i<10; i++){
    
    numero=numero+2;
    
    if (numero===i) {
      return "Se interrumpió la ejecución";
      break;
    }

    else { 
      array.push(numero)}
  }
  
  return array;
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:

 let array=[]

 // DEJAMOS ESTA OPCION PARA CUMPLIR CON EL USO DE CONTINUE
  for (let i=0; i<10; i++) {
    if (i==5) {continue}
    else {numero=numero+2}
    array.push(numero);
  }

  /* OTRA OPCION 
  for (let i=0; i<10; i++) {
    if (i!==5) {
    numero=numero+2;
    array.push(numero);
    }    
  }
  */
  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
