var BinarySearchTree = function(value) {
  var tree = {};
  tree.value = value;
  tree.left;
  tree.right;

  _.extend(tree, binaryMethods);

  return tree;

};

var binaryMethods = {};

binaryMethods.insert = function(value) {
  
  if(value < this.value) {
    if(this.left === undefined) {
      this.left = BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  } else {
    if(this.right === undefined) {
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }

};

binaryMethods.contains = function(value) {
  if(value === this.value) {
    return true;
  }

  if(value < this.value) {
    if(this.left === undefined) {
      return false;
    } else {
     return this.left.contains(value);
    }
  } else {
    if(this.right === undefined) {
      return false;
    } else {
     return this.right.contains(value);
    }
  }
  return false;
};

binaryMethods.depthFirstLog = function(cb) {  
  // calls cb on value of node
  cb(this.value);
    // make recursive call with node.left
  if(this.left !== undefined){
    this.left.depthFirstLog(cb);
  }
  // make recursive call with node.right
  if(this.right !== undefined){
    this.right.depthFirstLog(cb);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
