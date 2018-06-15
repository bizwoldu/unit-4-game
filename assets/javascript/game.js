

//Bisrat Tesfandrias//

var random_results;
var lost = 0;
var win = 0;
var previous = 0;
 

var resetAndStart = function() {

    $(".crystals").empty();

    var images = [
        "assets/images/lightGreen.jpg",
        "assets/images/Natural_Small-Green.jpg",
        "assets/images/yellow.jpg",
        "assets/images/blue.jpg"
    ];

    random_results = Math.floor(Math.random() * 69) + 51;

    $("#result").html('Crystals Needed: ' + random_results);

    for(var i = 0; i < 4; i++){

        var random = Math.floor(Math.random() * 11) + 1;
    
        var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "data-random": random
        }); 
     
        crystal.css({
            "background-image":"url('" + images[i] + "')",
            "background-size":"cover"
        }); 

       
    
        $(".crystals").append(crystal);
   
    }
    
    $("#previous").html("Crystals Collected: " + previous);

} 
 


 
 
resetAndStart();

var reset = function() {

}
//Event Delegation//
$(document).on('click',".crystal", function() {

 
    var num = parseInt($(this).attr('data-random'));
    
    previous += num;

    $("#previous").html(" Crystals Collected: " + previous);


    if(previous > random_results){
         alert("Try Again!!");
        lost++;
        
         $("#lost").html("You Lost!!: " + lost);

         previous = 0;

         resetAndStart();
        
    }
    else if(previous === random_results){
        alert("Winner!!");
        win++;
        
        previous = 0;
        
        $("#win").html("You Win!!: " + win);

        resetAndStart();
    }
 
                        


});

//pseudo coding 

// there will be four crystal displayed as buttons on the page.
// the player will be shown a random number at the start of the game. 
//when the player clicks on a crystal, 
//it will add a specfic amount of points to the players total score.
//the player wins if their total score matches the random number from the beginging of the game.
//the player loses if their score goes above the random number.
//the game restarts whenever the player win or loses.