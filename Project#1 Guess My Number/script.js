'use strict';



let random_number = Math.trunc(Math.random()*20+1);
let score = 20;
let highscore = 0;

const message = function(message){
    document.querySelector('.message').textContent = message;
}
document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    if(!guess){
        message('No Value Entered');
    }
    else if(guess!==random_number){
        if(score>1){
            score--;
            document.querySelector('.score').textContent = score;
            message(guess>random_number ? ' 📈Too High' : '📉Too Low');
        }
        else{
        document.querySelector('.score').textContent = 0;   
        } 
        }
    else if(guess==random_number){
        
        message('You have guessed the right number');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '25rem';
        if(score>highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
    
        }
        else if(score<highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
            
        }
        
    }
    
})

document.querySelector('.again').addEventListener('click', function(){
    let score = 20;
    random_number = Math.trunc(Math.random()*20)+1;
    message('Start guessing...')
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#333';
    document.querySelector('.number').style.width = '15rem'; 

})