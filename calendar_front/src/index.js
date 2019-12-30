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
