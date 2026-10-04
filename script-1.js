/* =========================================
   NUMBER HUNT
   Classes 1 - 5
   50 Questions × 3 Levels
========================================= */


/* =========================================
   VARIABLES
========================================= */

let selectedClass = 1;
let currentLevel = "easy";

let currentQuestions = [];
let currentQuestion = 0;

let score = 0;
let streak = 0;

let answeredCurrent = false;


/* =========================================
   QUESTION HELPER
========================================= */

function makeQuestion(question, answer, steps, topic) {

  return {
    question: question,
    answer: answer,
    steps: steps,
    topic: topic
  };

}


/* =========================================
   SHUFFLE
========================================= */

function shuffle(array) {

  const newArray = [...array];

  for (let i = newArray.length - 1; i > 0; i--) {

    const j = Math.floor(Math.random() * (i + 1));

    [newArray[i], newArray[j]] =
      [newArray[j], newArray[i]];

  }

  return newArray;
}


/* =========================================
   CLASS SELECTION
========================================= */

function selectClass(classNumber) {

  selectedClass = classNumber;

  document.getElementById("selectedClassText").textContent =
    classNumber;

  const cards = document.querySelectorAll(".class-card");

  cards.forEach(card => {
    card.classList.remove("active");
  });

  const selectedCard =
    document.querySelector(`.class${classNumber}`);

  if (selectedCard) {
    selectedCard.classList.add("active");
  }

  loadTheory(classNumber);

  document.getElementById("theory").scrollIntoView({
    behavior: "smooth"
  });

}


/* =========================================
   QUESTION BANK
========================================= */

function generateQuestions(classNo, level) {

  let questions = [];

  /* =====================================
     CLASS 1
  ===================================== */

  if (classNo === 1) {

    if (level === "easy") {

      for (let i = 0; i < 50; i++) {

        const a = 5 + i;
        const b = (i % 10) + 1;

        if (i % 2 === 0) {

          questions.push(
            makeQuestion(
              `${a} + ${b} = ?`,
              a + b,
              [
                `${a} + ${b}`,
                `Count ${b} numbers forward from ${a}.`,
                `Answer = ${a + b}`
              ],
              "Addition"
            )
          );

        } else {

          const bigger = a + b;

          questions.push(
            makeQuestion(
              `${bigger} − ${b} = ?`,
              a,
              [
                `${bigger} − ${b}`,
                `Take ${b} away from ${bigger}.`,
                `Answer = ${a}`
              ],
              "Subtraction"
            )
          );

        }

      }

    }


    if (level === "medium") {

      for (let i = 0; i < 50; i++) {

        const a = 20 + i;
        const b = 10 + (i % 15);

        if (i % 3 === 0) {

          questions.push(
            makeQuestion(
              `${a} + ${b} = ?`,
              a + b,
              [
                `Add the ones.`,
                `Add the tens.`,
                `${a} + ${b} = ${a + b}`
              ],
              "Addition"
            )
          );

        } else if (i % 3 === 1) {

          const total = a + b;

          questions.push(
            makeQuestion(
              `${total} − ${b} = ?`,
              a,
              [
                `${total} − ${b}`,
                `Subtract ${b}.`,
                `Answer = ${a}`
              ],
              "Subtraction"
            )
          );

        } else {

          const x = (i % 5) + 2;
          const y = ((i * 3) % 5) + 2;

          questions.push(
            makeQuestion(
              `${x} × ${y} = ?`,
              x * y,
              [
                `${x} groups of ${y}`,
                `${x} × ${y}`,
                `Answer = ${x * y}`
              ],
              "Multiplication"
            )
          );

        }

      }

    }


    if (level === "hard") {

      for (let i = 0; i < 50; i++) {

        const a = 30 + i;
        const b = 10 + (i % 10);
        const c = 5 + (i % 5);

        questions.push(
          makeQuestion(
            `${a} + ${b} − ${c} = ?`,
            a + b - c,
            [
              `First add: ${a} + ${b} = ${a + b}`,
              `Then subtract: ${a + b} − ${c}`,
              `Answer = ${a + b - c}`
            ],
            "Mixed Operations"
          )
        );

      }

    }

  }


  /* =====================================
     CLASS 2
  ===================================== */

  if (classNo === 2) {

    if (level === "easy") {

      for (let i = 0; i < 50; i++) {

        const a = 20 + i;
        const b = 10 + (i % 20);

        questions.push(
          makeQuestion(
            `${a} + ${b} = ?`,
            a + b,
            [
              `Add ${a} and ${b}.`,
              `${a} + ${b} = ${a + b}`,
              `Answer = ${a + b}`
            ],
            "Addition"
          )
        );

      }

    }


    if (level === "medium") {

      for (let i = 0; i < 50; i++) {

        const a = 100 + i * 5;
        const b = 25 + (i % 20);

        if (i % 2 === 0) {

          questions.push(
            makeQuestion(
              `${a} + ${b} = ?`,
              a + b,
              [
                `Add ones.`,
                `Add tens and hundreds.`,
                `Answer = ${a + b}`
              ],
              "Addition"
            )
          );

        } else {

          const total = a + b;

          questions.push(
            makeQuestion(
              `${total} − ${a} = ?`,
              b,
              [
                `${total} − ${a}`,
                `Subtract ${a}.`,
                `Answer = ${b}`
              ],
              "Subtraction"
            )
          );

        }

      }

    }


    if (level === "hard") {

      for (let i = 0; i < 50; i++) {

        const a = 100 + i * 4;
        const b = 20 + (i % 15);
        const c = 5 + (i % 10);

        questions.push(
          makeQuestion(
            `A shop has ${a} pencils. It gets ${b} more and sells ${c}. How many are left?`,
            a + b - c,
            [
              `First add the new pencils: ${a} + ${b} = ${a + b}`,
              `Then subtract the sold pencils: ${a + b} − ${c}`,
              `Answer = ${a + b - c}`
            ],
            "Word Problem"
          )
        );

      }

    }

  }


  /* =====================================
     CLASS 3
  ===================================== */

  if (classNo === 3) {

    if (level === "easy") {

      for (let i = 0; i < 50; i++) {

        const a = 100 + i * 3;
        const b = 20 + (i % 20);

        questions.push(
          makeQuestion(
            `${a} + ${b} = ?`,
            a + b,
            [
              `Add the hundreds, tens and ones.`,
              `${a} + ${b} = ${a + b}`,
              `Answer = ${a + b}`
            ],
            "Addition"
          )
        );

      }

    }


    if (level === "medium") {

      for (let i = 0; i < 50; i++) {

        const a = (i % 12) + 2;
        const b = (i % 9) + 2;

        questions.push(
          makeQuestion(
            `${a} × ${b} = ?`,
            a * b,
            [
              `${a} × ${b}`,
              `Use the multiplication table of ${a}.`,
              `Answer = ${a * b}`
            ],
            "Multiplication"
          )
        );

      }

    }


    if (level === "hard") {

      for (let i = 0; i < 50; i++) {

        const groups = 3 + (i % 8);
        const each = 4 + (i % 7);

        const total = groups * each;

        questions.push(
          makeQuestion(
            `There are ${groups} boxes with ${each} pencils in each box. How many pencils are there altogether?`,
            total,
            [
              `Number of boxes = ${groups}`,
              `Pencils in each box = ${each}`,
              `${groups} × ${each} = ${total}`,
              `Answer = ${total} pencils`
            ],
            "Word Problem"
          )
        );

      }

    }

  }


  /* =====================================
     CLASS 4
  ===================================== */

  if (classNo === 4) {

    if (level === "easy") {

      for (let i = 0; i < 50; i++) {

        const a = 1000 + i * 20;
        const b = 100 + (i % 50);

        questions.push(
          makeQuestion(
            `${a} + ${b} = ?`,
            a + b,
            [
              `Add the place values.`,
              `${a} + ${b} = ${a + b}`,
              `Answer = ${a + b}`
            ],
            "Large Numbers"
          )
        );

      }

    }


    if (level === "medium") {

      for (let i = 0; i < 50; i++) {

        const a = 1 + (i % 9);
        const b = 1 + (i % 8);

        const answer =
          Number((a + b / 10).toFixed(1));

        questions.push(
          makeQuestion(
            `${a} + ${b / 10} = ?`,
            answer,
            [
              `${a} + ${b / 10}`,
              `Add the whole number and decimal.`,
              `Answer = ${answer}`
            ],
            "Decimals"
          )
        );

      }

    }


    if (level === "hard") {

      for (let i = 0; i < 50; i++) {

        const length = 10 + (i % 15);
        const width = 5 + (i % 10);

        const area = length * width;

        questions.push(
          makeQuestion(
            `A rectangle has length ${length} cm and width ${width} cm. Find its area.`,
            area,
            [
              `Area = length × width`,
              `Area = ${length} × ${width}`,
              `Area = ${area} cm²`
            ],
            "Geometry"
          )
        );

      }

    }

  }


  /* =====================================
     CLASS 5
  ===================================== */

  if (classNo === 5) {

    if (level === "easy") {

      for (let i = 0; i < 50; i++) {

        const a = 10 + (i % 10);
        const b = 2 + (i % 8);

        const answer =
          Number((a + b / 10).toFixed(1));

        questions.push(
          makeQuestion(
            `${a} + ${b / 10} = ?`,
            answer,
            [
              `Write the numbers with decimal points aligned.`,
              `${a} + ${b / 10} = ${answer}`,
              `Answer = ${answer}`
            ],
            "Decimals"
          )
        );

      }

    }


    if (level === "medium") {

      for (let i = 0; i < 50; i++) {

        const number = 100 + i * 10;
        const percent = 10 + (i % 9) * 5;

        const answer =
          number * percent / 100;

        questions.push(
          makeQuestion(
            `Find ${percent}% of ${number}.`,
            answer,
            [
              `${percent}% = ${percent}/100`,
              `${percent}/100 × ${number}`,
              `Answer = ${answer}`
            ],
            "Percentage"
          )
        );

      }

    }


    if (level === "hard") {

      for (let i = 0; i < 50; i++) {

        const price = 100 + i * 20;
        const discount = 5 + (i % 6) * 5;

        const discountAmount =
          price * discount / 100;

        const finalPrice =
          price - discountAmount;

        questions.push(
          makeQuestion(
            `A school bag costs ₹${price}. It has a ${discount}% discount. What is the final price?`,
            finalPrice,
            [
              `${discount}% of ₹${price} = ₹${discountAmount}`,
              `Original price − discount`,
              `₹${price} − ₹${discountAmount} = ₹${finalPrice}`,
              `Answer = ₹${finalPrice}`
            ],
            "Percentage"
          )
        );

      }

    }

  }


  return shuffle(questions);
}


/* =========================================
   START PRACTICE
========================================= */

function startPractice(level) {

  currentLevel = level;

  currentQuestions =
    generateQuestions(selectedClass, level);

  currentQuestion = 0;
  score = 0;
  streak = 0;

  answeredCurrent = false;

  document.getElementById("gameScore").textContent = "0";
  document.getElementById("headerScore").textContent = "0";
  document.getElementById("streak").textContent = "0";

  document.getElementById("practiceInfo").textContent =
    `Class ${selectedClass} • ${capitalize(level)} Level • 50 Questions`;

  document.getElementById("result").classList.remove("show");

  loadQuestion();

  document.getElementById("practice").scrollIntoView({
    behavior: "smooth"
  });

}


/* =========================================
   LOAD QUESTION
========================================= */

function loadQuestion() {

  const q = currentQuestions[currentQuestion];

  answeredCurrent = false;

  document.getElementById("questionNumber").textContent =
    currentQuestion + 1;

  document.getElementById("questionText").textContent =
    q.question;

  document.getElementById("questionTopic").textContent =
    q.topic;

  document.getElementById("answerInput").value = "";

  document.getElementById("feedback").textContent = "";

  document.getElementById("feedback").className =
    "feedback";

  document.getElementById("solutionBox").classList.remove("show");

  document.getElementById("nextBtn").disabled = true;

  document.getElementById("checkBtn").disabled = false;

  updateProgress();

  document.getElementById("answerInput").focus();

}


/* =========================================
   CHECK ANSWER
========================================= */

function checkAnswer() {

  if (answeredCurrent) return;

  const input =
    document.getElementById("answerInput");

  const userAnswer =
    Number(input.value);

  const q =
    currentQuestions[currentQuestion];

  if (input.value.trim() === "") {

    showFeedback(
      "⚠️ Please enter an answer first.",
      "wrong"
    );

    return;
  }

  answeredCurrent = true;

  document.getElementById("checkBtn").disabled = true;

  if (Math.abs(userAnswer - q.answer) < 0.0001) {

    score++;

    streak++;

    document.getElementById("gameScore").textContent =
      score;

    document.getElementById("headerScore").textContent =
      score;

    document.getElementById("streak").textContent =
      streak;

    showFeedback(
      `🎉 Correct! Great job! +1 point`,
      "correct"
    );

    createConfetti();

  } else {

    streak = 0;

    document.getElementById("streak").textContent =
      "0";

    showFeedback(
      `❌ Not quite! The correct answer is ${q.answer}.`,
      "wrong"
    );

  }

  showSolution();

  document.getElementById("nextBtn").disabled = false;

}


/* =========================================
   FEEDBACK
========================================= */

function showFeedback(message, type) {

  const feedback =
    document.getElementById("feedback");

  feedback.textContent = message;

  feedback.className =
    `feedback ${type}`;

}


/* =========================================
   SHOW SOLUTION
========================================= */

function showSolution() {

  const q =
    currentQuestions[currentQuestion];

  const box =
    document.getElementById("solutionBox");

  const text =
    document.getElementById("solutionText");

  let html = "";

  q.steps.forEach((step, index) => {

    html += `
      <div class="solution-step">
        <strong>Step ${index + 1}:</strong>
        ${step}
      </div>
    `;

  });

  text.innerHTML = html;

  box.classList.add("show");

}


/* =========================================
   NEXT QUESTION
========================================= */

function nextQuestion() {

  if (currentQuestion >= 49) {

    finishPractice();

    return;
  }

  currentQuestion++;

  loadQuestion();

}


/* =========================================
   PROGRESS
========================================= */

function updateProgress() {

  const percentage =
    ((currentQuestion + 1) / 50) * 100;

  document.getElementById("progressFill").style.width =
    `${percentage}%`;

}


/* =========================================
   FINISH
========================================= */

function finishPractice() {

  document.getElementById("finalScore").textContent =
    score;

  let message = "";

  if (score === 50) {

    message =
      "🏆 Perfect Score! You are a Math Champion!";

  } else if (score >= 40) {

    message =
      "🌟 Excellent! Your mathematics skills are strong!";

  } else if (score >= 30) {

    message =
      "👏 Great work! Keep practicing to improve!";

  } else if (score >= 20) {

    message =
      "💪 Good effort! Practice makes you better!";

  } else {

    message =
      "🌱 Keep learning and try again!";
  }

  document.getElementById("resultMessage").textContent =
    message;

  document.getElementById("result").classList.add("show");

  document.getElementById("result").scrollIntoView({
    behavior: "smooth"
  });

}


/* =========================================
   RESTART
========================================= */

function restartPractice() {

  startPractice(currentLevel);

}


/* =========================================
   CONFETTI
========================================= */

function createConfetti() {

  for (let i = 0; i < 25; i++) {

    const confetti =
      document.createElement("div");

    confetti.innerHTML =
      ["🎉", "⭐", "✨", "🎈"][Math.floor(Math.random() * 4)];

    confetti.style.position = "fixed";

    confetti.style.left =
      Math.random() * 100 + "%";

    confetti.style.top =
      Math.random() * 50 + "%";

    confetti.style.fontSize =
      20 + Math.random() * 20 + "px";

    confetti.style.zIndex = "9999";

    confetti.style.pointerEvents = "none";

    document.body.appendChild(confetti);

    confetti.animate(

      [
        {
          transform: "translateY(0) rotate(0)",
          opacity: 1
        },

        {
          transform:
            `translateY(${300 + Math.random() * 300}px)
             rotate(${Math.random() * 720}deg)`,

          opacity: 0
        }
      ],

      {
        duration: 1200,
        easing: "ease-out"
      }

    ).onfinish = () => {

      confetti.remove();

    };

  }

}


/* =========================================
   UTILITY
========================================= */

function capitalize(text) {

  return text.charAt(0).toUpperCase() +
    text.slice(1);

}


/* =========================================
   SCROLL FUNCTIONS
========================================= */

function scrollToClasses() {

  document.getElementById("classes").scrollIntoView({
    behavior: "smooth"
  });

}


function scrollToTheory() {

  document.getElementById("theory").scrollIntoView({
    behavior: "smooth"
  });

}


/* =========================================
   ENTER KEY
========================================= */

document.addEventListener("keydown", function(event) {

  if (
    event.key === "Enter" &&
    document.activeElement.id === "answerInput"
  ) {

    if (!answeredCurrent) {

      checkAnswer();

    } else {

      nextQuestion();

    }

  }

});


/* =========================================
   INITIAL LOAD
========================================= */

window.addEventListener("load", function() {

  loadTheory(1);

  document.getElementById("selectedClassText").textContent =
    "1";

});