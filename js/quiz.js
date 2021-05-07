// QUIZ
(function () {
  var questions = [
    {
      question: `КАКОЙ ТИП ТЕПЛИЦЫ ВАМ ПОДОЙДЕТ ЛУЧШЕ?`,
      choices: [2, 5, 10, 15]
    },
    {
      question: `Пример вопроса о теплице, например, что будете выращивать?`,
      choices: [3, 6, 9, 12]
    },
    {
      question: "What is 8*9?",
      choices: [72, 99, 108, 134]
    },
    {
      question: "What is 1*7?",
      choices: [4, 5, 6, 7, 8]
    },
    {
      question: "What is 8*8?",
      choices: [20, 30, 40, 50]
    },
  ];

  var questionCounter = 0; //Tracks question number
  var selections = []; //Array containing user choices
  var quiz = $("#quiz"); //Quiz div object

  $(".quizBTN").on("click", function () {
    $(".quiz__box-text").addClass("hide");
    $(".quiz__box-btn").addClass("hide");
    $("#quizContainer").css('display', 'flex');
  });
  // Display initial question
  displayNext();

  // Click handler for the 'next' button
  $("#next").on("click", function (e) {
    e.preventDefault();

    // Suspend click listener during fade animation
    if (quiz.is(":animated")) {
      return false;
    }
    choose();

    // If no user selection, progress is stopped
    if (isNaN(selections[questionCounter])) {
      alert("Please make a selection!");
    } else {
      questionCounter++;
      displayNext();
    }
  });

  // Click handler for the 'prev' button
  $("#prev").on("click", function (e) {
    e.preventDefault();

    if (quiz.is(":animated")) {
      return false;
    }
    choose();
    questionCounter--;
    displayNext();
  });

  // Click handler for the 'Start Over' button
  $("#start").on("click", function (e) {
    e.preventDefault();

    if (quiz.is(":animated")) {
      return false;
    }
    questionCounter = 0;
    selections = [];
    displayNext();
    $("#start").hide();
  });

  // Animates buttons on hover
  $(".QuizButton").on("mouseenter", function () {
    $(this).addClass("active");
  });
  $(".QuizButton").on("mouseleave", function () {
    $(this).removeClass("active");
  });

  // Creates and returns the div that contains the questions and
  // the answer selections
  function createQuestionElement(index) {
    var qElement = $("<div>", {
      id: "question",
    });

    var header = $(
      `<h2> <span>${index + 1}</span> / ${questions.length} </h2>`
    );
    qElement.append(header);
    
    $(".quiz__box-h h2").text(questions[index].question);
    // var question = $("<p>").append(questions[index].question);
    // qElement.append(question);
    var radioButtons = createRadios(index);
    qElement.append(radioButtons);

    return qElement;
  }

  // Creates a list of the answer choices as radio inputs
  function createRadios(index) {
    var radioList = $("<ul>");
    var item;
    var input = "";
    for (var i = 0; i < questions[index].choices.length; i++) {
      item = $("<li>");
      input = '<input type="radio" name="answer" value=' + i + " />";
      input += questions[index].choices[i];
      item.append(input);
      radioList.append(item);
    }
    return radioList;
  }

  // Reads the user selection and pushes the value to an array
  function choose() {
    selections[questionCounter] = +$('input[name="answer"]:checked').val();
  }

  // Displays next requested element
  function displayNext() {
    quiz.fadeOut(function () {
      $("#question").remove();

      if (questionCounter < questions.length) {
        var nextQuestion = createQuestionElement(questionCounter);
        quiz.append(nextQuestion).fadeIn();
        if (!isNaN(selections[questionCounter])) {
          $("input[value=" + selections[questionCounter] + "]").prop(
            "checked",
            true
          );
        }

        // Controls display of 'prev' button
        if (questionCounter === 1) {
          $("#prev").css('display', 'flex');
        } else if (questionCounter === 0) {
          $("#prev").css("display", "none");
          $("#next").css("display", "flex");
        }
      } else {
        var scoreElem = displayScore();
        quiz.append(scoreElem).fadeIn();
        $("#next").hide();
        $("#prev").hide();
        $("#start").show();
      }
    });
  }
})();
