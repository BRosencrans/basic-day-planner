// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
//time card button elements
var sevenAmBtn= ("#seven-am-save-to-page");
var eightAmBtn= $("#eight-am-save-to-page")
var nineAmBtn= $("#nine-am-save-to-page")
var tenAmBtn= $("#ten-am-save-to-page")
var elevenAmBtn= $("#eleven-am-save-to-page")
var twelvePmBtn= $("#twelve-pm-save-to-page")
var onePmBtn= $("#one-pm-save-to-page")
var twoPmBtn= $("#two-pm-save-to-page")
var threePmBtn= $("#three-pm-save-to-page")
var fourPmBtn= $("#four-pm-save-to-page")
var fivePmBtn= $("#five-pm-save-to-page")
var sixPmBtn= $("#six-pm-save-to-page")
var sevenPmBtn= $("#seven-pm-save-to-page")
//grabs all the textarea tags and puts them in an array
var timeArray = $("textarea").get()
console.log(timeArray)
//Turns all textareas in to jquery objects
var textAreaSevenAm = $(timeArray[0])
var textAreaEightAm = $(timeArray[1])
var textAreaNineAm = $(timeArray[2])
var textAreaTenAm = $(timeArray[3])
var textAreaElevenAm = $(timeArray[4])
var textAreaTwelevePm = $(timeArray[5])
var textAreaOnePm = $(timeArray[6])
var textAreaTwoPm = $(timeArray[7])
var textAreaThreePm = $(timeArray[8])
var textAreaFourPm = $(timeArray[9])
var textAreaFivePm = $(timeArray[10])
var textAreaSixPm = $(timeArray[11])
var textAreaSevenPm = $(timeArray[12])




//$(function  () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
//});
