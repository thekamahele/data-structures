var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //create a new node
    var newNode = Node(value);
    
    var temp = list.head;
    //debugger;
    if(list.head === null) {
      list.head = newNode;
      list.tail = newNode;
    } else {
   
      list.tail.next = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function() {
    //result variable
    var result = list.head;
    //assign new head value
    list.head = list.head.next;
    //return the former head
    return result.value;
  };

  list.contains = function(target) {
    var temp = list.head;
    while(temp) {
      if(temp.value===target){
        return true;
      }
      temp = temp.next;
    }
    return false;
      //temp.next = newNode;

  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
