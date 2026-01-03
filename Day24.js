function isTreesSynchronized(tree1, tree2) {

  function isMirror(node1, node2) {
    if (!node1 && !node2) return true;a
    if (!node1 || !node2) return false;
    if (node1.value !== node2.value) return false;
    return (
      isMirror(node1.left, node2.right) &&
      isMirror(node1.right, node2.left)
    );
  }
  const synchronized = isMirror(tree1, tree2);
  return [synchronized, tree1.value];
}
