const number = Math.floor(Math.random() * 100) + 1;
document.getElementById('checkButton').addEventListener('click', checkGuess);

function checkGuess() {
  const guessField = document.getElementById('guessField');
  const guessResult = document.getElementById('guessResult');
  
  const userGuess = parseInt(guessField.value);

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    guessResult.textContent = 'Будь ласка, введіть число від 1 до 100.';
  } else {
    if (userGuess > number) {
      guessResult.textContent = `${userGuess} є більшим за задане число`;
    } else if (userGuess < number) {
      guessResult.textContent = `${userGuess} є меншим за задане число`;
    } else {
      guessResult.textContent = 'Ви вгадали число!';
    }
    // if (userGuess === number) {
    //   guessResult.textContent = 'Ви вгадали число!';
    // } else {
    //   guessResult.textContent = `На жаль, правильне число - ${number}. Спробуйте ще раз`;
    // }
  }
}