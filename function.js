var a, b, c, d;

var sum = (xv, modify) => {
    var summe = 0;
    for(i = 0; i < d; i++){
        var item = xv[i];
        summe += modify(item);
    }
    return summe;
}

var geom = (xv) => Math.sqrt( (1/d) * sum(xv, (item) => Math.pow(item,2) ) );

var f = (xv) => {
    var inner_1 =  -b * geom(xv);
    var inner_2 = (1/d) * sum(xv, (item) => Math.cos(c * item) );

    return -a * Math.exp( inner_1 ) - Math.exp( inner_2 ) + a + Math.exp(1);
}

module.exports = (pa, pb, pc, pd) => {
    a = pa,
    b = pb,
    c = pc,
    d = pd;
    return f;
};