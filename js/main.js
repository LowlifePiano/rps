$(document).ready( function() {

  var result;

  $ (".rock").on('click', function () {
    result = compare('rock', aI())
    $(".result").html(result);
  })

  $ (".paper").on('click', function () {
    result = compare('paper', aI())
    $(".result").html(result);
  })

  $ (".scissors").on('click', function () {
    result = compare('scissors', aI())
    $(".result").html(result);
  })

  function aI() {
    var computerPick;
    computerPick = Math.random();
      if (computerPick<=.333) {
      computerPick = "rock"
      return computerPick
    }
      else if(computerPick<=.667) {
      computerPick = "paper"
      return computerPick

    } else { computerPick = "scissors"
      return computerPick
    }
  }

  function compare(user, computerPick) {
    switch (user) {
      case "rock":
        if(computerPick === "paper") {
          return "you lose"}
        else if(computerPick === "scissors"){
          return "you win"
        }else{
          return "tie"
        }
      break;

      case "paper":
      if(computerPick === "paper") {
        return "tie"}
      else if(computerPick === "scissors"){
        return "you lose"
      }else{
        return "you win"
      }
      break;

      case "scissors":
      if(computerPick === "paper") {
        return "you win"}
      else if(computerPick === "scissors"){
        return "tie"
      }else{
        return "you lose"}
      break
    }

  }
});
