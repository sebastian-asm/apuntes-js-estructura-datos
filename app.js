// creando un object
const person = new Object()
person.name = 'seba'
person.age = 40
console.log({ person })

// creando un object mediante class
class People {
  constructor(firstName, lastName) {
    // asignando las variables del constructor al contexto de la clase
    this.firstName = firstName
    this.lastName = lastName
  }

  hello() {
    return `Hola! soy ${this.firstName} ${this.lastName}`
  }
}

// herencia
class Student extends People {
  constructor(firstName, lastName, career) {
    super(firstName, lastName)
    this.career = career
  }

  // sobreescritura de método
  hello() {
    return `${super.hello()}, estudiante de ${this.career}`
  }

  careerDatail() {
    return `Estudia ${this.career}`
  }
}

const people = new People('belu', 'manrique')
console.log({ people })
console.log(people.hello())

const student = new Student('seba', 'sanchez', 'programacion')
console.log({ student })
console.log(student.hello())
console.log(student.careerDatail())

// función de primera clase
function hello() {
  console.log('Hola!')
}
const h = hello // guardando la función en una variable
h() // ejecutando la función

// con parámetros
function sum(a, b) {
  return a + b
}
const s = sum
console.log(s(5, 5))

// función de orden superior
function some(fn) {
  fn()
}
some(h)

// con parámetros adicionales
function some2(fn, num1, num2) {
  const result = fn(num1, num2)
  console.log('El resultado es:', result)
}
some2(s, 4, 4)

// función anónima: tradicional
some2(
  function (a, b) {
    return a * b
  },
  2,
  3
)

// función anónima: arrow function
some2((a, b) => a * b, 5, 5)

// mutable (arreglo): modificando el arreglo original
const numbers = [1, 2, 3, 4, 5]
function mutable(collection, num) {
  for (let i = 0; i < collection.length; i++) {
    collection[i] *= num
  }
  return collection
}

const newArray = mutable(numbers, 2)
console.log({ newArray, numbers })

// inmutable (arreglo): el arreglo original no se altera
const numbers2 = [1, 2, 3, 4, 5]
function inmutable(collection, num) {
  const newNumbers = []
  for (const item of collection) {
    newNumbers.push(item * num)
  }
  return newNumbers
}

const newArray2 = inmutable(numbers2, 3)
console.log({ newArray2, numbers2 })

// mutable (objectos)
class Beer {
  constructor(name, price) {
    this.name = name
    this.price = price
  }
}

function toUpperMutable(beer) {
  beer.name = beer.name.toUpperCase()
  return beer
}

const beer = new Beer('cerveza', 10)
const newBeer = toUpperMutable(beer)
console.log({ beer, newBeer })

// inmutable (objectos)
function toUpperInmutable(beer) {
  // creando una copia con el operador spread (no recomendada para objectos complejos)
  // const newBeer = { ...beer }
  const newBeer = structuredClone(beer)
  newBeer.name = newBeer.name.toUpperCase()
  return newBeer
}

const beer2 = new Beer('cerveza', 10)
const newBeer2 = toUpperInmutable(beer2)
console.log({ beer2, newBeer2 })

// búsqueda: modo estructurado
const names = ['Belu', 'Seba', 'Valen', 'Ramsito', 'Rossana']
function searchFirstLetter(collection, letter) {
  const newCollection = []
  for (const word of collection) {
    if (word[0].toLowerCase() === letter.toLowerCase()) {
      newCollection.push(word)
    }
  }
  return newCollection
}
console.log(searchFirstLetter(names, 'r'))

// búsqueda: con método inmutable que ofrece JS
function searchFirstLetter2(collection, letter) {
  return collection.filter((word) => word[0].toLowerCase() === letter.toLowerCase())
}
console.log(searchFirstLetter2(names, 'r'))
