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


    // Variable to hold the index of current question.
    var questionIndex = 0;

    // questionNumber.forEach(function (element) {

    var timer = setInterval(function () {


        if (questionIndex === questionNumber.length) {
            return;
        }


        else if ((count !== 0) && (questionIndex <= (questionNumber.length - 1))) {

            //  questionIndex = questionNumber[i];
            $('#test').html(' question' + questionIndex);
            $('#display').html(count - 1 + ' seconds');
            clockRunning = true;
            count--;
            console.log(questionIndex + "  1st condition");



        } else {
            clearInterval(timer);
            count = 15;
            clockRunning = false;
            questionIndex++;
            $('#display').html(count + ' seconds');
            $('#test').html(' question' + questionIndex);
            
            console.log(questionIndex + "  second condition");
            startTimer();


        }


    }, 1000);

    //next question
    questionIndex++;
    console.log(questionIndex)

    //reset timer
    var startTimer = setInterval(function () {
        $('#test').html(' question' + questionIndex);
        $('#display').html(count - 1 + ' seconds');
        clockRunning = true;
        
        if ((count === 0) && (questionIndex >= (questionNumber.length - 1))) {
            console.log("Time's up");
            clearInterval(timer);
            clockRunning = false;
            count = 15;

        }

    }, 1000)




    // function renderQuestion() {
    //     count = 15;
    //     clockRunning = true;
    //     startTimer();
    //     // If there are still more questions, render the next one.
    //     if (questionIndex <= (questions.length - 1)) {
    //         document.querySelector("#question").innerHTML = questionNumber[questionIndex].q;
    //     }
    //     // If there aren't, render the end game screen.
    //     else {
    //         //   document.querySelector("#question").innerHTML = "Game Over!";
    //         //    document.querySelector("#score").innerHTML = "Final Score: " + score + " out of " + questions.length;
    //     }
    // }


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



