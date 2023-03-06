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
    let computer = 0;
    let player = 0;
    
 
      buttons.forEach((button) => {

        // and for each one we add a 'click' listener
        button.addEventListener('click', (e) => {
            let playerSelection= button.id;
            let computerSelection = getComputerChoice ();
            let winner = playRound(playerSelection, computerSelection);

            if (winner.charAt(4) == 'w') {
                player ++ ;
            }   else if (winner.charAt(4) == 'l') {
                computer ++;
            }
            const result = document.querySelector('.result');
            result.textContent = winner;
            const playersScore = document.querySelector('#player');
            const computerScore = document.querySelector('#computer');
            playersScore.textContent = `Player score : ${player}`;
            computerScore.textContent = `Computer score : ${computer}`;
            if (player == 5 || computer == 5){
                if (player == 5){
                    result.textContent = "Game Over! You Win!";
                }
                else{
                    result.textContent = "Game Over! You Lose!"
                }
                player = 0;
                computer = 0;
            }
            console.log(player)
        });
      });

     
    
  }

  game();

 



