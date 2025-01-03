import ArrayList from "./ArrayList.js"

describe("ArrayList", () => {
  let arrayList

  beforeEach(() => {
    arrayList = new ArrayList()
  })

  it("should create an empty list", () => {
    expect(arrayList.size()).to.equal(0)
  })

  it("should add an element to the list", () => {
    arrayList.add(12)

    expect(arrayList.size()).to.equal(1)
    expect(arrayList.get(0)).to.equal(12)
  })

  it("should add multiple elements to the list", () => {
    const elements = [1, 2, 3, 4, 5, 6]
    arrayList.addAll(elements)

    expect(arrayList.size()).to.equal(6)
    expect(arrayList.toArray()).to.eql(elements)
  })

  it("should get an element by index from the list", () => {
    arrayList.addAll([1, 2, 3])

    expect(arrayList.get(1)).to.equal(2)
    expect(arrayList.get(2)).to.equal(3)
  })

  it("should contain already added primitive value", () => {
    arrayList.addAll([1, 2, 3, 4, 5, 6])

    expect(arrayList.contains(2)).to.be.true
    expect(arrayList.contains(5)).to.be.true
  })

  it("should contain already added object value", () => {
    arrayList.add({ name: "John" })

    expect(arrayList.contains({ name: "John" })).to.be.true
  })

  it("should remove a primitive value from the list", () => {
    arrayList.addAll([1, 2, 3])

    arrayList.remove(2)

    expect(arrayList.size()).to.equal(2)
    expect(arrayList.toArray()).to.eql([1, 3])
  })

  it("should remove an object value from the list", () => {
    arrayList.addAll([{ name: "Person1" }, { name: "Person2" }, { name: "Person3" }])

    arrayList.remove({ name: "Person2" })

    expect(arrayList.size()).to.equal(2)
    expect(arrayList.toArray()).to.eql([{ name: "Person1" }, { name: "Person3" }])
  })

  it("should remove an element by index from the list", () => {
    arrayList.addAll([1, 2, 3])

    arrayList.removeAt(1)

    expect(arrayList.size()).to.equal(2)
    expect(arrayList.toArray()).to.eql([1, 3])
  })

  it("should clear the list", () => {
    arrayList.addAll([1, 2, 3])

    arrayList.clear()

    expect(arrayList.size()).to.equal(0)
  })
})