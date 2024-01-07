class Node {
  constructor(value) {
    this.value = value
    this.nextValue = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  add(value) {
    const node = new Node(value)
    if (this.head === null) {
      this.head = node
    } else {
      let current = this.head
      while (current.nextValue !== null) {
        current = current.nextValue
      }
      current.nextValue = node
    }
  }

  show() {
    let current = this.head
    while (current !== null) {
      console.log(current.value)
      current = current.nextValue
    }
  }

  size() {
    let count = 0
    let current = this.head
    while (current !== null) {
      count++
      current = current.nextValue
    }
    return count
  }

  delete(value) {
    if (this.head.value === value) {
      this.head = this.head.nextValue
    } else {
      let current = this.head
      while (current.nextValue !== null) {
        if (current.nextValue.value === value) {
          current.nextValue = current.nextValue.nextValue
          break
        }
        current = current.nextValue
      }
    }
  }

  clear() {
    this.head = null
  }
}

const linkedList = new LinkedList()
linkedList.add('A')
linkedList.add('B')
linkedList.add('C')
linkedList.show()
console.log('Total de elementos:', linkedList.size())

linkedList.delete('A')
linkedList.show()
console.log('Total de elementos:', linkedList.size())

function initLinkedListDemo() {
  const title = document.querySelector('#title')
  const image = document.querySelector('#image')
  const contentNext = document.querySelector('#content-next')
  const buttonNext = document.querySelector('#next-movie')
  const moviesList = new LinkedList()

  moviesList.add({ name: 'Spiderman', picture: 'assets/images/spiderman.jpg' })
  moviesList.add({ name: 'Titanic', picture: 'assets/images/titanic.jpg' })
  moviesList.add({ name: 'El Señor de los Anillos', picture: 'assets/images/lotr.jpg' })

  console.log({ moviesList })
  showMovie()

  buttonNext.addEventListener('click', () => {
    if (moviesList.head.nextValue) {
      moviesList.delete(moviesList.head.value)
      showMovie()
    }
  })

  function showMovie() {
    const movie = moviesList.head.value
    title.textContent = movie.name
    image.src = movie.picture
    image.alt = movie.name

    if (moviesList.head.nextValue) {
      const nextMovie = moviesList.head.nextValue.value
      contentNext.innerHTML = `<p>Siguiente: <strong>${nextMovie.name}</storng></p>`
    } else {
      contentNext.innerHTML = '<p>No existen más películas</p>'
    }
  }
}

initLinkedListDemo()
