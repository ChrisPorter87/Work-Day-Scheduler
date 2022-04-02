var moment = moment().format("L").toString();
function displayDate() {
  var dateDiv = document.getElementById("currentDay");
  dateDiv.innerHTML = moment;
  console.log(dateDiv);
  dateDiv.textContent = moment;
}
console.log(moment);

let t = new Date();
let hour = t.getHours();
const cols = [...document.querySelectorAll("h4")];
cols.forEach((h) => (h.className = ""));
cols.forEach((h, i) => {
  if (i + 9 < hour) {
    h.className = "past";
  } else if (i + 9 > hour) {
    h.className = "future";
  } else {
    h.className = "present";
  }
});

displayDate();
