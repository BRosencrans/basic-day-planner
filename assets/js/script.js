
//time card button elements
var sevenAmBtn = $("#seven-am-save-to-page");
var eightAmBtn = $("#eight-am-save-to-page");
var nineAmBtn = $("#nine-am-save-to-page");
var tenAmBtn = $("#ten-am-save-to-page");
var elevenAmBtn = $("#eleven-am-save-to-page");
var twelvePmBtn = $("#twelve-pm-save-to-page");
var onePmBtn = $("#one-pm-save-to-page");
var twoPmBtn = $("#two-pm-save-to-page");
var threePmBtn = $("#three-pm-save-to-page");
var fourPmBtn = $("#four-pm-save-to-page");
var fivePmBtn = $("#five-pm-save-to-page");
var sixPmBtn = $("#six-pm-save-to-page");
var sevenPmBtn = $("#seven-pm-save-to-page");

//grabs all the textarea tags and puts them in an array
var timeArray = $("textarea").get()
console.log(timeArray)

//Turns all textareas in to jquery objects
var textAreaSevenAm = $(timeArray[0]);
var textAreaEightAm = $(timeArray[1]);
var textAreaNineAm = $(timeArray[2]);
var textAreaTenAm = $(timeArray[3]);
var textAreaElevenAm = $(timeArray[4]);
var textAreaTwelvePm = $(timeArray[5]);
var textAreaOnePm = $(timeArray[6]);
var textAreaTwoPm = $(timeArray[7]);
var textAreaThreePm = $(timeArray[8]);
var textAreaFourPm = $(timeArray[9]);
var textAreaFivePm = $(timeArray[10]);
var textAreaSixPm = $(timeArray[11]);
var textAreaSevenPm = $(timeArray[12]);

//storage variables
var dailyTasks = {
  sevenAm: "",
  eightAm: "",
  nineAm: "",
  tenAm: "",
  elevenAm: "",
  twelvePm: "",
  onePm: "",
  twoPm: "",
  threePm: "",
  fourPm: "",
  fivePm: "",
  sixPm: "",
  sevenPm: "",
};

//function to display current time
function currentTime() {
  var clock = $("#currentDay")
  clock.text(dayjs().format("dddd MMMM DD YYYY, hh:mm:ss A  "))
};
currentTime();
//sets the clock to updated in seconds
setInterval(currentTime, 1000);

//gets the current hour as an integer
var now = parseInt(dayjs().format("H",));
console.log(now)

function colorTime() {
  //time array loop
  for (i = 0; i < timeArray.length; i++) {
    console.log(timeArray[i])
    var timeLoop = $(timeArray[i])
    console.log(timeLoop)


    //sets text area boxs to display color based on current time
    if (timeArray[i].dataset.timeindex < now) {
      timeLoop.addClass("past")
    } else if (timeArray[i].dataset.timeindex == now) {
      timeLoop.addClass("present")
    }
    else if (timeArray[i].dataset.timeindex > now) {
      timeLoop.addClass("future")
    }
  }
}

colorTime();

//updates colors every minute
setInterval(colorTime, 60000);

//button functions to save tasks to local storage
sevenAmBtn.on("click", function (event) {
  event.preventDefault()
  var textAreaValue = textAreaSevenAm.val();
  console.log(textAreaValue);
  dailyTasks.sevenAm = textAreaValue
  localStorage.setItem("StoredDailyTasks", JSON.stringify(dailyTasks))
  console.log(dailyTasks)
});

eightAmBtn.on("click", function (event) {
  event.preventDefault()
  var textAreaValue = textAreaEightAm.val();
  dailyTasks.eightAm = textAreaValue
  localStorage.setItem("StoredDailyTasks", JSON.stringify(dailyTasks))
});

nineAmBtn.on("click", function (event) {
  event.preventDefault()
  var textAreaValue = textAreaNineAm.val();
  dailyTasks.nineAm = textAreaValue
  localStorage.setItem("StoredDailyTasks", JSON.stringify(dailyTasks))
});

tenAmBtn.on("click", function (event) {
  event.preventDefault()
  var textAreaValue = textAreaTenAm.val();
  dailyTasks.tenAm = textAreaValue
  localStorage.setItem("StoredDailyTasks", JSON.stringify(dailyTasks))
});

elevenAmBtn.on("click", function (event) {
  event.preventDefault()
  var textAreaValue = textAreaElevenAm.val();
  dailyTasks.elevenAm = textAreaValue
  localStorage.setItem("StoredDailyTasks", JSON.stringify(dailyTasks))
});

twelvePmBtn.on("click", function (event) {
  event.preventDefault()
  var textAreaValue = textAreaTwelvePm.val();
  dailyTasks.twelvePm = textAreaValue
  localStorage.setItem("StoredDailyTasks", JSON.stringify(dailyTasks))
});

onePmBtn.on("click", function (event) {
  event.preventDefault()
  var textAreaValue = textAreaOnePm.val();
  dailyTasks.onePm = textAreaValue
  localStorage.setItem("StoredDailyTasks", JSON.stringify(dailyTasks))
});

twoPmBtn.on("click", function (event) {
  event.preventDefault()
  var textAreaValue = textAreaTwoPm.val();
  dailyTasks.twoPm = textAreaValue
  localStorage.setItem("StoredDailyTasks", JSON.stringify(dailyTasks))
});

threePmBtn.on("click", function (event) {
  event.preventDefault()
  var textAreaValue = textAreaThreePm.val();
  dailyTasks.threePm = textAreaValue
  localStorage.setItem("StoredDailyTasks", JSON.stringify(dailyTasks))
});

fourPmBtn.on("click", function (event) {
  event.preventDefault()
  var textAreaValue = textAreaFourPm.val();
  dailyTasks.fourPm = textAreaValue
  localStorage.setItem("StoredDailyTasks", JSON.stringify(dailyTasks))
});

fivePmBtn.on("click", function (event) {
  event.preventDefault()
  var textAreaValue = textAreaFivePm.val();
  dailyTasks.fivePm = textAreaValue
  localStorage.setItem("StoredDailyTasks", JSON.stringify(dailyTasks))
});

sixPmBtn.on("click", function (event) {
  event.preventDefault()
  var textAreaValue = textAreaSixPm.val();
  dailyTasks.sixPm = textAreaValue
  localStorage.setItem("StoredDailyTasks", JSON.stringify(dailyTasks))
});

sevenPmBtn.on("click", function (event) {
  event.preventDefault()
  var textAreaValue = textAreaSevenPm.val();
  dailyTasks.sevenPm = textAreaValue
  localStorage.setItem("StoredDailyTasks", JSON.stringify(dailyTasks))
});

//function to call the saved tasks
function ReturnSavedTasks() {
  var dailyTasksStored = JSON.parse(localStorage.getItem("StoredDailyTasks"))
  if (dailyTasksStored == null) { return; }
  dailyTasks = dailyTasksStored

  textAreaSevenAm.val(dailyTasks.sevenAm)
  textAreaEightAm.val(dailyTasks.eightAm)
  textAreaNineAm.val(dailyTasks.nineAm)
  textAreaTenAm.val(dailyTasks.tenAm)
  textAreaElevenAm.val(dailyTasks.elevenAm)
  textAreaTwelvePm.val(dailyTasks.twelvePm)
  textAreaOnePm.val(dailyTasks.onePm)
  textAreaTwoPm.val(dailyTasks.twoPm)
  textAreaThreePm.val(dailyTasks.threePm)
  textAreaFourPm.val(dailyTasks.fourPm)
  textAreaFivePm.val(dailyTasks.fivePm)
  textAreaSixPm.val(dailyTasks.sixPm)
  textAreaSevenPm.val(dailyTasks.sevenPm)
};

//on page load pulls up stored daily tasks
ReturnSavedTasks();
