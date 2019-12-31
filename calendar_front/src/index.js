document.querySelector(".prev").addEventListener("click", function() {
    alert("Previous was clicked!")
})

document.querySelector(".next").addEventListener("click", function() {
    alert("Next was clicked!")
})

document.querySelectorAll(".day").forEach(day => {
    day.addEventListener("click", function() {
        alert(`${day.innerHTML}`)
    })
})

var dateObj = new Date();
var month = dateObj.getMonth() + 1;
var day = dateObj.getDate();
var year = dateObj.getFullYear();
var dayOfWeek = dateObj.getDay();
var nameDay = ""
var nameMonth = ""
let newdate = month + "/" + day

//gets day of week from system and converts to name of the weekday
function dayOfWeekToText(numberOfDay) {
    if (numberOfDay == 0) {
        nameDay = "Sunday"
    } else if (numberOfDay == 1) {
        nameDay = "Monday"
    } else if(numberOfDay == 2) {
        nameDay = "Tuesday"
    } else if(numberOfDay == 3) {
        nameDay = "Wednesday"
    } else if(numberofDay == 4) {
        nameDay = "Thursday"
    } else if(numberOfDay == 5) {
        nameDay = "Friday"
    } else if(numberOfDay == 6) {
        nameDay = "Saturday"
    }
}

//Gets month number from system and converts to the month name
function monthToText(numberOfMonth) {
    if (numberOfMonth == 1) {
        nameMonth = "January"
    } else if(numberOfMonth == 2) {
        nameMonth = "February"
    } else if(numberOfMonth == 3) {
        nameMonth = "March"
    } else if(numberOfMonth == 4) {
        nameMonth = "April"
    } else if(numberOfMonth == 5) {
        nameMonth = "May"
    } else if(numberOfMonth == 6) {
        nameMonth = "June"
    } else if(numberOfMonth == 7) {
        nameMonth = "July"
    } else if(numberOfMonth == 8) {
        nameMonth = "August"
    } else if(numberOfMonth == 9) {
        nameMonth = "September"
    } else if(numberOfMonth == 10) {
        nameMonth = "October"
    } else if(numberOfMonth == 11) {
        nameMonth = "November"
    } else if(numberOfMonth == 12) {
        nameMonth = "December"
    }
}

let current_date = document.querySelector(".current")
current_date.innerHTML = newdate

let current_day_of_week = document.querySelector(".dayOfWeek")
let nameOfDay = dayOfWeekToText(dayOfWeek)
current_day_of_week.innerHTML = nameDay

let current_month = document.querySelector(".nameOfMonth")
let nameOfMonth = monthToText(month)
current_month.innerHTML = nameMonth

