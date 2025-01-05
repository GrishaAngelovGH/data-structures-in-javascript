import Queue from "./Queue.js"

describe("Queue", () => {
  let queue

  beforeEach(() => {
    queue = new Queue()
  })

  it("should create an empty queue", () => {
    expect(queue.size()).to.equal(0)
    expect(queue.isEmpty()).to.be.true
  })

  it("should add an element to the queue", () => {
    queue.add(1)

    expect(queue.size()).to.equal(1)
    expect(queue.isEmpty()).to.be.false
  })

  it("should poll value from the queue", () => {
    queue.add(1)
    queue.add(2)
    queue.add(3)

    expect(queue.poll()).to.equal(1)
    expect(queue.size()).to.equal(2)
  })

  it("should peek value from the queue", () => {
    queue.add(1)
    queue.add(2)
    queue.add(3)

    expect(queue.peek()).to.equal(1)
    expect(queue.size()).to.equal(3)
  })
})