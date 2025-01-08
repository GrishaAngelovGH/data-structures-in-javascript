class HashMap {
  constructor() {
    this.elements = {}
  }

  put(key, value) {
    this.elements[key] = value
  }

  get(key) {
    return this.elements[key]
  }

  remove(key) {
    const {
      [key]: value,
      ...rest
    } = this.elements

    this.elements = rest
  }

  containsKey(key) {
    return Object.keys(this.elements).includes(key)
  }

  size() {
    return this.values().length
  }

  isEmpty() {
    return !this.size()
  }

  keySet() {
    return Object.keys(this.elements)
  }

  values() {
    return Object.values(this.elements)
  }

  entrySet() {
    return Object.entries(this.elements)
  }

  clear() {
    this.elements = {}
  }
}

export default HashMap