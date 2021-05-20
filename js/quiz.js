// QUIZ
(function () {
  let questions = [
    {
      question: `КАКОЙ ТИП ТЕПЛИЦЫ ВАМ ПОДОЙДЕТ ЛУЧШЕ?`,
      choices: [
        "Ответ первый длинный",
        "Ответ второй",
        "Ответ короткий",
        "Ответ",
      ],
    },
    {
      question: `Пример вопроса о теплице, например, что будете выращивать?`,
      choices: [
        "Ответ первый длинный",
        "Ответ второй",
        "Ответ короткий",
        "Ответ",
      ],
    },
    {
      question: "Вопрос",
      choices: [
        "Ответ первый длинный",
        "Ответ второй",
        "Ответ короткий",
        "Ответ",
      ],
    },
    {
      question: "Вопрос",
      choices: [
        "Ответ первый длинный",
        "Ответ второй",
        "Ответ короткий",
        "Ответ",
      ],
    },
    {
      question: "Вопрос",
      choices: [
        "Ответ первый длинный",
        "Ответ второй",
        "Ответ короткий",
        "Ответ",
      ],
    },
    {
      question: "Конец",
      choices: [],
    },
  ];

  let questionCounter = 0; //Tracks question number
  let selections = []; //Array containing user choices
  let quiz = $("#quiz"); //Quiz div object

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
      alert("Выберете значение");
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
    let qElement = $("<div>", {
      id: "question",
    });

    document.querySelector(".quiz__counter").innerHTML = `<span class="primary">${index + 1}</span>/${
      questions.length
    }`;

    
    $(".quiz__box-h h2").text(questions[index].question);
    let radioButtons = createRadios(index);
    qElement.append(radioButtons);

    return qElement;
  }

  // Creates a list of the answer choices as radio inputs
  function createRadios(index) {
    let radioList = $("<ul>");
    let item;
    let input = "";
    for (let i = 0; i < questions[index].choices.length; i++) {
      item = $("<li>");
      input = `<input type="radio" name="answer" id="input__radio${i}" value="${i}"/>`;
      input += `<label for="input__radio${i}">${questions[index].choices[i]}</label>`;
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
        let nextQuestion = createQuestionElement(questionCounter);
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
        let scoreElem = displayScore();
        quiz.append(scoreElem).fadeIn();
        $("#next").hide();
        $("#prev").hide();
        $("#start").show();
      }
    });
  }
})();
