var rndArray = (size, maxVal) => {
    var array = [];
    for(i = 0; i < size; i++){
        var val = Math.random() * (maxVal*2) - maxVal;
        array.push(val);
    }
    return array;
}
var copy = (xv) => {
    var val = JSON.parse(JSON.stringify(xv))
    return val;
}
var makeIterator = (max) => {
    var nextIndex = 0;
    return {
       next: () => {
           var val = nextIndex < max;
           nextIndex++;
           return val;
       },
       getIt: () => {
           return nextIndex;
       }
    };
}

module.exports = { rndArray: rndArray, copy:copy, makeIterator: makeIterator}