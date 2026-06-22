
//Metodos para manipular Arrays


// Para inicializar un array
let misAmigos = ["Isaid","Diego"]

//Esto se usa para conocer el tamaño o longitud del array
misAmigos.length

//Se usa para conocer que elemento esta en esa posicion atravez de su indice
misAmigos[4]

//Este se usa para conocer que indice tiene el elmeento entre los parentesi
misAmigos.indexOf("Isaid")

//Eliminar ultimo elemento de un array
misAmigos.pop()

//Se puede almacenar el ultimo elemento en una variable
let eliminado = misAmigos.pop()

//Eliminar el primer elemento
misAmigos.shift()

//Agregar elementos a el array de primera posicion
misAmigos.unshift("Messi")

//Agregar elementos al final del array
misAmigos.push("Diosito")

//Se puede eliminar elementos que estan en la mitad, tambien se pueden eliminar mas de uno
misAmigos.splice(2,3)

//Recorrer el array sin un loop for
//El forEach sirve para recorrer una lista y aplicar una acción a cada elemento uno por uno, mediante una funcion propia que se crea adentro de este."

misAmigos.forEach(function(amigo){
    console.log(amigo)
})

//En el segundo ejemplo, el indice es un parametro opcional que no importa que nombre se le asigne este apuntara a la posicion de ese elemento
misAmigos.forEach(function(amigo,index){
    console.log(index + ":" + amigo)
})