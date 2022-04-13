function add(a,b){
    let sum = a+b;
    return sum;
}

function mult(a,b){
    let mult = a*b;
    return mult;
}

function subt(a,b){
    let subt = a-b;
    return subt;
}

function div(a,b){
    let div = a/b;
    div = div.toPrecision(3);
    return div;
}

export {add,mult,subt,div};