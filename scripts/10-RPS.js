const score=JSON.parse(localStorage.getItem('scr'))|| { wins: 0, losses: 0, ties: 0 } ;

        
updateScore();

function getCompMove(){
    let compMove;
        let num= Math.random();
    if (num>=0 && num<1/3) 
    {
        compMove='rock';      
    }
    else if(num>=1/3 && num<2/3){
        compMove='paper';
    }
    else{
        compMove='scissor';
    }
        return compMove;
    }


function playGame(userMove){
    let result;
    let compMove;
    compMove=getCompMove();
    if(userMove==='rock'){
        if(compMove==='rock'){
            result='tie';
        }
        else if(compMove==='paper'){
            result='You lose';
        }
        else{
            result='You win';
        }
    }
    else if(userMove==='paper'){
            if(compMove==='rock'){
                result='You win';
            }
            else if(compMove==='paper'){
                result='tie';
            }
            else{
                result='You lose';
            }
        
    }
    else {
        if(compMove==='rock'){
            result='You win';
        }
        else if(compMove==='paper'){
            result='You lose';
        }
        else{
            result='tie';
        }
    }
    if(result==='You win'){
        score.wins+=1;
    }
    else if(result==='You lose'){
        score.losses+=1;
    }
    else{
        score.ties+=1;
    }
    localStorage.setItem('scr' , JSON.stringify(score));   
    document.querySelector('.js-MOVE').innerHTML=`You <img src="img/${userMove}-emoji.png" class="icon">  
    <img src="img/${compMove}-emoji.png" class="icon">
    Computer ` ;
    document.querySelector('.js-res').innerHTML=`RESULT IS : ${result}`;
    updateScore();
 }   
 
 function updateScore(){
        document.querySelector('.js-Score')
        .innerHTML=` 
SCORE IS WINS: ${score.wins} , LOSSES:${score.losses} , TIES: ${score.ties}`;
    }