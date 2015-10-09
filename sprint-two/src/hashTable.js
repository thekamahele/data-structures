

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if(this._storage.get(index)=== null || this._storage.get(index) === undefined){
    this._storage.set(index,[[k,v]]);
    
  } else{
    // needs to overwrite value if k already exsists
    var bucket = this._storage.get(index);
    var foundKey = false;
    _.each(bucket, function(tup){
      if(tup[0]===k){
        tup[1] = v;
        foundKey = true;
      }
    });
     
    if(foundKey===false){
      this._storage.get(index).push([k,v]);
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  var result;
  _.each(bucket, function(tup){
    if(tup===null){
      result = null;
    }
    else if(tup[0]===k){
      result = tup[1];
    }
  });
  return result;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
 
  var bucket = this._storage.get(index);

  _.each(bucket, function(tup, index){
    console.log(tup);
    if(tup[0]===k){
      bucket[index] = null;
    }
  });
  this._storage.set(index,bucket);
  
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


