function addiere(a,b,c){
    if (typeof a == 'string'){
        a= parseInt(a);
    }if (typeof b == 'string'){
        b= parseInt(b);
    }if (c== undefined){
        return a+b
    } else if (typeof c == "string"){
        c= parseInt(c);
    }
    return a+b+c
}
console.log(addiere(30,2,9))