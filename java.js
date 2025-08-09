let gameseq=[];
let userseq=[];
let started = false;
let level =0;
let h2=document.querySelector("h2");
let btns=["yellow","green","blue","red"];
let button=document.querySelector(".start");

button.addEventListener("click", function(){
    if (started== false){
        console.log("game started");
        started= true;
        levelup();
    }
    
});

function levelup(){
    userseq=[];
    level++;
    h2.innerText= "level" + " "+ level;
    let randIdx=Math.floor(Math.random()*4);
    let randcolor=btns[randIdx];
    let randbtn=document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    // console.log(gameseq)
    
    btnflash(randbtn);
    
}
function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },300);
    
}


function checkseq(idx){
    // idx= level-1;
    if(gameseq[idx]===userseq[idx]){
        if(gameseq.length==userseq.length){
            setTimeout(levelup,1000)
        }
    }
    else{
        h2.innerHTML=`game over ! <b>your score was ${level}</b> <br> press restart `;
        reset();
        
    }
}
function btnflash2(btn){
    btn.classList.add("flash2");
    setTimeout(function(){
        btn.classList.remove("flash2");
    },200);
    
    
}
function reset(){
    gameseq=[];
    started=false;
    userseq=[];
    level = 0;
    button.innerText="restart"
}
function btnPress(){
    let btn= this;
    btnflash2(btn);
    userseq.push(this.getAttribute("id"));
    checkseq(userseq.length-1);
    
}
let allbtn= document.querySelectorAll(".box");
for(btn of allbtn){
    btn.addEventListener("click", btnPress);
}