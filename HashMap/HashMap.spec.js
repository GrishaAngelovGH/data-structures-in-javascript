import HashMap from "./HashMap.js"

describe("HashMap", () => {
  let hashMap

  beforeEach(() => {
    hashMap = new HashMap()
  })

  it("should create an empty hashmap", () => {
    expect(hashMap.size()).to.equal(0)
    expect(hashMap.isEmpty()).to.be.true
  })

  it("should add a key/value pair to the hashmap", () => {
    hashMap.put("id-1", 10)

    expect(hashMap.size()).to.equal(1)
    expect(hashMap.containsKey("id-1")).to.be.true
    expect(hashMap.isEmpty()).to.be.false
  })

  it("should overwrite a key/value pair from the hashmap", () => {
    hashMap.put("id-1", 10)
    hashMap.put("id-1", 1000)

    expect(hashMap.get("id-1")).to.equal(1000)
  })

  it("should remove the value mapped to the given key from the hashmap", () => {
    hashMap.put("id-1", 1)
    hashMap.put("id-10", 10)
    hashMap.put("id-100", 100)

    hashMap.remove("id-10")

    expect(hashMap.size()).to.equal(2)
    expect(hashMap.containsKey("id-10")).to.be.false
  })

  it('should get the keySet from the hashmap', () => {
    hashMap.put("id-1", 1)
    hashMap.put("id-10", 10)
    hashMap.put("id-100", 100)

    expect(hashMap.keySet()).to.eql(["id-1", "id-10", "id-100"])
  })

  it('should get the values from the hashmap', () => {
    hashMap.put("id-1", 1)
    hashMap.put("id-10", 10)
    hashMap.put("id-100", 100)

    expect(hashMap.values()).to.eql([1, 10, 100])
  })

  it('should get the entrySet from the hashmap', () => {
    hashMap.put("id-1", 1)
    hashMap.put("id-10", 10)

    expect(hashMap.entrySet()).to.eql([
      ["id-1", 1],
      ["id-10", 10]
    ])
  })

  it('should clear the hashmap', () => {
    hashMap.put("id-1", 1)
    hashMap.put("id-10", 10)

    hashMap.clear()

    expect(hashMap.size()).to.equal(0)
    expect(hashMap.isEmpty()).to.be.true
  })
})