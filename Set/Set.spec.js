import Set from "./Set.js"

describe("Set", () => {
  let set

  beforeEach(() => {
    set = new Set()
  })

  it("should create an empty set", () => {
    expect(set.size()).to.equal(0)
    expect(set.isEmpty()).to.be.true
  })

  it("should add multiple unique primitive values to the set", () => {
    set.add(1)
    set.add(2)
    set.add(3)

    expect(set.size()).to.equal(3)
    expect(set.isEmpty()).to.be.false
    expect(set.toArray()).to.eql([1, 2, 3])
  })

  it("should add multiple unique object values to the set", () => {
    set.add({ name: "Person1" })
    set.add({ name: "Person2" })

    expect(set.size()).to.equal(2)
    expect(set.toArray()).to.eql([{ name: "Person1" }, { name: "Person2" }])
  })

  it("should add the same primitive value multiple times to the set", () => {
    set.add(1)
    set.add(1)
    set.add(1)

    expect(set.size()).to.equal(1)
    expect(set.toArray()).to.eql([1])
  })

  it("should add the same object value multiple times to the set", () => {
    set.add({ name: "John" })
    set.add({ name: "John" })
    set.add({ name: "John" })

    expect(set.size()).to.equal(1)
    expect(set.toArray()).to.eql([{ name: "John" }])
  })

  it("should remove a primitive value from the set", () => {
    set.add(1)
    set.add(2)
    set.add(3)

    set.remove(2)

    expect(set.size()).to.equal(2)
    expect(set.toArray()).to.eql([1, 3])
  })

  it("should remove an object value from the set", () => {
    set.add({ name: "Person1" })
    set.add({ name: "Person2" })
    set.add({ name: "Person3" })

    set.remove({ name: "Person2" })

    expect(set.size()).to.equal(2)
    expect(set.toArray()).to.eql([{ name: "Person1" }, { name: "Person3" }])
  })

  it("should clear the set", () => {
    set.add(1)
    set.add(2)
    set.add(3)

    set.clear()

    expect(set.size()).to.equal(0)
    expect(set.isEmpty()).to.be.true
  })
})