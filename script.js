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
    return hand;
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
    
    return winner;

  }