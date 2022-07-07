/* -------------------------- variables primitivas -------------------------- */
//ES5 var
var string = 'Hello World';
string = 1000
string = true
string = [1, 2, 3]

var number = 10;
var boolean = true;
var especial1 = null;
var especial2 = undefined;
//! Important
// TODO 

/* ---------------------------- variables objeto ---------------------------- */
var fecha = new Date(); '07/07/2020'
var regex = /[a-b]/
var error = new Error('Error');
var array = [1, 2, 3];

// function foo() {
//   var bar = 'bar';
// }

/* -------------------------------- Ámbitos -------------------------------- */
const x = 1

function foo() {
  const y = 2
  function bar() {
    const z = 3
    console.log('resultado',x + y + z)
  }
  // console.log('resultado',x + y + z)
  bar()
  console.log(x,y)
}
// console.log('resultado',x + y + z)

foo()

// console.log(y)

console.log(string)

const i = 1
// i=1

const arr = []
const obj = {}
//Asignando
// arr = [1]
// obj = {nombre:'Coderhouse'}
//! Important
//Mutando
arr.push(1)
obj.nombre='coderhouse'
console.log(arr, obj)

  /* -------------------------------- Funciones ------------------------------- */

  // function nombre(var1, var2) {
  //   console.log('Hola coderhouse')
  //   return var1 + var2
  // }

  // console.log(nombre(1, 2))
  // console.log(nombre('A', 2)) //implicit coercion
  // console.log(nombre(2, '2A')) //implicit coercion

  ; (function (var1, var2) {
    console.log('Hola coderhouse')
    return var1 + var2
  })(1, 2)

  ; (function nombre(nom) {
    console.log("Función:", nom);
  })("Coderhouse")

; (function (var1) {
  console.log("Soy una funcion anonima");
  console.log(var1)
})(1);

// route.get('/', function(req, res) { })

console.log('1 Hola')

/* ----------------------------- template string ---------------------------- */

const nombre = 'Coderhouse'

const completo = `
Template string - Hola ${nombre}
nueva linea
`

console.log(completo)

/* --------------------------------- clases --------------------------------- */

class Otra{
  despedida() {
    console.log('Hasta luego')
  }
}

class Cliente extends Otra{
  constructor(nombre, direccion, fecha) {
    super()
    this.nombre = nombre
    this.direccion = direccion
    this.fecha = fecha
  }
  static saludar() { console.log('Hola coderhouse') }

  mostrarNombre() {
    console.log(this.nombre)
    this.#mostrarFecha()
  }

  #mostrarFecha() {
    console.log(this.fecha)
  }
}
Cliente.saludar()
const cliente = new Cliente('Coderhouse 32070', 'Calle falsa 123', '07/07/2020')
console.log(cliente, typeof cliente)
cliente.mostrarNombre()
cliente.despedida()