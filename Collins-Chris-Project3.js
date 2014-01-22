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

Once I arrive I carry my bass guitar inside and set up my gear.  I then tune my guitar and  start warming up.  Is everyone here for practice.  I see Jonathan, Wayne, Justin, Keaton, & Zack.  Wayne wants to play two new songs he wrote and 1 new song Johnathan wrote.  We practice for 1.5 hours and then take a break.  During break I run home to get my wife Christi, my two daughters Hope and Macie, and my son Andrew.  When I get home I get everyone into the car and start to drive.  On our way, Macie realizes that she forgot her Bible.  Should we turn around and get it or just let her borrow one of our Bibles?  
*/

//Global variables
var wakeTime = "8 am";
var getReady = "brush my teeth & take shower";
var cleanClothes = true;

//Outputs
console.log("I'm writing about my Sunday routine.");
console.log("I wake up at " + wakeTime + " after hitting the snooze a few times");
console.log("I then need to " + getReady + ".");



var availableClothes = function(cleanClothes) {
    if (cleanClothes = true) {
        console.log("I have a clean shirt to wear to church.");
    } else {
        console.log("I am going to have to find something else to wear.")
    }
    
};

availableClothes(true);
