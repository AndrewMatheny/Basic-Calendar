//Prev event listener
document.querySelector(".prev").addEventListener("click", function() {
    generatePrevMonth()
})

//Next event listener
document.querySelector(".next").addEventListener("click", function() {
    generateNextMonth()
})

//Generates event listener for every day - to be used to pull up modals for each day
function addDayListeners() {
    document.querySelectorAll(".day").forEach(day => {
        day.addEventListener("click", function() {
            alert(`${day.innerHTML}`)
        })
    })
}


var todayDateObj = new Date();
var month = todayDateObj.getMonth() + 1;
var day = todayDateObj.getDate();
var year = todayDateObj.getFullYear();
var dayOfWeek = todayDateObj.getDay();
var nameDay = ""
var nameMonth = ""
let newdate = month + "/" + day
var dateId = ""
const daysUl = document.querySelector(".days")
var thisMonth = month
var thisYear = year
var aDateObject = todayDateObj
//const li = document.createElement("li")
// let firstDayOfMonthObject = ""
// let firstDayOfMonth = ""

//generates id for day of ddmmyyyy
function dayToId(dateObject) {
    let obDay = dateObject.getDate();

    let obMonth = dateObject.getMonth() + 1
    let obYear = dateObject.getFullYear()
    return dateId = `${obDay}-${obMonth}-${obYear}`

}

// function checkAllDaysIds() {
//     daysUl
// }

// function checkIdAgainstMonth(dayId, monthNum) {

// }

function getDayNumber(dateObject) {
    return dateObject.getDate()
}

//highlights current day with id based on system date
function activateCurrentDay() {
    let todayID = dayToId(todayDateObj)
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
    return nameDay
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
// let current_date = document.querySelector(".current")
// current_date.innerHTML = newdate

// let current_day_of_week = document.querySelector(".dayOfWeek")
// let nameOfDay = dayOfWeekToText(dayOfWeek)
// current_day_of_week.innerHTML = nameDay

let current_month = document.querySelector(".nameOfMonth")
let nameOfMonth = monthToText(month)
current_month.innerHTML = nameMonth

let current_year = document.querySelector(".year")
current_year.innerHTML = year
//------------------------------------------------------------

//returns date object for different day -- This is wrong - saving for info
// function createDateObjByDayDifference(numberOfDays) {
//     return new Date((new Date()).getTime() + (numberOfDays * 86400000))
// }


function createBlankDay() {
   //let daysUl = document.querySelector(".days")
//    const li = document.createElement("li")
    let blankLi = document.createElement("li")
    blankLi.textContent = "'"
    blankLi.className = "blankDay"
   daysUl.appendChild(blankLi)
   return daysUl
}

function createMultipleBlankDays(number){
    for(let i=0; i<number; i++ ) {
        createBlankDay()
    }
}

function createDay(dateObject) {
    let theDayId = dayToId(dateObject)
    let theDayNumber = getDayNumber(dateObject)
    let thisLi = document.createElement("li")
    thisLi.className = "day"
    thisLi.textContent = theDayNumber
    thisLi.id = theDayId
    daysUl.appendChild(thisLi)
    return daysUl
    
}

//creates a new date object by difference in days given a date object and the day difference
function createDateObjectWithDifference(dateObject, diffInDays) {
    return new Date(dateObject.getTime() + (diffInDays * 86400000))
}

function findFirstOfMonthDayName(dateObject) {
    let startDayObject = dateObject
    let startDay = dateObject.getDate()
    let firstDay = null
    let firstDayObject = null
    if(startDay == 1) {
        // firstDay = startDay
        firstDayObject = startDayObject
        firstDay = firstDayObject.getDay()
        return dayOfWeekToText(firstDay)
    } else {
        let dayDifference = 1 - startDay
        // firstDayObject = createDateObjByDayDifference(dayDifference)
        firstDayObject = createDateObjectWithDifference(startDayObject, dayDifference)
        firstDay = firstDayObject.getDay()
        return dayOfWeekToText(firstDay)
        
    }

    // firstdayofMonthObject = firstDayObject
    // firstDayOfMonth = firstDay
    // let firstOfMonthName = dayOfWeekToText(firstDayObject.getDate())
    // return firstOfMonthName
    
}

function findFirstOfMonthDayObject(dateObject) {
    let startDayObject = dateObject
    let startDay = dateObject.getDate()
    let firstDay = null
    let firstDayObject = null
    if(startDay == 1) {
        // firstDay = startDay
        firstDayObject = startDayObject
        firstDay = firstDayObject.getDay()
        return firstDayObject
    } else {
        let dayDifference = 1 - startDay
        // firstDayObject = createDateObjByDayDifference(dayDifference)
        firstDayObject = createDateObjectWithDifference(startDayObject, dayDifference)
        firstDay = firstDayObject.getDay()
        return firstDayObject
        
    }
    
}


function generateMonth(dateObject) {
    let firstOfMonth = findFirstOfMonthDayName(dateObject)
    let firstOfMonthObject = findFirstOfMonthDayObject(dateObject)
    if(firstOfMonth == "Sunday") {
        generateDays(firstOfMonthObject)
    } else if (firstOfMonth == "Monday") {
        createBlankDay()
        generateDays(firstOfMonthObject)
    } else if (firstOfMonth == "Tuesday") {
        createMultipleBlankDays(2)
        generateDays(firstOfMonthObject)
    } else if (firstOfMonth == "Wednesday") {
        createMultipleBlankDays(3)
        generateDays(firstOfMonthObject)
    } else if (firstOfMonth == "Thursday") {
        createMultipleBlankDays(4)
        generateDays(firstOfMonthObject)
    } else if (firstOfMonth == "Friday") {
        createMultipleBlankDays(5)
        generateDays(firstOfMonthObject)
    } else if (firstOfMonth == "Saturday") {
        createMultipleBlankDays(6)
        generateDays(firstOfMonthObject)
    }

}

function generateDays(firstDateObjectOfMonth) {
    let numberOfDaysInMonth = howManyDaysInMonth(firstDateObjectOfMonth)
    for(let i = 0; i < (numberOfDaysInMonth); i++) {
        let eachDay = createDateObjectWithDifference(firstDateObjectOfMonth, i)
        createDay(eachDay)
        
    }
    
}

//currently doesn't account for leap years
function howManyDaysInMonth(dateObject) {
    thisMonth = dateObject.getMonth() + 1
    if(thisMonth == 1 || thisMonth == 3 || thisMonth == 5 || thisMonth == 7 || thisMonth == 8 || thisMonth == 10 || thisMonth == 12) {
        return 31
    } else if (thisMonth == 4 || thisMonth == 6 || thisMonth == 9 || thisMonth == 11) {
        return 30
    } else if (thisMonth == 2) {
        // return 28
        if(thisYear % 4 === 0) {
            return 29
        }else {
            return 28
        }
        
    }
}

function generateNextMonth() {
    daysUl.innerHTML = ""
    // aDateObject.setMonth(aDateObject.getMonth() + monthDiff)
    // return aDateObject

    if (aDateObject.getMonth() == 11) {
        var current = new Date(aDateObject.getFullYear() + 1, 0, 1);
        aDateObject = current
    } else {
        var current = new Date(aDateObject.getFullYear(), aDateObject.getMonth() + 1, 1);
        aDateObject = current
    }
    generateMonth(current)
    nameOfMonth = monthToText(aDateObject.getMonth()+1)
    current_month.innerHTML = nameMonth
    current_year.innerHTML = aDateObject.getFullYear()
    addDayListeners()
    if(aDateObject.getMonth()+1 == month) {
        activateCurrentDay()
    }

    

}

function generatePrevMonth() {
    daysUl.innerHTML = ""

    aDateObject = findFirstOfMonthDayObject(aDateObject)
    aDateObject.setMonth(aDateObject.getMonth() - 1)
    generateMonth(aDateObject)

    

    nameOfMonth = monthToText(aDateObject.getMonth()+1)
    current_month.innerHTML = nameMonth
    current_year.innerHTML = aDateObject.getFullYear()
    addDayListeners()
    if(aDateObject.getMonth()+1 == month) {
        activateCurrentDay()
    }


}


generateMonth(todayDateObj)
document.addEventListener("DOMContentLoaded", function() {
    activateCurrentDay()
    addDayListeners()
})


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
