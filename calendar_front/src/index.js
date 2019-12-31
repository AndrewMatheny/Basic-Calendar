//Prev event listener
document.querySelector(".prev").addEventListener("click", function() {
    alert("Previous was clicked!")
})

//Next event listener
document.querySelector(".next").addEventListener("click", function() {
    alert("Next was clicked!")
})

//Generates event listener for every day - to be used to pull up modals for each day
document.querySelectorAll(".day").forEach(day => {
    day.addEventListener("click", function() {
        alert(`${day.innerHTML}`)
    })
})


var todayDateObj = new Date();
var month = todayDateObj.getMonth() + 1;
var day = todayDateObj.getDate();
var year = todayDateObj.getFullYear();
var dayOfWeek = todayDateObj.getDay();
var nameDay = ""
var nameMonth = ""
let newdate = month + "/" + day
var dateId = ""

//generates id for day of ddmmyyyy
function DaytoId(dateObject) {
    let obDay = dateObject.getDate();

    let obMonth = dateObject.getMonth() + 1
    let obYear = dateObject.getFullYear()
    return dateId = `${obDay}${obMonth}${obYear}`

}

//highlights current day with id based on system date
function activateCurrentDay() {
    let todayID = DaytoId(todayDateObj)
    let todayCard = document.getElementById(todayID)
    todayCard.innerHTML = `<span class="active"> ${day} </span>`
}

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
    } else if(numberOfDay == 4) {
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

//header generators that pull info from current system date
let current_date = document.querySelector(".current")
current_date.innerHTML = newdate

let current_day_of_week = document.querySelector(".dayOfWeek")
let nameOfDay = dayOfWeekToText(dayOfWeek)
current_day_of_week.innerHTML = nameDay

let current_month = document.querySelector(".nameOfMonth")
let nameOfMonth = monthToText(month)
current_month.innerHTML = nameMonth
//------------------------------------------------------------






// function createBlankDay() {
//    let daysUl = document.querySelector(".days")
//    daysUl.prependChild("li")
// }

activateCurrentDay()
// document.addEventListener("DOMContentLoaded", function() {
//     activateCurrentDay()
// })