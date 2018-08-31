//this code below is just for my reference. 

// var sec = 15;
// var time = setInterval(myTimer, 1000);

// $(document).ready(function () {

//     var timer = setInterval(function () {

//         var count = parseInt($('#theTarget').html());
//         if (count !== 0) {
//             $('#theTarget').html(count - 1);
//         } else {
//             clearInterval(timer);
//         }
//     }, 1000);
// });


//create a timer that count down to zero
$(document).ready(function () {


    //  Variable that will hold our setInterval that runs the stopwatch
    var intervalId;
    var count = 15;
    // prevents the clock from being sped up unnecessarily
    var clockRunning = false;
    var questionNumber = [1, 2, 3, 4, 5];
    var questionIndex = "";
    var currentQuestion = "";

    var nextQuestion = "";

    // Variable to hold the index of current question.
    var questionIndex = 0;

    // questionNumber.forEach(function (element) {

    var timer = setInterval(function () {

        //  for (var i = 0; i < questionNumber.length; i++) {


        //  currentQuestion = questionNumber[i];

        if (questionIndex === questionNumber.length) {
            return;
        }


        else if ((count !== 0) && (questionIndex <= (questionNumber.length - 1))) {

            //  currentQuestion = questionNumber[i];
            $('#test').html(' question' + currentQuestion);
            $('#display').html(count - 1 + ' seconds');
            clockRunning = true;
            count--;


        } else {
            clearInterval(timer);
            count = 15;
            clockRunning = false;
            startTimer();
            console.log(currentQuestion);

        }


    }, 1000);

    //go to nextQuestion
    questionIndex++;


    //reset timer
    //change to next question in array
    // Function to render questions.


    function renderQuestion() {
        count = 15;
        clockRunning = true;
        startTimer();
        // If there are still more questions, render the next one.
        if (questionIndex <= (questions.length - 1)) {
            document.querySelector("#question").innerHTML = questionNumber[questionIndex].q;
        }
        // If there aren't, render the end game screen.
        else {
            //   document.querySelector("#question").innerHTML = "Game Over!";
            //    document.querySelector("#score").innerHTML = "Final Score: " + score + " out of " + questions.length;
        }
    }
    var startTimer = (timer) => {
        clockRunning = true;
        let seconds = 15
        timer = setInterval(() => {
            console.log(seconds)
            seconds--
            if (seconds === 0) {
                console.log("Time's up")
                clearInterval(timer)
            }
        }, 1000)
    }

});


// function start() {
//   intervalId = setInterval(count, 1000);
// }

// function stop() {

//   console.log("stopping");
//   clearInterval(intervalId);

// }





//create a form with 10 radio button questions 






//store and display wins, losses, unguessed



//create a form with 10 radio button questions 



