'use strict';

/* console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent  */

let random_number = Math.trunc(Math.random()*20+1);


document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    document.querySelector('.number').textContent = random_number;
    if(!guess){
        
        document.querySelector('.message').textContent = 'No Value Entered';
    }
    else if(guess==random_number){
        document.querySelector('.message').textContent = 'You have guessed right number';
    }
    else if(guess>random_number){
        document.querySelector('.message').textContent = 'The guess is too high';
    }
    else if(guess<random_number){
        document.querySelector('.message').textContent = 'The guess is too low';
    }
    
})