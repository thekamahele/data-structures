var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
 
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {

  this.children[this.children.length] = Tree(value);  // fix me
};

treeMethods.contains = function(target, node) {
  var current = node || this;
  //iterate through children of tree
  var found = false;

  if(current.value === target) {
    found = true;
    return found;
  }

  for(var i = 0; i < current.children.length; i++){

    found = this.contains(target, current.children[i]);
    
    if(found === true) {
      return found;
    }
  }

 return found;

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
