let music=new Audio("music.mp3");
let ting= new Audio("ting.mp3");
let gameover= new Audio("gameover.mp3");
let turn="X";
let isgameover=false;
let boxes=document.querySelectorAll(".childbox");
let info=document.querySelector(".info");
let excit=document.querySelector("#glf");
// music.play();

let changeturn=()=>{
    return turn==="X"?"0":"X";
}
let win=()=>{
    let boxtexts=document.querySelectorAll(".childtext")
    let wins=[
        [0,1,2] , [3,4,5] , [6,7,8],
        [0,3,6] , [1,4,7] , [2,5,8],
        [0,4,8], [2,4,6]
    ];
    wins.forEach(e =>{
        if(boxtexts[e[0]].innerText===boxtexts[e[1]].innerText&&boxtexts[e[1]].innerText===boxtexts[e[2]].innerText&&boxtexts[e[2]].innerText!==""){
            isgameover=true;
            if(isgameover==true){
                info.innerText=`${boxtexts[e[0]].innerText} won`;
                excit.style.width="100px";
                gameover.play();
            }
        }
    })
}



Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector(".childtext");
    element.addEventListener("click",()=>{
        if(boxtext.innerText === ""){
            boxtext.innerText = turn;
            ting.play();
            win();
            turn=changeturn();
            if(isgameover!=true){
                info.innerText=`turn for ${turn}`;
            }
            
        }
    });
});
let reset= document.querySelector("#reset");
reset.addEventListener("click",()=>{
    let box_text=document.querySelectorAll(".childtext");
    Array.from(box_text).forEach(element=>{
        element.innerText="";
        info.innerText=`turn for ${turn}`;
        isgameover=false;
        excit.style.width="0px";
    });
});