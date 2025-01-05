class Queue {
  constructor() {
    this.values = []
  }

  add(element) {
    this.values.push(element)
  }

  poll() {
    return this.values.shift()
  }

  peek() {
    return this.values[0]
  }

  size() {
    return this.values.length
  }

  isEmpty() {
    return !this.size()
  }
}

export default Queue