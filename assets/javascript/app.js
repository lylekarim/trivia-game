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

    var count = 15;
    // prevents the clock from being sped up unnecessarily
    var clockRunning = false;
    var questionNumber = [1, 2, 3, 4, 5];
    var questionIndex = 0;
  var IntID = setTimer();

  

    function stopTimer() {
        clearInterval(IntID);
        count = 15;
        clockRunning = false;
        questionIndex++;
        $('#display').html(count + ' seconds');
        $('#test').html(' question' + questionIndex);

        console.log(questionIndex + "  second condition");
    }


    function setTimer() {
        j = setInterval(setTimer, 1000);
        count--;
        
    // return j;
    if (questionIndex === questionNumber.length) {
        return;
        
    }

    else if ((count !== 0) && (questionIndex <= (questionNumber.length - 1))) {
 
        clockRunning = true;
        $('#test').html(' question' + questionIndex);
        $('#display').html(count - 1 + ' seconds');
      
       
        console.log(questionIndex + "  1st condition");


    } else if ((count === 0) && (questionIndex <= (questionNumber.length - 1))) {
        stopTimer();
        clockRunning = false;

      //  restartTimer();

    }

    }

  

    //next question
    questionIndex++;
    console.log(questionIndex)


    //Restart Timer
    // Option 1 make a restartSlider function and call it
    $("#test2").click(restartTimer);
    function restartTimer() {
        IntID = setTimer();
        $('#test').html(' question' + questionIndex);
        $('#display').html(count - 1 + ' seconds');
        clockRunning = true;
        count--;
        console.log(questionIndex + "  restsrt condition");

    }

    //Option 2 create an anonymous function only for that click event.
    $("#test2").click(function () {
        IntID = setTimer();
    });





    // function startTimer(){
    //     clockRunning = true;
    //     setInterval(startTimer, 1000);
    //     count--;
    //     $('#display').html((count - 1) + ' seconds');
    //     $('#test').html(' question' + questionIndex);

    //     if (count === 0) {
    //                 console.log("Time's up");
    //                 clearInterval(startTimer);
    //                 clockRunning = false;


    //             }
    // }


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




//create a form with 10 radio button questions 






//store and display wins, losses, unguessed



//create a form with 10 radio button questions 



