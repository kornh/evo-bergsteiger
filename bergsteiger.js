var util = require('./util');

var search = (xv, add, arr) => {
    var len = Object.keys(xv).length;
    for(i = 0; i < len; i++){
        var item = util.copy(xv);
        item[i] += add;
        arr.push(item);
    }
}
var neighbours = (xv, step) => {
    var array = [];
    search(xv, step, array);
    search(xv, -step, array);
    return array;
}

var bergsteiger = (sv, max, step, f) => {
    var bestEval = Infinity;
    var bestPoint = sv;
    var it = util.makeIterator(max);

    while(it.next()){
        var L = neighbours(bestPoint, step);
        var len = Object.keys(L).length;
        for(j = 0; j < len; j++){
            var item = L[j];
            var val = f(item);
            if(val < bestEval){
                bestPoint = item;
                bestEval = val;
            }
        }
    }
    return {point:bestPoint, value: bestEval, step: step};
}

module.exports = bergsteiger;