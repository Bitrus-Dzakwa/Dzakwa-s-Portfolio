//=========== toggle Style switcher =================
const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");
styleSwitcherToggler.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})
// hide style switcher on scroll 
window.addEventListener("scroll", () => {
    if(document.querySelector(".style-switcher").classList.contains("open"))
    {
    document.querySelector(".style-switcher").classList.remove("open");
    }
})
//=========== Theme Colors =================
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) 
{
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else 
        {
            style.setAttribute("disable","true");
        }
    }) 
}
//=========== Theme light and dark mode =================
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("light");   
})
window.addEventListener("load", () => {
    if(document.body.classList.constains("light"))
    {
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else 
    {
        dayNight.querySelector("i").classList.add("fa-moon");   
    }
})