var Queue = function() {
    // Hey! Rewrite in the new style. Your code will wind up looking very similar,
    // but try not not reference your old code in writing the new style.
    var storage = {
        length: 0
    }

    _.extend(storage, queueMethods);
    return storage;
};

var queueMethods = {
    enqueue: function(value) {
        this.length++;
        this[this.length] = value;
    },
    dequeue: function() {
        var result = this['1'];
        if (this.length > 0) {
            for (var i = 1; i <= this.length; i++) {
                this[i] = this[i + 1];
            }
            delete this[this.length];
            this.length--;
        }
        return result;
    },
    size: function() {
        return this.length;
    }
};