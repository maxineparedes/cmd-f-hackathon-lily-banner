const item = document.getElementById("toggle");

item.addEventListener("click", function changeColour(){
    document.body.classList.toggle("dark-theme");
});