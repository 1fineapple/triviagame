$(document).ready(function(){ 
    

    $("#submit").on("click", stop.clock);

    var a1 = 'option1';
    var a3 = 'option3';
    var a4 = 'option4';

    var score = 0 
    var clockRunning=false;


    function stop (){

        console.log("stopping");
        clearInterval(intervalId);
        clockRunning = false

     }


     // when time expires 

    var triviaNumber = 15;
    var intervalId;
    
    var start;
     function start() {
        if (!clockRunning){
         clearInterval(intervalId);
         intervalId = setInterval(decrement, 1000);
        }
     }
     start();


     function decrement() {

        triviaNumber--;
        $("#countDown").html("<h2> Time Remaining: " + triviaNumber + "<h2>");

        if (triviaNumber===0){

            // TODO: change to when timer expires

   
   // get the response for q1
        var q1 = $("input[name='q1']:checked").val();
        
        // compare response from q1 with correct answer
        
        if(q1 === a3) {
            score++;
            console.log(score);
        }

        var q2 = $("input[name='q2']:checked").val();
        if(q2 === a1) {
            score++;
        }

        var q3 = $("input[name='q3']:checked").val();
        if(q3 === a3) {
            score++;
        }

        var q4 = $("input[name='q4']:checked").val();
        if(q4 === a4) {
            score++;

        }
        // alert score with a new page here :) + format questions 
        $("#results").text(score + "/4");
        clearInterval(intervalId);


     }

    




    }

});