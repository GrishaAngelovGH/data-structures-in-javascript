import Stack from "./Stack.js"

describe("Stack", () => {
  let stack

  beforeEach(() => {
    stack = new Stack()
  })

  it("should create an empty stack", () => {
    expect(stack.isEmpty()).to.be.true
  })

  it("should add an element to the stack", () => {
    stack.push(1)

    expect(stack.peek()).to.equal(1)
    expect(stack.isEmpty()).to.be.false
  })

  it("should pop an element from the stack", () => {
    stack.push(1)
    stack.push(2)
    stack.push(3)

    expect(stack.pop()).to.equal(3)
  })

  it("should empty the stack", () => {
    stack.push(1)
    stack.push(2)

    stack.pop()
    stack.pop()

    expect(stack.isEmpty()).to.be.true
  })

  it("should peek an element from the stack", () => {
    stack.push(1)
    stack.push(2)
    stack.push(3)

    expect(stack.peek()).to.equal(3)
    expect(stack.toArray()).to.eql([1, 2, 3])
  })

  it("should search for the 1-based position of a primitive value in the stack", () => {
    stack.push(1)
    stack.push(2)
    stack.push(3)

    expect(stack.search(2)).to.equal(2)
  })

  it("should search for the 1-based position of an object value in the stack", () => {
    stack.push({ name: "Person1" })
    stack.push({ name: "Person2" })
    stack.push({ name: "Person3" })

    expect(stack.search({ name: "Person3" })).to.equal(3)
  })
})