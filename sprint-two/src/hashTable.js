

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._tupCount = 0;
  this._temp = false;
};


HashTable.prototype.reHash = function(storage){
  var tempHash = new HashTable();
  tempHash._limit = this._limit;
  tempHash._storage = LimitedArray(this._limit);
  //tempHash._temp = true;

  storage.each(function(bucket){
    
    if(bucket !== null && bucket !== undefined){
      //console.log('thiz storage - inside', thiz._storage);
      _.each(bucket, function(tup){
        //tempHash.insert(tup[0], tup[1]);
        if(tup !== null && tup !== undefined){
          tempHash.insert(tup[0], tup[1]);
        }
      });
    } 
  });

  this._storage = tempHash._storage;

};


HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if(this._storage.get(index) === null || this._storage.get(index) === undefined){
    this._storage.set(index,[[k,v]]);
    this._tupCount++;
    
  } else{
    // needs to overwrite value if k already exsists
    var bucket = this._storage.get(index);
    var foundKey = false;
    _.each(bucket, function(tup){
      if(tup[0] === k){
        tup[1] = v;
        foundKey = true;
      }
    });
     
    if(foundKey === false){
      this._tupCount++;
      this._storage.get(index).push([k,v]);
    }
  }

  if((this._limit * .75) < this._tupCount){
    this._limit *= 2;
    HashTable.prototype.reHash.call(this, this._storage);
  }
};   
  

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  var result = null;

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
    if(tup[0]===k){
      bucket[index] = null;
    }
  });

  this._tupCount--;
  this._storage.set(index,bucket);
  
  if ((this._limit * .25) > this._tupCount){
    this._limit /= 2;
    HashTable.prototype.reHash.call(this, this._storage);
  }    
  
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


