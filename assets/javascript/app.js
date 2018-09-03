window.onload = function () {

    // VARIABLES
    // ==========================================================================

    // The array of questions for our quiz game.
    var questions = [
        { q: "The sky is what color?", a: "t" },
        { q: "How many days in a non-leap year?", a: "t" },
        { q: "How many ounces in a pound?", a: "f" },
        { q: "When was The Declaration of Independence signed?", a: "f" },
        { q: "Is Nemo Cute?", a: "f" }
    ];

    var answers = [
        { o: "1. blue<BR> 2. yellow<BR> 3. pink<BR>", c: "1", },
        { o: "1. 364<BR> 2. 365<BR> 3. 400<BR>", c: "2", },
        { o: "1. 10<BR> 2. 11<BR> 3. 16<BR>", c: "3", },
        { o: "1. 1899<BR> 2. 1925<BR> 3. 1776<BR>", c: "3", },
        { o: "1. Yes<BR> 2. Extremly<BR> 3. Totally<BR>", c: "2", }
    ];

    // We start the game with a score of 0.
    var score = 0;
    // Variable to hold the index of current question.
    var questionIndex = 0;
    var answerIndex = 0;
    var intervalID;
    var clockRunning = false;


    // FUNCTIONS
    // ==============================================================================

    function startTimer(duration, display) {
        clockRunning = true;
        var timer = duration, seconds;
        intervalID =
            setInterval(function () {
                //minutes = parseInt(timer / 60, 10)
                seconds = parseInt(timer % 60, 10);

                //minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;
                display.innerHTML = seconds;

                if (--timer < -1) {
                    timer = duration;
                
                    clockRunning = false;
                  
                    //This clears the interval to reset at 0
                    clearInterval(intervalID);
                    setTimeout(explode, 2000);
                
                
                }

            }, 1000);

    }

    function explode(){
        alert("Boom!");
        questionIndex++;
        renderQuestion();
        showTimer();

      }
     


    // Function to render questions.
    function renderQuestion() {

        // If there are still more questions, render the next one.
        if ((questionIndex <= (questions.length - 1))) {
            {
                document.getElementById('question').innerHTML = questions[questionIndex].q;
                document.getElementById('answerOptions1').innerHTML = answers[questionIndex].o
            }
        }



        // If there aren't, render the end game screen.
        else {
            document.getElementById("question").innerHTML = "Game Over!";
            document.getElementById("score").innerHTML = "Final Score: " + score + " out of " + questions.length;
            document.getElementById("answerOptions1").innerHTML = "Thanks for playing!!";
            document.getElementById("timer").innerHTML = "Nemo is super cutes!!";
        }
    }

    // Function that updates the score...
    function updateScore() {
        document.getElementById("score").innerHTML = "Score: " + score;
    }

    //This returns the intervalID so it can be reset between questions, then again we could make it a global too
    function showTimer() {
        var timerForQuestion = 15;
        display = document.getElementById("timer");
        startTimer(timerForQuestion, display);
    }


    // MAIN PROCESS
    // ==============================================================================

    // Calling functions to start the game.    

    renderQuestion();
    updateScore();
    showTimer();


    // When the user presses a key, it will run the following function...   
    document.onkeyup = function (event) {


        // If there are no more questions, stop the function and show the closing screens.
        if (questionIndex === questions.length) {
            return;
        }

        // Determine which key was pressed, make it lowercase, and set it to the userInput variable.
        var userInput = event.key.toLowerCase();

        // Only run this code if "1" or "2"  or "3" are pressed.
        if (userInput === "1" || userInput === "2" || userInput === "3") {

            // If they guess the correct answer, increase and update score, alert them they got it right.
            if (userInput === answers[questionIndex].c) {
                clockRunning = false;
                alert("Correct!");
                score++;
                updateScore();
            }
            // If wrong, alert them they are wrong.

            else {
                clockRunning = false;
                alert("Wrong!");
            }

            // Increment the questionIndex variable and call the renderQuestion function.

            questionIndex++;
            clockRunning = false;
            renderQuestion();
            //This clears the interval to reset at 0
            clearInterval(intervalID);
            showTimer();
        }
    };




}


