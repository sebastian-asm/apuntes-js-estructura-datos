const set = new Set()
set.add(1)
set.add(2)
set.add(3)
// este dato lo omite en vista que ya existe dentro de la colección
// set.add(3)
console.log({ set })

const people = { name: 'Belu' }
set.add(people)

// eliminar
set.delete(people)

// saber si existe un elemento
const book = { movie: 'kill bill' }
set.add(book)
if (set.has(book)) console.log('Existe la película')

// array en set (para eliminar duplicados)
const array = [1, 1, 2, 3, 4, 4, 5, 6, 7, 7, 8, 9, 9]
const arraySet = new Set(array)
console.log({ arraySet })

// recorrer un set
for (const item of set) {
  console.log(item)
}

// limpiar
set.clear()
console.log({ set })

const functions = new Set()
function addAction(fn) {
  functions.add(fn)
  console.log({ functions })
}

function run() {
  for (const fn of functions) {
    fn()
  }
}

const action1 = () => console.log('Accion 1')
const action2 = () => console.log('Accion 2')
const action3 = () => console.log('Accion 3')
const action4 = () => console.log('Accion 4')
