let userScore = 0;
let compScore = 0;
let msg = document.querySelector("#msg");
const choices =document.querySelectorAll(".choic");
const userparachoice = document.querySelector("#user-score");
const compparachoice = document.querySelector("#comp-score");


const getCompScore = () =>{
    const option = ["rock","paper","scissors"];
    const idx = Math.floor(Math.random()*3)
    return option[idx];
};
const drawgame = ()=>{
    console.log("match drawen ");
    msg.innerText = "draw game "
    msg.style.backgroundColor = "#081b31"
};

const showwinner = (userwin)=>{
    if(userwin){
        userScore++;
        userparachoice.innerText = userScore;
        console.log("user win ");
        msg.innerText = "You win ";
        msg.style.backgroundColor = "green";
    } else{
        compScore++;
        compparachoice.innerText = compScore;
        console.log("computer win")
        msg.innerText = "computer win ";
        msg.style.backgroundColor = "red";
    }

};

const playgame =(userchoice) =>{
    const compchoice = getCompScore();
    console.log(userchoice);
    console.log(compchoice);
    if(userchoice === compchoice){
        drawgame();
    }
    else {
        let userwin = true;
        if(userchoice === "rock"){
            userwin = compchoice === "paper"?false:true;
        }
        else if(userchoice === "paper"){
            userwin = compchoice ==="scissors"? false:true;
        }
        else{
            userwin = compchoice ==="rock"? false:true;
        }
        showwinner(userwin);
    }

};

choices.forEach((choice) =>{
    choice.addEventListener("click", () =>{
        console.log("choice clicked ")
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});