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
