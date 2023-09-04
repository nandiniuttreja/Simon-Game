let gameSeq=[];
let userSeq=[];

let btns=["yellow","red","purple","green"];

let started=false;
let level=0;


let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){ //KEY TRACK KRNE K LIYE
    if(started==false){
        console.log("game is started");  //jisse game baar baar start na ho
        started=true;
        //step1 complete hogaya

        levelUp();
    }
    
});

//step2 btnflash+level 1
//koi bhi random button press hoga and ek level up hum chle jaenge

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function (){
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function (){
        btn.classList.remove("userflash");
    }, 250);
}

function levelUp() {

    userSeq=[];

    level++; //level ko flash krana h , color change krna h , value update krni h
    h2.innerText= `Level ${level}`;

    //randon btn choose
    let randIdx=Math.floor(Math.random() * 3);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
   

    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);

    gameSeq.push(randColor);
    console.log(gameSeq);

    gameFlash(randBtn);

}

function checkAns(idx){
    //console.log("current level : ", level);

   

    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    } else{
        h2.innerHTML=`Game Over! Your score was <b>${level}</b> <br>Press any key to start`;

        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);

        reset();
    }
}

function btnPress(){
    //console.log(this);
    let btn=this;// this wohe button hoga jisko humne press kiya ha
    userFlash(btn);

    userColor=btn.getAttribute("id");
    userSeq.push(userColor);   //id ko isliye create kr rhe hai jisse har button se uska color nikal paye

    checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener("click",btnPress);
}


// agr color last vala index hai toh seedhalevel up , aur ek naya color generate krega 
//agr middle mei h toh kuch nhi krna bs uske liye next button press hine ka wait krna hai aur fir ans ko aise check krna h jaisa abhi kr rhe hai


function reset(){
    started = false;
    gameSeq=[];
    userSeq=[];
    level=0;
}