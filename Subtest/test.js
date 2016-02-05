/*var fTemp= 75;
var cTemp= 17;

var celsius = fTemp - 32 * 5/9;
console.log("In Britain it is "+cTemp+" degress outside.")

var fTemp= 75;
var cTemp= 14;

var fahrenheit = cTemp + 32 * 9/5;
console.log("In Michigan it is "+cTemp+" degress outside.")*/

var fTemp= prompt("What us today's temperature?");
var cTemp= (fTemp - 32) * 5/9;
document.write("In Britain it is " +cTemp+ " degrees outside.");
