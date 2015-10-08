var Queue = function() {
    var someInstance = {};

    var length = 0;

    // Use an object with numeric keys to store values
    var storage = {};

    // Implement the methods below

    someInstance.enqueue = function(value) {
        length++;
        storage[length] = value;
    };

    someInstance.dequeue = function() {
        var result;
        if (length > 0) {
            result = storage['1'];
            for (var i = 1; i <= Object.keys(storage).length; i++) {
                storage[i] = storage[i + 1];
            }
            delete storage[length];
            length--;
        }
        return result;
    };

    someInstance.size = function() {
        return length;
    };

    return someInstance;
};