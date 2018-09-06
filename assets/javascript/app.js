$(document).ready(function () {

    // VARIABLES
    // ==========================================================================

    // The array of questions for our quiz game.
    var questions =
        ["What is the scientific name of the American Robin", "If you see a hummingbird on the East Coast during the summer, what kind is it most likely?", "Which bird did Ben Franklin call a \"Bird of bad moral Character\"", "Which woodpecker bores holes in trees for acorn storage?", "Which bird has up to 200 songs, and is known to mimic sounds in their environment including car alarms, and creaky gates"];


    var answers = [
        { o: ["1.Turdus migratorius", "2.Cygnus Atratus", "3.Tyrannus tyrannus"], c: ["1"] },
        { o: ["1.Anna's Hummingbird", "2.Ruby-throated Hummingbird", "3.Costa's Hummingbird"], c: ["2"] },
        { o: ["1.Pygmy Nuthatch", "2.Bushtit", "3.Bald Eagle"], c: ["3"] },
        { o: ["1.Pileated Woodpecker", "2.Woody Woodpecker", "3.Acorn Woodpecker"], c: ["3"] },
        { o: ["1.Whip-poor-will", "2.Northern Mockingbird", "3.Yellow Warbler"], c: ["2"] }
    ];




    var radioAnswers = [];
    var computerChoices = "";
    var newAnswer = [];


    // We start the game with a score of 0.
    var score = 0;
    // Variable to hold the index of current question.
    
    var questionIndex = 0;

    // Variable to hold the intervalID so we can use it to reset
    var intervalID;



    // FUNCTIONS
    // ==============================================================================

    function startTimer(duration, display) {

        var timer = duration, seconds;
        intervalID =
            setInterval(function () {
                //minutes = parseInt(timer / 60, 10)
                seconds = parseInt(timer % 60, 10);

                //minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;
                display.innerHTML = seconds;

                if (--timer < 0) {
                    timer = duration;
                    timeoutResponse();
                    //This clears the interval to reset at 0
                    clearInterval(intervalID);
                    setTimeout(interstitial, 2000);
                }

            }, 1000);

    }

//what to do after setTimeout

    function interstitial() {
        questionIndex++;
        renderQuestion();
        showTimer();

    }

    function timeoutResponse() {
        $("#timer").empty();
        $('#question').html('Times Up!! The correct answer is  ' + answers[questionIndex].c);

    }

    function correctResponse() {
        $("#timer").empty();
        $('#question').html('Right - the answer is ' + answers[questionIndex].c);
        score ++;
    }

    function wrongResponse() {
        $("#timer").empty();
        $('#question').html('Wrong - the answer is ' + answers[questionIndex].c);
    }



    // Function to render questions.
    function renderQuestion() {
        $('form').show();
        $("#firstChoice, #secondChoice, #thirdChoice, #response").empty();
        $('input[type=radio]').prop('checked', false);

        // If there are still more questions, render the next one.
        if ((questionIndex <= (questions.length - 1))) {

            $("#question").html(questions[questionIndex]);

            radioAnswers = [];

            //add key to list of user choices array
            radioAnswers.push(answers[questionIndex].o);
            computerChoices = radioAnswers.toString();
            newAnswer = computerChoices.split(',');

            $('#firstChoice').html(newAnswer[0]);
            $('#secondChoice').html(newAnswer[1]);
            $('#thirdChoice').html(newAnswer[2]);

        }


        // If there aren't, render the end game screen.
        else {
            $('#question').html("Game Over!");
            $('#score').html("Final Score: " + score + " out of " + questions.length);
            $('form').hide();

        }
    }

    // Function that updates the score...
    function updateScore() {
        $('#score').html("Score: " + score);
    }

    //This returns the intervalID so it can be reset between questions, then again we could make it a global too
    function showTimer() {

        if ((questionIndex <= (questions.length - 1))) {
            var timerForQuestion = 15;
            display = document.getElementById("timer");
            startTimer(timerForQuestion, display);

        } else {

            $("#timer").empty();
            $("#firstChoice, #secondChoice, #thirdChoice, #response").empty();

        }
    }

    // MAIN PROCESS
    // ==============================================================================

    // Calling functions to start the game.    

    renderQuestion();
    updateScore();
    showTimer();


    // When the user makes a selection, it will run the following function...   
    $(document).on('change', '[type="radio"]', function () {

        var currentlyValue = $(this).val(); // Get the radio checked value

        // If there are no more questions, stop the function and show the closing screens.
        if (questionIndex === questions.length) {
            return;
        }

        // Only run this code if  option "1" or "2"  or "3" are selected
       // if (currentlyValue === "1" || currentlyValue === "2" || currentlyValue === "3") {

            // If they guess the correct answer, increase and update score, alert them they got it right.

            if (currentlyValue === (answers[questionIndex].c).toString()) {

                correctResponse();
                clearInterval(intervalID);
                setTimeout(interstitial, 5000);
                updateScore();
            }
            // If wrong, alert them they are wrong.

            else {

                wrongResponse();
                clearInterval(intervalID);
                setTimeout(interstitial, 5000);
            }

       // }
    });




})


