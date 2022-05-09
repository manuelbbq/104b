const bubble= [3,4,2,1]
let ein = bubble.length-1;
for (let i = 0; i < bubble.length; i++) {
    for (let x = 0; x < ein; x++) {

        if (bubble[x] > bubble[x + 1]) {
            [bubble[x], bubble[x + 1]] = [bubble[x + 1], bubble[x]]
        }

    }ein --
}
console.log(bubble)