var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var storage = Object.create(stackMethods);
  storage.length = 0;

  return storage;
};

var stackMethods =  {
  push: function(value) {
    this.length++;
    this[this.length] = value;
  },
  pop: function() {
    var result = this[this.length];
    if(this.length > 0) {
      delete this[this.length];
      this.length--;
    }
    return result;
  },
  size: function() {
    return this.length;
  }
};

