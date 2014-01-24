alert("JavaScript works!");
//Chris Collins
//SDI 1401
//Project 3



//Global variables
var wakeTime = "8 am";
var getReady = "brush my teeth & take shower";
var cleanClothes = true;
var myCash = 5;

// log a message to console.
var say = function(message) {
    console.log(message);
}


//Outputs
say("I'm writing about my Sunday routine."); //outputs
say("I wake up at " + wakeTime + " after hitting the snooze a few times");
say("I then need to " + getReady + ".");


//Function
var availableClothes = function(cleanClothes) { // function - conditional
    if (cleanClothes) {
        say("I have a clean shirt to wear to church.");
    } else {
        say("I am going to have to find something else to wear.");
    }

};

availableClothes(true);

say("I''m ready so I will get in my car so that I can go.");



var buyBreakfast = function(myCash) { // function - local var - argument number - 
    var coffeePrice = 2.92, biscuitPrice = 1.93, totalCost;

    if (myCash < totalCost) {
        console.log("I only have enough for a coffee.");
        totalCost = (coffeePrice);
    }
    else {
        console.log("I can enjoy my coffee and a biscuit.");
        totalCost = (coffeePrice + biscuitPrice); 
    }
    return totalCost;
};



var totalCost = buyBreakfast(myCash);
console.log("I was able buy breakfast for only $" + totalCost);
moneyLeft = (myCash - totalCost); 

say("I was able to eat on " + myCash + " with " + moneyLeft + " cents left over.");



//array function
var bandMembers = ["Wayne", "Jonathan", "Chris", "Justin", "Keaton", "Zack"];
var bandInstruments = ["Keyboard", "Acoustic", "Bass", "Guitar", "Keys", "Drums"];

var practiceTime = function(argument) { // function
    // No one is at practice at first.
    var people = [];

    say("Once I arrive at church I carry in my bass, get it tuned, and get ready to play.");
    
   
    for(var i = 0; i < argument.length; i++) {  //array property
        people.push(bandMembers[i]);
        say("Oh, " + argument[i] + " just showed up to practice");
    }

    say("I think everyone is here.  I see " + people.length + " band members." ); 
    return (people);
}


var people = practiceTime(bandMembers);
say("Our band consists of " + people[0] + ", " + people[1] + ", " + people[2] + ", " + people[3] + ", " + people[4] + "," +  people[5]);


var time=practiceTime(bandMembers);
practicetime=90
say(bandMembers[0]) ;"typically plays " + bandInstruments[0] + "but sometimes plays " + bandInstruments[4] + "during worship.";
var ourFunction=function(bandMembers) {
    
}


var ourFunction = function(){
lastPrint = {}; //JSON data
lastPrint.value = "Once service is over we had to decide where to eat.  Our choices are to eat Mexican, Italian, burgers,  or";
i = 0;
while(true){ //while loop

say(lastPrint.value.charAt(i)); // output

if(i == lastPrint.value.length-1){ //Nested Conditional
    if(i-1 == lastPrint.value.length-2){
        break;
    }
}
i++;
}
return true;
}
if(ourFunction()){
say(" Chinese.");
}





