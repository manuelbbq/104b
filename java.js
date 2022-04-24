function myMove() {
    let id = null;
    const elem = document.querySelector("#animate");
    let posx = 0;
    let posy=0;
    let posxm = 350;
    let posym = 350;




    clearInterval(id);
    id = setInterval(frame, 5);

    function frame() {
        if (posx === 350) {
            if (posy === 350){
                if (posxm === 0){
                    if (posym === 0){
                        clearInterval(id);
                    } else{
                        posym--;
                        elem.style.top = posym +"px"
                    }

                } else{
                    posxm--;
                    elem.style.left = posxm + "px";

                }
            } else {
                posy++;
                elem.style.top = posy +"px"

            }
        } else {
            posx++;
            elem.style.left = posx + "px";
        }
    }
}
function myMove_func(xmove,ymove,callback) {
    let id = null;
    let stepx = 1;
    let stepy = 1;
    if (xmove<0){
        stepx = -1;
    }
    if (ymove<0){
        stepy = -1;
    }
    const elem = document.getElementById("animate");
    let xpos = getComputedStyle(elem).left.slice(0, -2);
    let ypos = getComputedStyle(elem).top.slice(0, -2);
    id = setInterval(lauf, 5);

    function lauf() {
        if (xmove !== 0) {
            xpos = parseInt(xpos) + stepx
            elem.style.left = xpos + "px";
            console.log(xpos+ 'xpos');
            xmove -= stepx

        }
        if (ymove !== 0) {
            ypos = parseInt(ypos) + stepy
            elem.style.top = ypos + "px";
            console.log(ypos+ 'ypos');
            ymove -= stepy
        }
        if (ymove === 0 && xmove === 0) {
            clearInterval(id)
        }
    }
    callback();
}


function runcircle(){
    myMove_func(350,0)
    myMove_func(0,350)
    myMove_func(-350,0)
    myMove_func(0,-350)
}




//
//     setInterval(lauf, 5);
//     function lauf() {
//         while (xmove !== 0) {
//             console.log(xmove, ymove)
//
//
//             console.log('tset');
//
//
//             console.log(xmove)
//             if (xmove !== 0) {
//                 console.log('run')
//                 xpos += stepx;
//                 xmove -= 1;
//                 elem.style.left = xpos + "px";
//             }
//
//
//             if (ymove != 0) {
//                 ypos += stepy;
//                 ymove--;
//                 elem.style.top = ypos + "px";
//             }
//
//
//         }
//     }
//
// }
