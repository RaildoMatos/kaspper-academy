var randomNumber = Math.floor(Math.random() * 100) + 1;
var guessCount = 0;
var guessLimit = 10;

function checkGuess() {
  var guess = document.getElementById("guess").value;
  guessCount++;

  if (guess == randomNumber) {
    document.getElementById("message").innerHTML =
      "Parabéns, você acertou em " + guessCount + " tentativas!";
  } else if (guessCount == guessLimit) {
    document.getElementById("message").innerHTML =
      "Acabaram suas tentativas! O número era " + randomNumber + ".";
  } else if (guess < randomNumber) {
    document.getElementById("message").innerHTML =
      "O número que estou pensando é maior que " + guess + ". Tente novamente.";
  } else if (guess > randomNumber) {
    document.getElementById("message").innerHTML =
      "O número que estou pensando é menor que " + guess + ". Tente novamente.";
  }

  document.getElementById("guess").value = "";
}
