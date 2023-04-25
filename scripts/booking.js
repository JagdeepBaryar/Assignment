/********* create variables *********/
const costPerDayFull = 35;
const costPerDayHalf = 20;
let daysSelected = [];
let dailyRate = costPerDayFull;

const monday = document.getElementById("monday");
const tuesday = document.getElementById("tuesday");
const wednesday = document.getElementById("wednesday");
const thursday = document.getElementById("thursday");
const friday = document.getElementById("friday");
const fullDayButton = document.getElementById("full");
const halfDayButton = document.getElementById("half");
const clearButton = document.getElementById("clear-button");
const calculatedCost = document.getElementById("calculated-cost");

/********* colour change days of week *********/
function updateDaysSelected(day) {
    if (daysSelected.includes(day)) {
        return;
    }
    daysSelected.push(day);
}

function updateDayCounter() {
    calculatedCost.innerHTML = daysSelected.length * dailyRate;
}

monday.addEventListener("click", function() {
    this.classList.toggle("clicked");
    updateDaysSelected("monday");
    updateDayCounter();
});

tuesday.addEventListener("click", function() {
    this.classList.toggle("clicked");
    updateDaysSelected("tuesday");
    updateDayCounter();
});

wednesday.addEventListener("click", function() {
    this.classList.toggle("clicked");
    updateDaysSelected("wednesday");
    updateDayCounter();
});

thursday.addEventListener("click", function() {
    this.classList.toggle("clicked");
    updateDaysSelected("thursday");
    updateDayCounter();
});

friday.addEventListener("click", function() {
    this.classList.toggle("clicked");
    updateDaysSelected("friday");
    updateDayCounter();
});

/********* clear days *********/
clearButton.addEventListener("click", function() {
    monday.classList.remove("clicked");
    tuesday.classList.remove("clicked");
    wednesday.classList.remove("clicked");
    thursday.classList.remove("clicked");
    friday.classList.remove("clicked");
    daysSelected = [];
    calculatedCost.innerHTML = 0;
    dailyRate = costPerDayFull;
    fullDayButton.classList.add("clicked");
    halfDayButton.classList.remove("clicked");
});

/********* change rate *********/
fullDayButton.addEventListener("click", function() {
    dailyRate = costPerDayFull;
    this.classList.add("clicked");
    halfDayButton.classList.remove("clicked");
    updateDayCounter();
});

halfDayButton.addEventListener("click", function() {
    dailyRate = costPerDayHalf;
    this.classList.add("clicked");
    fullDayButton.classList.remove("clicked");
    updateDayCounter();
});
