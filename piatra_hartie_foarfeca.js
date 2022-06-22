console.log("--------------------------------------------------------");
var choices = ["piatra", "hartie", "foarfeca"];
var computerChoice;
var userChoice;
var result;

function computerChoiceRandom() {
  var random1 = Math.floor(Math.random() * choices.length);
  computerChoice = choices[random1];
  console.log("Calculatorul a ales " + computerChoice);
}

function userChoiseRandom() {
  var random = Math.floor(Math.random() * choices.length);
  userChoice = choices[random];
  console.log("User-ul a ales " + userChoice);
}

function getResult() {
  if (userChoice == "piatra" && computerChoice == "hartie") {
    result = "Calculatorul castiga";
  }
  if (userChoice == "piatra" && computerChoice == "foarfeca") {
    result = "User-ul castiga";
  }
  if (userChoice == "hartie" && computerChoice == "piatra") {
    result = "User-ul castiga";
  }
  if (userChoice == "hartie" && computerChoice == "foarfeca") {
    result = "Calculatorul castiga";
  }
  if (userChoice == "foarfeca" && computerChoice == "hartie") {
    result = "User-ul castiga";
  }
  if (userChoice == "foarfeca" && computerChoice == "piatra") {
    result = "Calculatorul castiga";
  }
}

(function play() {
  userChoiseRandom();
  computerChoiceRandom();
  if (userChoice == computerChoice) {
    console.log("egalitate");
  } else {
    getResult();
    console.log(result);
  }
})();
console.log("--------------------------------------------------------");
