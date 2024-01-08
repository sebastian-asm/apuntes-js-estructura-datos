class Node {
  constructor(value) {
    this.value = value
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  clear() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  add(value) {
    this.length++
    const node = new Node(value)
    if (this.head === null) {
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      node.prev = this.tail
      this.tail = node
    }
  }

  show() {
    let current = this.head
    console.log('**************')
    console.log(`head: ${this.head?.value}`)
    console.log(`tail: ${this.tail?.value}`)
    while (current !== null) {
      console.log(`
        ** NODE **
        value: ${current.value}
        next: ${current.next?.value}
        previous: ${current.prev?.value}
      `)
      current = current.next
    }
  }

  reverse() {
    let current = this.tail
    console.log('**************')
    console.log(`head: ${this.head?.value}`)
    console.log(`tail: ${this.tail?.value}`)
    while (current !== null) {
      console.log(`
        ** NODE **
        value: ${current.value}
        next: ${current.next?.value}
        previous: ${current.prev?.value}
      `)
      current = current.prev
    }
  }

  delete(value) {
    if (this.length === 0) return
    if (this.head.value === value) {
      if (this.length === 1) {
        this.head = null
        this.tail = null
      } else {
        this.head = this.head.next
        this.head.prev = null
      }
      this.length--
    } else if (this.tail.value === value) {
      this.tail = this.tail.prev
      this.tail.next = null
      this.length--
    } else {
      let current = this.head
      while (current.next !== null) {
        if (current.next.value === value) {
          current.next = current.next.next
          current.next.prev = current
          this.length--
          // break rompe el ciclo
          // return se sale de la función
          break
        }
        current = current.next
      }
    }
  }
}

const list = new DoublyLinkedList()
list.add(1)
list.add(2)
list.add(3)
list.show()
list.reverse()
list.delete(3)
list.show()

function initDoublyLinkedList() {
  const title = document.querySelector('#title')
  const image = document.querySelector('#image')
  const info = document.querySelector('#info')
  const buttonNext = document.querySelector('#next-movie')
  const buttonPrev = document.querySelector('#prev-movie')
  const moviesList = new DoublyLinkedList()

  moviesList.add({ name: 'Spiderman', picture: 'assets/images/spiderman.jpg' })
  moviesList.add({ name: 'Titanic', picture: 'assets/images/titanic.jpg' })
  moviesList.add({ name: 'El Señor de los Anillos', picture: 'assets/images/lotr.jpg' })

  let movie = moviesList.head
  showMovie()

  buttonNext.addEventListener('click', () => {
    if (movie.next) {
      movie = movie.next
      showMovie()
    }
  })

  buttonPrev.addEventListener('click', () => {
    if (movie.prev) {
      movie = movie.prev
      showMovie()
    }
  })

  function showMovie() {
    title.textContent = movie.value.name
    image.src = movie.value.picture
    image.alt = movie.value.name

    const movieNext = movie.next?.value
    const moviePrev = movie.prev?.value

    info.innerHTML = moviePrev ? `<p>Anterior: ${moviePrev.name}</p>` : '<p>No hay anterior</p>'
    info.innerHTML += movieNext ? `<p>Siguiente: ${movieNext.name}</p>` : '<p>No hay siguiente</p>'
  }
}

initDoublyLinkedList()
