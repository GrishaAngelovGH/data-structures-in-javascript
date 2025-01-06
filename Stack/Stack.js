class Stack {
  constructor() {
    this.values = []
  }

  push(element) {
    this.values.push(element)
  }

  pop() {
    return this.values.pop()
  }

  peek() {
    return this.values[this.values.length - 1]
  }

  search(element) {
    if (typeof element !== "object") {
      return this.values.indexOf(element) + 1
    }

    return this.values.findIndex(v => JSON.stringify(v) === JSON.stringify(element)) + 1
  }

  isEmpty() {
    return !this.values.length
  }

  toArray() {
    return this.values
  }
}

export default Stack