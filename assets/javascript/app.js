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
    var currentQuestion = "";

    var nextQuestion = "";




    questionNumber.forEach(function (element) {

            var timer = setInterval(function () {

                for (var i = 0; i < questionNumber.length; i++) {


                    currentQuestion = questionNumber[i];
       


                if (count !== 0) {

                  //  currentQuestion = questionNumber[i];
                  $('#test').html(' question' + currentQuestion);
                    $('#display').html(count - 1 + ' seconds');
                    clockRunning = true;
                    count--;

                   

                } else {
                    clearInterval(timer);
                    count = 15;
                    clockRunning = false;

                    console.log(currentQuestion);

                }
            }
          
            }, 1000);
      
    });


});

    // for (var i = 0; i < questionNumber.length; i++) {
    //     count = 15;

    //     if (questionNumber.length > 1) {

    // var timer = setInterval(function () {

    //     if (count !== 0) {

    //         $('#display').html(count - 1 + ' seconds');
    //         clockRunning = true;
    //         count--;



    //     } else {

    //         clearInterval(timer);
    //         count = 15;
    //         clockRunning = false;
    //         console.log(questionNumber[0 + 1]);

    //     }
    // }, 1000);
    // console.log(questionNumber[0]);
    //  }



//nextQuestion

//reset timer
//change to next question in array
//set clockRunning to true;

// function nextQuestion() {
//     clockRunning = true;


// }







// function start() {
//   intervalId = setInterval(count, 1000);
// }

// function stop() {

//   console.log("stopping");
//   clearInterval(intervalId);

// }





//create a form with 10 radio button questions 






//store and display wins, losses, unguessed


