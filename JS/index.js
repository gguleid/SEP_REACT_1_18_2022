const age = [15, 18, 16];

// Map

Array.prototype.map = function (cb) {
    let newArr = [];

    for (let i = 0; i < this.length; i++) {
        newArr.push(cb(this[i], i, this));
    }

    return newArr;
};



// Filter

Array.prototype.filter = function (cb) {
    let newArr = [];

    for (let i = 0; i < this.length; i++) {
        if (cb(this[i])) {
            newArr.push(this[i]);
        }
    }

    return newArr;
};


// Reduce
Array.prototype.reduce = function (cb, number = 0) {
    let test = number;
    for (let i = 0; i < this.length; i++) {
        test += cb(this[i]);
    }
    return test;
};




// Some

Array.prototype.some = function (cb) {
    let score = 0;
    for (let i = 0; i < this.length; i++) {
        if (cb(i)) {
            score++;
        }
    }
    if (score != 0) {
        return true;
    } else {
        return false;
    }
};


// Every
Array.prototype.myEvery = function (cb) {
    let score = 0;
    for (let i = 0; i < this.length; i++) {
        if (!cb(i)) {
            score++;
        }
    }
    if (score != 0) {
        return false;
    } else {
        return true;
    }
};
