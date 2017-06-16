var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];

var hohohoElement = document.getElementById("reindeer");
var hohohoElement = document.getElementById("colors");

// The number of loops to perform (what if the array changes?)
var loopCount = colors.length;
// Get a reference to the appropriate DOM element for colors
var colorsElement = document.getElementById("colors");

// Get a reference to the appropriate DOM element for reindeer
var reindeerElement =document.getElementById("reindeer");

// Start looping
for (var loopTracker = 0; loopTracker < loopCount; loopTracker += 1) {
  
  // Add the colors names into the correct <div>
  currentColors = colors[loopTracker];
  console.log (currentColors)
  colorsElement.innerHTML += `<div>${currentColors}</div> ` 
  
  // Add the reindeer names into the correct <div>
  currentReindeer = reindeer[loopTracker];
  console.log (currentColors)
   reindeerElement.innerHTML += `<div>${currentReindeer}</div> ` 
}