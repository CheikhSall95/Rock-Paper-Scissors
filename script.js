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
    
    return winner;

  }

  function game () {

    let computer = 0;
    let player = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('What do you choose?');
        let computerSelection = getComputerChoice();

        winner = playRound(playerSelection, computerSelection)
        console.log(winner)
        if (winner.charAt(4) == 'w') {
            player ++ ;
        }   else if (winner.charAt(4) == 'l') {
            computer ++;
        }

     }
    
    if (player > computer )  {
        console.log('You win!')
    }   else if (player < computer) {
        console.log('You lose!')
    }   else {
        console.log('It is a tie!')
    }

  }

  game();