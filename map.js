const map = new Map()
map.set(2, 'Belu')
map.set(5, 'Seba')
// map.set(5, 'Chuby')

console.log({ map })

// obtener un valor
console.log(map.get(2))

// validar si existe, devuelve true o false
console.log(map.has(2))
console.log(map.has(1))

// eliminar un valor
map.delete(2)
console.log({ map })

const keyObject1 = { id: 1, hash: 'abc' }
const keyObject2 = { id: 2, hash: 'def' }
map.set(keyObject1, 'Valen')
map.set(keyObject2, 'Ramsito')
console.log({ map })

// ingresar datos de forma encadenada
map.set(20, 'nombre 1').set(30, 'nombre 2').set(40, 'nombre 3')
console.log({ map })

// recorrer la colección
for (const value of map.values()) {
  console.log(value)
}
for (const key of map.keys()) {
  console.log(key)
}
for (const item of map) {
  console.log(item)
}

// limpiar todo el map
map.clear()
console.log({ map })

function initMapDemo() {
  const inputCode = document.querySelector('#code')
  const inputCustomer = document.querySelector('#customer')
  const content = document.querySelector('#content')
  const buttonAdd = document.querySelector('#add')
  const customers = new Map()

  buttonAdd.addEventListener('click', () => {
    customers.set(inputCode.value, inputCustomer.value)
    inputCode.value = ''
    inputCustomer.value = ''
    inputCode.focus()
    show()
  })

  function show() {
    content.innerHTML = ''
    for (const customer of customers) {
      const [code, name] = customer
      content.innerHTML += `<p><strong>${code}</strong> ${name}</p>`
    }
  }
}

initMapDemo()
