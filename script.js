function getComputerChoice () {
    // Returns a random integer from 0 to 2:
    let number = Math.floor(Math.random() * 3);
    let computerSelection = '';
    if (number == 0)  {        
        computerSelection = 'rock';            
        } else if (number == 1)  {                          
        computerSelection = 'paper';         
        } else {   
        computerSelection = "scissors";     
    }
    return computerSelection;
  }


function playRound(playerSelection, computerSelection) {

    let playerSelection_lower = playerSelection.toLowerCase(); 
    let winner = '';

    if (computerSelection == 'rock' && playerSelection_lower == 'paper') {
        winner = 'You win! Paper beats Rock!';
    }   else if (computerSelection == 'rock' && playerSelection_lower == 'scissors') {
        winner = 'You lose! Rock beats Scissors';
    }   else if (computerSelection == 'rock' && playerSelection_lower == 'rock') {
        winner = 'Tie!';
    }   else if (computerSelection == 'paper' && playerSelection_lower == 'paper') {
        winner = 'Tie!';
    }   else if (computerSelection == 'paper' && playerSelection_lower == 'scissors') {
        winner ='You win! Scissors beats Paper!';
    }   else if (computerSelection == 'paper' && playerSelection_lower == 'rock') {
        winner ='You lose! Paper beats Rock!';
    }   else if (computerSelection == 'scissors' && playerSelection_lower == 'paper') {
        winner ='You lose! Scissors beats Paper!';
    }   else if (computerSelection == 'scissors' && playerSelection_lower == 'scissors') {
        winner = 'Tie!';
    }   else  {
        winner ='You win! Rock beats Scissors!';
    }
    console.log(winner);
    return winner;

  }

  function game () {

    const buttons = document.querySelectorAll('button');
    const container = document.querySelector('.container');
    const h3 = document.createElement('h3');
    h3.style.color = 'blue';  
    h3.textContent = "Choose Rock, Paper or Scissors";
    const scores = document.createElement('h1');

    container.appendChild(h3);

 
      buttons.forEach((button) => {

        // and for each one we add a 'click' listener
        button.addEventListener('click', (e) => {
            console.log(button.id);
            let playerSelection= button.id;
            let computerSelection = getComputerChoice ();
            let winner = playRound(playerSelection, computerSelection);
            h3.textContent = winner;
            
        });
      });

     
    
  }

  game();

 



