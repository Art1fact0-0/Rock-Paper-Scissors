function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors']
  const randomIndex = Math.floor(Math.random() * choices.length)
  return choices[randomIndex]
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase() // Make the input case-insensitive

  if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    return `You Win! ${playerSelection} beats ${computerSelection}`
  } else if (playerSelection === computerSelection) {
    return "It's a Tie! Replay the round."
  } else {
    return `You Lose! ${computerSelection} beats ${playerSelection}`
  }
}

function game() {
  let playerScore = 0
  let computerScore = 0

  while (playerScore < 5 && computerScore < 5) {
    const playerSelection = prompt(
      'Enter your choice: rock, paper, or scissors'
    )
    const computerSelection = getComputerChoice()
    const result = playRound(playerSelection, computerSelection)

    console.log(result)

    // Update scores
    if (result.includes('Win')) {
      playerScore++
    } else if (result.includes('Lose')) {
      computerScore++
    }
  }

  // Determine the overall winner
  if (playerScore >= 5) {
    console.log('You win the game!')
  } else {
    console.log('Computer wins the game!')
  }
}

game()
