alert("JavaScript works!");

//HTML Story - I am writing about 
/*
I am writing about my Sunday routine.
I get up after smacking the snooze a few times.
I shower, shave, and brush my teeth.
Is my nice black shirt clean, if it is I will ear it, else I will wear something else.
I get in my car to go to church to practice the songs we will play for service.
On my way I stop at McDonalds to grab some coffee for $2.89.
I decide that I also want a biscuit, but they cost $1.79.  If I have enough for the coffee and biscuit then I will get both.  I only have $5 to use and tax is 4.5%
The lady at the drive thru says I owe her $4.91.  Great I can get both.  Now off to church.

Once I arrive I carry my bass guitar inside and set up my gear.  I then tune my guitar and  start warming up.  Is everyone here for practice.  I see Jonathan, Wayne, Justin, Keaton, & Zack.  Wayne wants to play two new songs he wrote and 1 new song Johnathan wrote.  We practice for 1.5 hours and then take a break.  During break I run home to get my wife Christi, my two daughters Hope and Macie, and my son Andrew.  When I get home I get everyone into the car and start to drive.  On our way, Macie realizes that she forgot her Bible.  Should we turn around and get it or just let her borrow one of our Bibles?  We decide to let her borrow one of our Bibles.  We arrive at church and we enjoy the service.

Once service is over we had to decide where to eat.  Our choices are to eat Mexican, Italian, burgers,  or Chinese.
*/

//Global variables
var wakeTime = "8 am";
var getReady = "brush my teeth & take shower";
var cleanClothes = true;
var say = console.log;




//Outputs
say("I'm writing about my Sunday routine.");
say("I wake up at " + wakeTime + " after hitting the snooze a few times");
say("I then need to " + getReady + ".");


//Function
var availableClothes = function(cleanClothes) {
    if (cleanClothes = true) {
        say("I have a clean shirt to wear to church.");
    } else {
        say("I am going to have to find something else to wear.");
    }
    
};

availableClothes(true);

say("I''m ready so I will get in my car so that I can go.");

//Return
var buyBreakfast = function(myCash) {
    var coffeePrice = 2.92;
    var biscuitPrice = 1.93;
    var totalCost = coffeePrice + biscuitPrice;
    totalCost = (coffeePrice + biscuitPrice);
    
    return totalCost;
};

    say("I only have " + buyBreakfast + ".");


var myCash;
var buyBreakfast = function (myCash) {
    var coffeePrice = 2.92, biscuitPrice = 1.93, totalCost;

    if (myCash < totalCost) {
		console.log("I only have enough for a coffee.");
		totalCost = (coffeePrice + biscuitPrice);
	}
	else {
		console.log("I can enjoy my coffee and a biscuit.");
	}
	return totalCost;



buyBreakfast(5)	
moneyLeft = (myCash - totalCost);
	say("I was able to eat on " + myCash + " with " + moneyLeft + " cents left over.");
};

var count = 0;
document.write("Starting Loop" + "<br />");
while (count < 10){
  document.write("Current Count : " + count + "<br />");
  count++;
}
document.write("Loop stopped!");











//array function
var bandMembers = ["Wayne", "Jonathan", "Chris", "Justin", "Keaton"];
var bandInstruments = ["Keyboard", "Acoustic", "Bass", "Guitar", "Keys", "Drums"];

var practiceTime = function() { // function

var people;


    
       say("Once I arrive at church I carry in my bass, get it tuned, and get ready to play.");
       bandMembers.push("Zach");
      
       for(var i = 5; i < bandMembers.length; i++) {  //array property
                
                say("I don't think everyone is here.  I  only see " + [i] + " band members." );
               
        }
      
                return (people);
                 say("I think everyone is here.  I see " + people + " band members." ); {
                     
                     
                 }

        people = bandMembers
                var people = practiceTime();
        say("people");
}

//var people= practicetime();
var time=practiceTime();
practicetime=90
say(bandMembers[0]) ;"typically plays " + bandInstruments[0] + "but sometimes plays " + bandInstruments[4] + "during worship.";




