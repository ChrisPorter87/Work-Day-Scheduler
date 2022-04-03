var momentClass = moment();
var moment = momentClass.format("L").toString();
function displayDate() {
  var dateDiv = document.getElementById("currentDay");
  dateDiv.innerHTML = moment;
  console.log(dateDiv);
  dateDiv.textContent = moment;
}
console.log(moment);
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

displayDate();
