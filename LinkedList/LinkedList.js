class Node {
  constructor(value, prevNode, nextNode) {
    this.value = value
    this.prevNode = prevNode
    this.nextNode = nextNode
  }
}

class LinkedList {
  constructor() {
    this.root = null
  }

  add(element) {
    if (!this.root) {
      this.root = new Node(element, null, null)
    } else {
      const queue = []
      queue.push(this.root)

      while (queue.length) {
        const node = queue.shift()

        node.nextNode ?
          queue.push(node.nextNode) :
          node.nextNode = new Node(element, node.value, null)
      }
    }
  }

  addAt(index, element) {
    let count = 0

    const queue = []
    queue.push(this.root)

    let node

    while (count < index) {
      node = queue.shift()

      if (node.nextNode) {
        queue.push(node.nextNode)
      }

      count++
    }

    const oldNext = { ...node.nextNode }

    oldNext.prevNode = element

    node.nextNode = new Node(element, node.value, oldNext)
  }

  addFirst(element) {
    const oldRoot = { ...this.root }

    oldRoot.prevNode = element

    this.root = new Node(element, null, oldRoot)
  }

  addLast(element) {
    this.add(element)
  }

  getAt(index) {
    let count = 0

    const queue = []
    queue.push(this.root)

    let node

    while (count <= index) {
      node = queue.shift()

      if (node.nextNode) {
        queue.push(node.nextNode)
      }

      count++
    }

    return node
  }

  getFirst() {
    return this.root
  }

  getLast() {
    const queue = []
    queue.push(this.root)

    let node

    while (queue.length) {
      node = queue.shift()

      if (node.nextNode) {
        queue.push(node.nextNode)
      }
    }

    return node
  }

  toArray() {
    const values = []
    const queue = []

    queue.push(this.root)

    while (queue.length) {
      const node = queue.shift()

      node.nextNode && queue.push(node.nextNode)

      values.push(node.value)
    }

    return values
  }

  contains(element) {
    if (typeof element !== "object") {
      return this.toArray().includes(element)
    }

    return this.toArray().some(v => JSON.stringify(v) === JSON.stringify(element))
  }

  size() {
    return this.root ? this.toArray().length : 0
  }

  removeAt(index) {
    const prevNode = this.getAt(index - 1)
    const nextNode = this.getAt(index).nextNode

    prevNode.nextNode = nextNode
    nextNode.prevNode = prevNode.value
  }

  removeFirst() {
    const newRoot = this.getFirst().nextNode
    newRoot.prevNode = null

    this.root = newRoot
  }

  removeLast() {
    const secondToLastIndex = this.size() - 2
    const secondToLastNode = this.getAt(secondToLastIndex)

    secondToLastNode.nextNode = null
  }

  clear() {
    this.root = null
  }
}

export default LinkedList