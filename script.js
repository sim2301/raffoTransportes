document.addEventListener("DOMContentLoaded", function() {
    const btnMenu = document.getElementById("btn-menu");
    const menu = document.querySelector(".menu");
    const iconBars = document.querySelector(".fa-bars");
    const iconTimes = document.querySelector(".fa-times");
    const label = document.querySelector("label");

    btnMenu.addEventListener("change", function() {
        if (this.checked) {
            menu.classList.add("active");
            iconBars.style.display = "none";
            iconTimes.style.display = "block";
        } else {
            menu.classList.remove("active");
            iconBars.style.display = "block";
            iconTimes.style.display = "none";
        }
    });

    menu.addEventListener("click", function(event) {
        if (event.target.tagName === "A") {
            btnMenu.checked = false;
            menu.classList.remove("active");
            iconBars.style.display = "block";
            iconTimes.style.display = "none";
        }
    });

    document.addEventListener("click", function(event) {
        if (btnMenu.checked && !menu.contains(event.target) && event.target !== btnMenu && event.target !== label) {
            btnMenu.checked = false;
            menu.classList.remove("active");
            iconBars.style.display = "block";
            iconTimes.style.display = "none";
        }
    });
});