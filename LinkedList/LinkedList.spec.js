import LinkedList from "./LinkedList.js"

describe("LinkedList", () => {
  let linkedList

  beforeEach(() => {
    linkedList = new LinkedList()
  })

  it("should create an empty list", () => {
    expect(linkedList.getFirst()).to.be.null
    expect(linkedList.size()).to.equal(0)
  })

  it("should add an element to the list", () => {
    linkedList.add(1)

    const expectedList = { value: 1, prevNode: null, nextNode: null }

    expect(linkedList.getFirst()).to.eql(expectedList)
    expect(linkedList.size()).to.equal(1)
  })

  it("should add multiple elements to the list", () => {
    linkedList.add(1)
    linkedList.add(2)
    linkedList.add(3)

    const expectedList = {
      value: 1,
      prevNode: null,
      nextNode: {
        value: 2,
        prevNode: 1,
        nextNode: {
          value: 3,
          prevNode: 2,
          nextNode: null
        }
      }
    }

    expect(linkedList.getFirst()).to.eql(expectedList)
    expect(linkedList.size()).to.equal(3)
  })

  it("should add an element at given index to the list", () => {
    linkedList.add(1)
    linkedList.add(2)
    linkedList.add(3)

    linkedList.addAt(1, 20)

    const expectedList = {
      value: 1,
      prevNode: null,
      nextNode: {
        value: 20,
        prevNode: 1,
        nextNode: {
          value: 2,
          prevNode: 20,
          nextNode: {
            value: 3,
            prevNode: 2,
            nextNode: null
          }
        }
      }
    }

    expect(linkedList.getFirst()).to.eql(expectedList)
  })

  it("should add an element at first position in the list", () => {
    linkedList.add(1)
    linkedList.add(2)
    linkedList.add(3)

    linkedList.addFirst(100)

    const expectedList = {
      value: 100,
      prevNode: null,
      nextNode: {
        value: 1,
        prevNode: 100,
        nextNode: {
          value: 2,
          prevNode: 1,
          nextNode: {
            value: 3,
            prevNode: 2,
            nextNode: null
          }
        }
      }
    }

    expect(linkedList.getFirst()).to.eql(expectedList)
  })

  it("should add an element at last position in the list", () => {
    linkedList.add(1)
    linkedList.add(2)
    linkedList.add(3)

    linkedList.addLast(100)

    const expectedList = {
      value: 1,
      prevNode: null,
      nextNode: {
        value: 2,
        prevNode: 1,
        nextNode: {
          value: 3,
          prevNode: 2,
          nextNode: {
            value: 100,
            prevNode: 3,
            nextNode: null
          }
        }
      }
    }

    expect(linkedList.getFirst()).to.eql(expectedList)
  })

  it("should get an element at the given index from the list", () => {
    linkedList.add(1)
    linkedList.add(2)
    linkedList.add(3)

    const expectedValue = { value: 2, prevNode: 1, nextNode: { value: 3, prevNode: 2, nextNode: null } }

    expect(linkedList.getAt(1)).to.eql(expectedValue)
  })

  it("should get the last element from the list", () => {
    linkedList.add(1)
    linkedList.add(2)
    linkedList.add(3)

    const expectedValue = { value: 3, prevNode: 2, nextNode: null }

    expect(linkedList.getLast()).to.eql(expectedValue)
  })

  it("should get the elements as an array", () => {
    linkedList.add(1)
    linkedList.add(2)
    linkedList.add(3)

    const expectedValue = [1, 2, 3]

    expect(linkedList.toArray()).to.eql(expectedValue)
  })

  it("should contain already added primitive value", () => {
    linkedList.add(1)
    linkedList.add(2)
    linkedList.add(3)

    expect(linkedList.contains(2)).to.be.true
  })

  it("should contain already added object value", () => {
    linkedList.add({ name: "Person1" })
    linkedList.add({ name: "Person2" })
    linkedList.add({ name: "Person3" })

    expect(linkedList.contains({ name: "Person2" })).to.be.true
  })

  it("should remove an element by index from the list", () => {
    linkedList.add(1)
    linkedList.add(2)
    linkedList.add(3)

    linkedList.removeAt(1)

    const expectedList = {
      value: 1,
      prevNode: null,
      nextNode: {
        value: 3,
        prevNode: 1,
        nextNode: null
      }
    }

    expect(linkedList.getFirst()).to.eql(expectedList)
    expect(linkedList.size()).to.equal(2)
  })

  it("should remove the first element from the list", () => {
    linkedList.add(1)
    linkedList.add(2)
    linkedList.add(3)

    linkedList.removeFirst()

    const expectedList = {
      value: 2,
      prevNode: null,
      nextNode: {
        value: 3,
        prevNode: 2,
        nextNode: null
      }
    }

    expect(linkedList.getFirst()).to.eql(expectedList)
    expect(linkedList.size()).to.equal(2)
  })

  it("should remove the last element from the list", () => {
    linkedList.add(1)
    linkedList.add(2)
    linkedList.add(3)

    linkedList.removeLast()

    const expectedList = {
      value: 1,
      prevNode: null,
      nextNode: {
        value: 2,
        prevNode: 1,
        nextNode: null
      }
    }

    expect(linkedList.getFirst()).to.eql(expectedList)
    expect(linkedList.size()).to.equal(2)
  })

  it("should clear the list", () => {
    linkedList.add(1)
    linkedList.add(2)
    linkedList.add(3)

    linkedList.clear()

    expect(linkedList.getFirst()).to.be.null
  })
})