var momentClass = moment();
var moment = momentClass.format("L").toString();
function displayDate() {
  var dateDiv = document.getElementById("currentDay");
  dateDiv.innerHTML = moment;
  console.log(dateDiv);
  dateDiv.textContent = moment;
}
console.log(moment);
$(".saveBtn").on("click", function () {
  //get nearby values.
  console.log(this);
  var text = $(this).siblings(".description").val(); // taken the change from the sibling html description attribute
  var time = $(this).parent().attr("id"); // taken the change from the parent html id attribute

  //set items in local storage.
  localStorage.setItem(time, text);
});
var hourMoment = momentClass.format("H").toString();
console.log("HOUR: ", hourMoment);
let hour = hourMoment;
const cols = [...document.getElementsByClassName("hour")];
cols.forEach((h, i) => {
  if (i + 8 < hour) {
    h.className = h.className + " past";
  } else if (i + 8 > hour) {
    h.className = h.className + " future";
  } else {
    h.className = h.className + " present";
  }
});

$("#8 .description").val(localStorage.getItem("8"));
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));
displayDate();
