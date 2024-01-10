class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(value) {
    const node = new Node(value)
    if (this.root === null) {
      return (this.root = node)
    }

    let current = this.root
    while (true) {
      if (value === current.value) break
      if (value < current.value) {
        if (current.left === null) {
          current.left = node
          break
        }
        current = current.left
      } else {
        if (current.right === null) {
          current.right = node
          break
        }
        current = current.right
      }
    }
  }

  search(value) {
    if (this.root === null) return false
    let current = this.root
    // let i = 0

    while (current) {
      // console.log(++i)
      if (value === current.value) return current
      if (value < current.value) current = current.left
      else current = current.right
    }
    return false
  }

  showInOrder(node) {
    if (node === undefined) node = this.root
    if (node !== null) {
      this.showInOrder(node.left)
      console.log(node.value)
      this.showInOrder(node.right)
    }
  }

  showPreOrder(node) {
    if (node === undefined) node = this.root
    if (node !== null) {
      console.log(node.value)
      this.showPreOrder(node.left)
      this.showPreOrder(node.right)
    }
  }

  showPostOrder(node) {
    if (node === undefined) node = this.root
    if (node !== null) {
      this.showPostOrder(node.left)
      this.showPostOrder(node.right)
      console.log(node.value)
    }
  }
}

const tree = new BinarySearchTree()
tree.insert(5)
tree.insert(9)
tree.insert(1)
tree.insert(10)
tree.insert(11)
tree.insert(8)
tree.insert(4)
tree.insert(3)

// console.log({ tree })
// console.log(tree.search(11))
// tree.showInOrder()
// tree.showPreOrder()
// tree.showPostOrder()

// recursividad
function recursiveShowMessage(n) {
  // se tiene que indicar el momento en que se deja de llamar a la función
  if (n === 0) return
  console.log(`mensaje ${n}`)
  recursiveShowMessage(n - 1)
}

// recursiveShowMessage(5)

const maxNumber = 100000
const treeNumbers = new BinarySearchTree()
let json = []

for (let i = 0; i < maxNumber; i++) {
  const number = Math.floor(Math.random() * maxNumber)
  json.push(number)
  treeNumbers.insert(number)
}

const numberToSearch = 90000
// búsqueda lineal
console.time('Tiempo búsqueda lineal')
let exists = false
for (const n of json) {
  if (n === numberToSearch) {
    exists = true
    break
  }
}

if (exists) console.log('Número existe en la búsqueda lineal')
else console.log('Número no existe en la búsqueda lineal')
console.timeEnd('Tiempo búsqueda lineal')

// búsqueda mediante árbol binario
console.time('Tiempo árbol binario')
if (treeNumbers.search(numberToSearch)) console.log('Número existe en el árbol binario')
else console.log('Número no existe en el árbol binario')
console.timeEnd('Tiempo árbol binario')
