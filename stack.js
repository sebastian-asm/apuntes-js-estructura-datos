class Stack {
  // # lo convierte en privada, solo puede ser accedido mediante métodos
  #items = []

  push(item) {
    this.#items.push(item)
  }

  pop() {
    return this.#items.pop()
  }

  peek() {
    return this.#items.at(-1)
  }

  size() {
    return this.#items.length
  }

  getItems() {
    return [...this.#items]
  }
}

const stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
console.log(stack.peek())
console.log(stack.size())
stack.pop()
console.log({ stack })

// ejemplo de stack en el front
function initAddNames() {
  const inputName = document.querySelector('#name')
  const content = document.querySelector('#content')
  const addButton = document.querySelector('#addToStack')
  const deleteButton = document.querySelector('#deleteToStack')
  const quantity = document.querySelector('#quantity')
  const stackNames = new Stack()

  addButton.addEventListener('click', (e) => {
    e.preventDefault()
    if (inputName.value === '') return
    stackNames.push(inputName.value)
    showNames()
    inputName.value = ''
    inputName.focus()
  })

  deleteButton.addEventListener('click', (e) => {
    e.preventDefault()
    stackNames.pop()
    showNames()
  })

  function showNames() {
    content.innerHTML = ''
    const items = stackNames.getItems()
    quantity.textContent = `(${stackNames.size()})`
    for (const item of items) {
      content.innerHTML += `<li>${item}</li>`
    }
  }
}

initAddNames()
