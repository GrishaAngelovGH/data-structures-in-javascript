import BinaryTree, { TreeNode } from "./BinaryTree.js"

describe('BinaryTree', () => {
  let binaryTree

  beforeEach(() => {
    binaryTree = new BinaryTree(
      new TreeNode(
        1,
        new TreeNode(
          2,
          new TreeNode(4),
          new TreeNode(5)
        ),
        new TreeNode(
          3,
          new TreeNode(6)
        )
      )
    )
  })

  it('should traverse the tree with the Breadth First Search algorithm', () => {
    expect(binaryTree.breadthFirstSearch()).to.eql([1, 2, 3, 4, 5, 6])
  })

  it('should traverse the tree with the Depth First Search algorithm', () => {
    expect(binaryTree.depthFirstSearch()).to.eql([4, 2, 5, 1, 6, 3])
  })
})