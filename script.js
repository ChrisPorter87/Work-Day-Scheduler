var moment = moment().format("L").toString();
function displayDate() {
  var dateDiv = document.getElementById("currentDay");
  dateDiv.innerHTML = moment;
  console.log(dateDiv);
  dateDiv.textContent = moment;
}
console.log(moment);
displayDate();
