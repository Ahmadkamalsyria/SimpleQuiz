(function() {
  function Questions(question, choices, correctAnswer) {
    this.question = question;
    this.choices = choices;
    this.correctAnswer = correctAnswer;
  }
  Questions.prototype.displayQuestion = function() {
    console.log(this.question);
    for (var i = 0; i < this.choices.length; i++) {
      console.log(i + " " + this.choices[i]);
    }
  };
  Questions.prototype.checkAnswer = function(answer, callBack) {
    var sc;
    if (this.correctAnswer === answer) {
      console.log("correct!!");
      sc = callBack(true);
    } else {
      console.log("wrong answer, try again");
      sc = callBack(false);
    }
    this.showScore(sc);
  };
  Questions.prototype.showScore = function(score) {
    console.log("your score is: " + score);
    console.log("--------------");
  };
  var q1 = new Questions(
    "is JavaScript the most powerful language in the world?",
    ["Yes", "No"],
    0
  );
  var q2 = new Questions("Do you like JavaScript?", ["Yes", "No"], 0);
  var q3 = new Questions(
    "What does best describe coding",
    ["Useless", "boring", "Powerful"],
    2
  );
  var questionsArray = [q1, q2, q3];
  function calculateScore() {
    var score = 0;
    return function(answer) {
      if (answer) score++;
      return score;
    };
  }
  var getScore = calculateScore();
  function newQuestion() {
    randonQuestion = Math.floor(Math.random() * questionsArray.length);
    console.log(randonQuestion);
    questionsArray[randonQuestion].displayQuestion();
    var prom = prompt(
      "please enter the correct answer... \n enter exit to stop"
    );
    if (prom !== "exit") {
      questionsArray[randonQuestion].checkAnswer(parseInt(prom), getScore);
      newQuestion();
    }
  }
  newQuestion();
})();
