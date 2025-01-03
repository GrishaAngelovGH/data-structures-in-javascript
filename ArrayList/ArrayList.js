const INITIAL_CAPACITY = 5

class ArrayList {
  constructor() {
    this.currentCapacity = INITIAL_CAPACITY
    this.values = new Array(this.currentCapacity)
    this.index = 0
  }

  add(element) {
    if (this.index < this.currentCapacity) {
      this.values[this.index] = element
      this.index++
    } else {
      this.currentCapacity *= 2
      const oldValues = [...this.values]

      this.values = new Array(this.currentCapacity)
      this.values.unshift(...oldValues)
      this.values[this.index] = element

      this.index++
    }
  }

  addAll(elements) {
    elements.forEach(element => this.add(element))
  }

  get(index) {
    return this.values[index]
  }

  contains(element) {
    if (typeof element !== "object") {
      return this.values.includes(element)
    }

    return this.values.some(v => JSON.stringify(v) === JSON.stringify(element))
  }

  size() {
    return this.values.filter(v => v).length
  }

  remove(element) {
    if (typeof element !== "object") {
      const index = this.values.indexOf(element)
      this.removeAt(index)
      return
    }

    this.values = this.values.filter(v => JSON.stringify(v) !== JSON.stringify(element))
  }

  removeAt(index) {
    this.values.splice(index, 1)
    this.index -= 1
  }

  clear() {
    this.currentCapacity = INITIAL_CAPACITY
    this.values = new Array(this.currentCapacity)
    this.index = 0
  }

  toArray() {
    return this.values.filter(v => v)
  }
}

export default ArrayList