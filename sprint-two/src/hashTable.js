

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if(this._storage.get(index)=== null || this._storage.get(index) === undefined){
    this._storage.set(index,[[k,v]]);
    //console.log(this._storage.get(index)[0]);
  } else{
    this._storage.get(index).push([k,v]);
    //console.log(this._storage.get(index)[0]);
  }
  
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  var result;
  _.each(bucket, function(tup){
    //console.log(tup[0]);
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
  console.log(this._storage.get(index));  
  var bucket = this._storage.get(index);

  _.each(bucket, function(tup, index){
    console.log(tup);
    if(tup[0]===k){
      bucket[index] = null;
      //tup[0] = null;
      //tup[1] = null;
    }
  });

  console.log(this._storage.get(index));
  this._storage.set(index,bucket);
  
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


