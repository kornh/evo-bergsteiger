var a = 20,
    b = 0.2,
    c = 2 * Math.PI,
    dimension = 6,
    spectrum = 40,
    max = 100,
    depth = 15;


var f = require('./function')(a,b,c,dimension);
var bergsteiger = require('./bergsteiger');
var util = require('./util');


//var input = [2,2,2,2,2,2];
var input = util.rndArray(dimension, spectrum);
console.log(input);

var min = {point: input, value:Infinity, step: spectrum*2};

for(k = 1; k<=depth; k++){
    min.step *= 0.1;
    min = bergsteiger(min.point, max, min.step, f);
}
console.log(min);
