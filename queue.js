class Queue {
  #items = []
  enqueue(item) {
    this.#items.push(item)
  }

  dequeue() {
    // eliminar el primer elemento
    return this.#items.shift()
  }

  isEmpty() {
    return this.#items.length === 0
  }

  peek() {
    return this.#items.at(0)
  }

  size() {
    return this.#items.length
  }

  getItems() {
    return [...this.#items]
  }
}

const queue = new Queue()
queue.enqueue('Belu')
queue.enqueue('Seba')
queue.enqueue('Chuby')
console.log(queue.peek())
queue.dequeue()
console.log(queue.peek())

function initQueueDemo() {
  const url = 'https://jsonplaceholder.typicode.com/posts'
  const contentRequest = document.querySelector('#content-request')
  const contentResponse = document.querySelector('#content-response')
  const buttonAdd = document.querySelector('#add')
  const buttonRequest = document.querySelector('#request')
  const queueRequest = new Queue()
  let i = 1

  buttonAdd.addEventListener('click', () => {
    queueRequest.enqueue(i++)
    showRequest()
  })

  buttonRequest.addEventListener('click', async () => {
    while (!queueRequest.isEmpty()) {
      const resp = await fetch(`${url}/${queueRequest.dequeue()}`)
      const data = await resp.json()
      await new Promise((r) => setTimeout(r, 800))
      showRequest()
      contentResponse.innerHTML =
        `<p><strong>${data.id}</strong> ${data.title}</p>` + contentResponse.innerHTML
    }
  })

  function showRequest() {
    const items = queueRequest.getItems()
    if (items.length === 0) {
      contentRequest.innerHTML = '<h3>Sin solicitudes</h3>'
      return
    }
    contentRequest.innerHTML = ''
    for (const item of items) {
      contentRequest.innerHTML += `
        <p style="display: inline-block; margin: 0 4px">
          <strong>${item}</strong
        </p>
      `
    }
  }
}

initQueueDemo()
