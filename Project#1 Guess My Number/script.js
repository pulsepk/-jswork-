'use strict';

/* console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent  */

let random_number = Math.trunc(Math.random()*20+1);
let score = 20;

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    //document.querySelector('.number').textContent = random_number;
    if(!guess){
        
        document.querySelector('.message').textContent = 'No Value Entered';
    }
    else if(guess==random_number){
        document.querySelector('.message').textContent = 'You have guessed right number';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '25rem';
    }
    else if(guess>random_number){
        document.querySelector('.message').textContent = 'The guess is too high';
        
        if(score>1){
        score--;
        document.querySelector('.score').textContent = score;
        }
        else{
        document.querySelector('.score').textContent = 0;   
        }
        
    }
    else if(guess<random_number){
        document.querySelector('.message').textContent = 'The guess is too low';
        
        if(score>1){
        score--;
        document.querySelector('.score').textContent = score;
        }
        else{
        document.querySelector('.score').textContent = 0;   
        }
    }
    
})

document.querySelector('.again').addEventListener('click', function(){
    let score = 20;
    random_number = Math.trunc(Math.random()*20)+1;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#333';
    document.querySelector('.number').style.width = '15rem'; 

})