var arrayColors= ["red","blue","green","yellow"];
 var gamePattern=[];

 var usrClickedPattern=[];

 var start= false;

 var level=0;
  
 $(document).keypress(function(){
   if(!start){
    
       nextSequence();
       start=true;
   }
 });


  $(".btn").click(function(){
     var usrChosenColor= $(this).attr("id");
     usrClickedPattern.push(usrChosenColor);

     playSound(usrChosenColor);

     animatePress(usrChosenColor);
     checkAnswer(usrClickedPattern.length-1);
  });


  function checkAnswer(currentLevel) {

   if (gamePattern[currentLevel] === usrClickedPattern[currentLevel]) {

     

     if (usrClickedPattern.length === gamePattern.length){
       setTimeout(function () {
         nextSequence();
       }, 1000);
     }

   } 
   
   else {

     

    
     playSound("wrong");

     
     $("body").addClass("game-over");
     setTimeout(function () {
       $("body").removeClass("game-over");
     }, 200);

    
     $("#level-title").text("Game Over, Press Any Key to Restart");
      startOver();
   }

}


function nextSequence(){
    usrClickedPattern=[];
     level++;
     $("#level-title").text("level "+level);

    var randomN= Math.floor(4*Math.random());
    var randColor=arrayColors[randomN];
     gamePattern.push(randColor);
     $("#"+randColor).fadeIn(100).fadeOut(100).fadeIn(100);

     playSound(randColor);  
   }


   function playSound(name){
   var audio = new Audio("sounds/" + name + ".mp3");
   audio.play();
   }

   function animatePress(currentColor){
    $("#"+currentColor).addClass("pressed");
    setTimeout(function(){
       $("#"+currentColor).removeClass("pressed"); 
    } , 100);
   }

   function startOver(){
      level=0;
      gamePattern=[];
      start=false;
   }