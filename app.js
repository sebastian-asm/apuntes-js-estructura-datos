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
