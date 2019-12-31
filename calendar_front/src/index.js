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

newdate = month + "/" + day

let current_date = document.querySelector(".current")
current_date.innerHTML = newdate