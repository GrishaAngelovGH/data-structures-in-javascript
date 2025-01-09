export class TreeNode {
  constructor(value, leftNode, rightNode) {
    this.value = value
    this.leftNode = leftNode
    this.rightNode = rightNode
  }
}

class BinaryTree {
  constructor(root) {
    this.root = root
  }

  breadthFirstSearch() {
    if (!this.root) return

    const values = []
    const queue = []

    queue.push(this.root)

    while (queue.length > 0) {
      const node = queue.shift()

      node.leftNode && queue.push(node.leftNode)
      node.rightNode && queue.push(node.rightNode)

      values.push(node.value)
    }

    return values
  }

  depthFirstSearch() {
    return this.traverseInOrder(this.root)
  }

  traverseInOrder(node, values = []) {
    if (!node) return

    this.traverseInOrder(node.leftNode, values)
    values.push(node.value)
    this.traverseInOrder(node.rightNode, values)

    return values
  }
}

export default BinaryTree