"use strict";

$(document).ready(function(){
    


var questionNumber = 1,
    background1 = 'img/store_front.jpg',
    background2 = 'img/drafting.jpeg',
    background3 = 'img/volunteers.jpg',
    background4 = 'img/wine_bar.jpg',
    background5 = 'img/wood_desk.jpg',
    background6 = 'img/sidewalk_stores.jpg';
    
    
    $('#question-1').show();

function nextQuestion(i){
    
        questionNumber++;
    
        $('#question-' + (i-1)).hide();
        $('.hero').css("background", "url(/img/drafting.jpeg) no-repeat 0 50%");
        $('#question-' + i).fadeIn();
         
};
 
    $('button .next').on('click', function(e){
            e.preventDefault();
            nextQuestion(questionNumber); 
    });

});  //end ready