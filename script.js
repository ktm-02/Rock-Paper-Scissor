let player=confirm("Let's Play The Rock Paper Scissor Game (YES) OR (NO)?")
if (player){
    let playerchoice=prompt("Welcome The Game!\tPlease Enter the word is Rock?,Paper?,Scissor?")
    if(playerchoice){
        let playerone=playerchoice.trim().toLowerCase()
        if(
            playerone==="rock"||
            playerone==="paper"||
            playerone==="scissor"
        ){
    let computerchoice=Math.floor(Math.random()*3+1)
    let computer=computerchoice===1 ? "rock":computerchoice===2 ? "paper" : "scissor"
    
    let result=playerone===computer ? "Game TIE" : 
    playerone==="rock" && computer==="paper" ? "Compuer Wins!!!" :
    playerone==="paper" && computer==="scissor" ? "Computer Wins!!!":
    playerone==="scissor" && computer==="rock" ? "Computer Wins!!!":
    "You Are The Winnner!!!"
    alert(result)
    let playagain=confirm("Play Again?")
    playagain ? location.reload():alert("ok,Thanks for Playing!")
    }else{
        alert("You didn't Enter the Rock,Paper,Scissor")
    }
}else{
    alert("I guess You change the mind \t Maybe Next Time")
}
}else{
    alert("ok , Maybe Next Time")
}
