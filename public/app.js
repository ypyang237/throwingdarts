function scoreThrows(scoreboard) {

  var score = 0;
  var totalScore = 0;
  // var scoreboard = [];
  var bullseye = 0;

  // for (var i = 0; i < throws; i++) {

  //   scoreboard.push(Math.floor(Math.random() * 20)+ 1);
  //   console.log('scoreboard', scoreboard);
  // }

  for(var k = 0; k < scoreboard.length; k++) {
    console.log('throws ', scoreboard[k]);
    if(scoreboard[k] > 10){
      score += 0;
    }
    else if(scoreboard[k] >= 5 & scoreboard[k] <= 10) {
      score += 5;
    }
    else if(scoreboard[k] < 5) {
      score = score + 10;
      bullseye += 1;
    }

    // console.log('my scores: ',score);
    // console.log('number of bullseye', bullseye);

    if(bullseye === scoreboard.length) {
      totalScore = score + 100;
    } else {
      totalScore = score;
    }

    // console.log('TotalScore: ',totalScore);
  }
  return totalScore;


}

// console.log(scoreThrows(3));

module.exports = scoreThrows;