

// ------------------------
// Instantiate a new graph
var Graph = function() {
  this.edgeList = [];
  this.adjacencyList = [];
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  //push an array to adjacencyList at node's index = node
  this.adjacencyList[node]=[];
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if(this.adjacencyList[node]) {
    return true;
  }
  return false;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.adjacencyList[node];
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var list = this.adjacencyList[fromNode];

  for(var i = 0; i < list.length; i++) {
    if(list[i] === toNode) {
      return true;
    }
  } 
  return false;
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edgeList.push([fromNode, toNode]);
  //this.edgeList.push([toNode, fromNode]);

  this.adjacencyList[fromNode].push(toNode);
  this.adjacencyList[toNode].push(fromNode);

};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var list = this.edgeList;
  for(var i =0; i<list.length; i++){
    if(_.contains(list[i], fromNode) && _.contains(list[i], toNode)){
      delete list[i];
    }
  }
  //remove toNode from fromNode's adjacency list
  this.adjacencyList[fromNode] = _.without(this.adjacencyList[fromNode], toNode);

  //remove fromNode from toNode's adjacency list
  this.adjacencyList[toNode] = _.without(this.adjacencyList[toNode], fromNode);
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {

  _.each(this.adjacencyList, function(element, node) {
    cb(node);
  });

};

/*
 * Complexity: What is the time complexity of the above functions?
 */


