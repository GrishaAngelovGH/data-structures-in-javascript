class Set {
  constructor() {
    this.values = []
  }

  add(element) {
    if (!this.contains(element)) {
      this.values.push(element)
    }
  }

  remove(element) {
    if (this.contains(element)) {
      if (typeof element !== "object") {
        const index = this.values.indexOf(element)
        this.values.splice(index, 1)
        return
      }

      this.values = this.values.filter(v => JSON.stringify(v) !== JSON.stringify(element))
    }
  }

  contains(element) {
    if (typeof element !== "object") {
      return this.values.includes(element)
    }

    return this.values.some(v => JSON.stringify(v) === JSON.stringify(element))
  }

  size() {
    return this.values.length
  }

  isEmpty() {
    return !this.size()
  }

  clear() {
    this.values = []
  }

  toArray() {
    return this.values
  }
}

export default Set