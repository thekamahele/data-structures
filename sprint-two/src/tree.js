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
  // your code here
  this.children[this.children.length] = Tree(value);  // fix me
};

treeMethods.contains = function(target) {
//   var childs = childrenArray || this.children;
//   //iterate through children of tree
  

//   if(this.value === target) {
//     return true;
//   }

//   for(var i = 0; i < childs.length; i++){
//     if(childs[i].value===target){
//       return true;
//     }

//     if(childs[i].children.length!==0){
//       //debugger;
//       return this.contains(target, childs[i].children);
//     }
//   }
//  return false;
  var childs = this.children;

  
  function traverse() {  
  if(this.value === target) {
  return true;
  }
  
  for(var i = 0; i < childs.length; i++){
    if(childs[i].value===target){
      return true;
    }

    if(childs[i].children.length!==0){
      //debugger;
      childs = child[i].children;
      return traverse();
    }
  }
 return false;
  }
  

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
