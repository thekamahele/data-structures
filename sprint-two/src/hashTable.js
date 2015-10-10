

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._tupCount = 0;
  this._temp = false;
};

// HashTable.prototype.resize = function(){

//  var thiz = this;
//   console.log('before rehash (this):', this)
//   console.log('before rehash (thiz):', thiz);
  
  HashTable.prototype.reHash = function(storage){
    //var thiz = this;
    var tempHash = new HashTable();
    tempHash._limit = this._limit;
    tempHash._storage = LimitedArray(this._limit);
    tempHash._temp = true;
    //iterate and call insert with new instance
    //console.log('tempHash', tempHash);
    //var newStorage = LimitedArray(this._limit); 
    //this._storage.see();
    //console.log('this is ',thiz);

    //debugger;
    //console.log('thiz storage - outside loop', thiz._storage);
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
    console.log('after rehash: ', tempHash);
    this._storage = tempHash._storage;
    //thiz._storage = tempHash._storage;
  };

//   if((this._limit * .75) < this._tupCount){
//     this._limit *= 2;
//     this._storage = reHash();
//   } else if ((this._limit * .25) > this._tupCount){
//     this._limit /= 2;
//     this._storage = reHash();
//   }
  
// };

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
  console.log("this after insert call:", this);
  var storageCopy = this._storage;

  if(this._temp === false){
    if((this._limit * .75) < this._tupCount){
      this._limit *= 2;
      HashTable.prototype.reHash.call(this, storageCopy);
    } else if ((this._limit * .25) > this._tupCount){
      this._limit /= 2;
      HashTable.prototype.reHash.call(this, storageCopy);
    }    
  }
  //HashTable.prototype.resize.call(this);
  // var that = this;
  // this.resize.bind(that);
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
  if(this._temp === false){
    if((this._limit * .75) < this._tupCount){
      this._limit *= 2;
      HashTable.prototype.reHash.call(this, this._storage);
    } else if ((this._limit * .25) > this._tupCount){
      this._limit /= 2;
      HashTable.prototype.reHash.call(this, this._storage);
    }    
  }
  //HashTable.prototype.resize.call(this);
  // var that = this;
  // this.resize.bind(that);
};


/*
 * Complexity: What is the time complexity of the above functions?
 */


