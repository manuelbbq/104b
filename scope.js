const zahlen_arr = [-2,3,-6,-8,-33];

function be_positiv(arr) {
    for (const x in arr) {
        if (arr[x]<0){
            arr[x]= arr[x]*-1;
        }
    }
    return arr
}
console.log(be_positiv(zahlen_arr));


