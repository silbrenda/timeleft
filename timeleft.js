var kindOfYear = prompt("Are we living a normal year or a leap year right now? Answer 1 for a normal year and 2 for a leap year. [Numbers only]");

if (kindOfYear == 1) {
  timeLeft(365);
} else if (kindOfYear == 2) {
  timeLeft(366);
} else {
  prompt("Wrong number, try again!");
}

function timeLeft(year) {
  var maxAge = 73;
  var userAge = prompt("How old are you? [Numbers only]");
  var daysLeft = Math.round((maxAge * year) - (userAge * year));
  var weeksLeft = Math.round(daysLeft / 7);
  var monthsLeft = Math.round(daysLeft / (year/12));
  var yearsLeft = Math.round(maxAge - userAge);

  alert("Considering WHO global expectation of 73 years as a limit... You have approximately " + daysLeft + " days, " + weeksLeft + " weeks, " + monthsLeft + " months, and " + yearsLeft + " years left.");
}

/*

Testing in another way

function timeLeft(year) {
  var maxAge = 73;
  var daysLeft = Math.round(year * 365);
  var weeksLeft = Math.round(daysLeft / 7);
  var monthsLeft = Math.round(daysLeft / 12);
  var yearsLeft = Math.round(((maxAge * 365) - (daysLeft)) / 365 );

  alert("Considering WHO global expectation of 73 years as a limit... You have approximately " + daysLeft + " days, " + weeksLeft + " weeks, " + monthsLeft + " months, and " + yearsLeft + " years left.");
}

timeLeft(10) 

*/

