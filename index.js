
function newRoll(){
    var img1 = document.querySelectorAll('img')[0];
    var img2 = document.querySelectorAll('img')[1];

    //first die
    var rnd1 = Math.floor(Math.random()*6) + 1;
    var rndImg = "images/dice"+rnd1+".png";
    console.log(rnd1);
    img1.setAttribute("src", rndImg)

    //second die
    var rnd2 = Math.floor(Math.random()*6) + 1;
    var rndImg2 = "images/dice"+rnd2+".png";
    console.log(rnd2);
    img2.setAttribute("src", rndImg2)

    if(rnd1>rnd2){
        document.querySelector("h1").innerHTML = "Player 1 Wins!";
    }else if(rnd2>rnd1){
        document.querySelector("h1").innerHTML ="Player 2 Wins!";
    }
    else{
        document.querySelector("h1").innerHTML = "Draw!";
    }
}

newRoll()
