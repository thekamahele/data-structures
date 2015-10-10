

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._tupCount = 0;
};

HashTable.prototype.resize = function(){

 var thiz = this;
  console.log('before rehash (this):', this)
  console.log('before rehash (thiz):', thiz);
  
  var reHash = function(){
    var tempHash = new HashTable();
    tempHash._limit = thiz._limit;
    tempHash._storage = LimitedArray(thiz._limit);
    //iterate and call insert with new instance
    //console.log('tempHash', tempHash);
    //var newStorage = LimitedArray(this._limit); 
    //this._storage.see();
    //console.log('this is ',thiz);

    //debugger;
    //console.log('thiz storage - outside loop', thiz._storage);
    thiz._storage.each(function(bucket){
      
      if(bucket !== null && bucket !== undefined){
        //console.log('thiz storage - inside', thiz._storage);
        _.each(bucket, function(tup){
          //tempHash.insert(tup[0], tup[1]);
          thiz.insert.bind(tempHash, tup[0], tup[1]);
        });
      } 
    });
    console.log('after rehash: ', tempHash);
    return tempHash._storage;
    //thiz._storage = tempHash._storage;
  };

  if((this._limit * .75) < this._tupCount){
    this._limit *= 2;
    this._storage = reHash();
  } else if ((this._limit * .25) > this._tupCount){
    this._limit /= 2;
    this._storage = reHash();
  }
  //create a temp variable

  //create a temp instance of HashTable (tempHash)
  //set the limit of the temp instance to this._limit
    //tempHash._limit = ;



  
  
  //iterate through each tuple
    //call insert onto new hashtable
  //set this._storage = temp variable holding new hashtable
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
  console.log("this after insert call:", this);
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


