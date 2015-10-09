

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._tupCount = 0;
};

HashTable.prototype.resize = function(){


  if(this._limit * .75 <= this._tupCount){
    this._limit *= 2;
  } else if (this._limit*.25 >= this._tupCount){
    this._limit /= 2;
  }

  //create new LimitedArray with new limit
  //iterate through each tuple
    //call insert onto new hashtable
  //set this._storage = new hashtable
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if(this._storage.get(index)=== null || this._storage.get(index) === undefined){
    this._storage.set(index,[[k,v]]);
    this._tupCount++;
    
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
      this._tupCount++;
      this._storage.get(index).push([k,v]);
    }
  }
  this.resize();
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
  this._tupCount--;
  this._storage.set(index,bucket);
  this.resize();
};

























/*
 * Complexity: What is the time complexity of the above functions?
 */


