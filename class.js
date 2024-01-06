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
