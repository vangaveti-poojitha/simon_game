

var buttonColours=["red","blue","green","yellow"];
var gamePattern=[];
var userClickedPattern = [];
var level=0;
$(document).keypress(function(event) {  
    $('h1').html("Level 0");
    nextSequence();
    
   
});



function nextSequence(){
    userClickedPattern=[];
    level+=1;
    $('h1').html("Level "+level);
    randomNumber=Math.floor(Math.random()*4);
    randomChoosenColour=buttonColours[randomNumber];
    gamePattern.push(randomChoosenColour);
    $('#'+randomChoosenColour).fadeIn(250).fadeOut(250).fadeIn(250);
    
   
    playSound(randomChosenColour);
    

}

$('.btn').on('click',function(){
    var userChosenColour=this.id
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
});



function playSound(name){
    var audio_name='./sounds/'+name+'.mp3';
    
    var audio=new Audio(audio_name);
    audio.play();

}

function animatePress(currentColour){
    $('.'+currentColour).addClass('pressed');
    setTimeout(function(){
        $('.'+currentColour).removeClass('pressed');

    },100);


}


function checkAnswer(currentLevel){
    
    if (userClickedPattern[currentLevel]==gamePattern[currentLevel]){
        console.log('yes');
        if (userClickedPattern.length==gamePattern.length){
            
            setTimeout(function(){
                nextSequence();
            },1000);
        }
    }
    else{
        playSound('wrong');
        $('body').addClass('game-over');
        setTimeout(function(){
            $('body').removeClass('game-over');
        },200);
        $("#level-title").text("Game Over, Press Any Key to Restart");
        startover();
    }
   

}


function startover(){
    level=0;
    gamePattern=[];
    userClickedPattern=[];

}
    


