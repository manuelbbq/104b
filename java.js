function myMove() {
    let id = null;
    const elem = document.querySelector("#animate");
    let posx = 0;
    let posy=0;
    let posxm = 350;
    let posym = 350;
    let counter = 1




    clearInterval(id);
    id = setInterval(frame, 5);

    function frame() {
        if (posx === 350) {
            if (posy === 350){
                if (posxm === 0){
                    if (posym === 0){
                        // clearInterval(id);
                        posx= 0;
                        posy = 0;
                        posxm = 350;
                        posym = 350;
                        counter ++;
                        document.getElementById("counter").innerHTML = 'Round '+counter ;

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
function myMove_func(xmove,ymove) {
    let id = null;
    let stepx = 1;
    let stepy = 1;
    let wait
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
            // console.log(xpos+ 'xpos');
            xmove -= stepx

        }
        if (ymove !== 0) {
            ypos = parseInt(ypos) + stepy
            elem.style.top = ypos + "px";
            // console.log(ypos+ 'ypos');
            ymove -= stepy
        }
        if (ymove === 0 && xmove === 0) {
            clearInterval(id)
        }
    }
    return
}
function test(){
    let x = myMove();
}
async function async_func(){
    await myMove_func(350,0);
     myMove_func(0,350);

}



function runcircle(){
    myMove_func(350,0, move_2)
    function move_2(){
        myMove_func(0,350,move_3);
    }
    function move_3(){
        myMove_func(-350,0,move_4)
    }
    function move_4(){
        myMove_func(0,-350,end)
    }
    function end(){
        return console.log('ende')
    }
}
function staubsauger(){
    let id = null;
    const elem = document.getElementById("animate");
    let xpos = getComputedStyle(elem).left.slice(0, -2);
    let ypos = getComputedStyle(elem).top.slice(0, -2);
    let movey = 0;
    let xmove = 300;
    let richtung = 1;
    const flache = document.getElementById("container")
    let tiefe = getComputedStyle(flache).height.slice(0, -2);
    let breite = getComputedStyle(flache).width.slice(0, -2);
    console.log(tiefe,breite);
    id=setInterval(go_0,5)
    function go_0(){
        if(xpos == 0 && ypos == 0){
        clearInterval(id)
            call()
        } else{
            if (xpos != 0) {
                xpos--;
                elem.style.left = xpos + 'px';
            }
            if(ypos !=0){
                ypos--;
                elem.style.top = ypos + 'px';
            }
        }

    }

    console.log('staub')
    function call() {
        id = setInterval(lauf, 5);

        function lauf() {

            if (movey == 350) {
                if (xpos == 350 - xmove) {
                    movey = 0;
                    xmove -= 50
                    richtung *= -1

                    //
                } else {
                    xpos++;
                    elem.style.left = xpos + 'px';
                }


            } else {

                movey++;
                ypos = parseInt(ypos) + richtung
                elem.style.top = ypos + 'px';
                if (xmove == -50 && ypos == 0) {
                    clearInterval(id)
                }
            }
        }
    }
}

function staubsaugerx(){
    let id = null;
    const elem = document.getElementById("animate");
    let xpos = getComputedStyle(elem).left.slice(0, -2);
    let ypos = getComputedStyle(elem).top.slice(0, -2);

    let xmove = 0;
    let richtung = 1;
    const flache = document.getElementById("container")
    let tiefe = getComputedStyle(flache).height.slice(0, -2) -50;
    let breite = getComputedStyle(flache).width.slice(0, -2) -50;
    let movey = tiefe - 50;
    console.log(tiefe,breite);

        id = setInterval(lauf, 5);

        function lauf() {

            if (xmove == breite) {
                if (ypos == tiefe - movey) {
                    xmove = 0;
                    movey -= 50
                    richtung *= -1

                    //
                } else {
                    ypos++;
                    elem.style.top = ypos + 'px';
                }


            } else {

                xmove ++;
                xpos = parseInt(xpos) + richtung
                elem.style.left = xpos + 'px';
                if (movey == -50 && xpos == 0) {
                    clearInterval(id)
                }
            }
        }

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
