document.addEventListener("DOMContentLoaded", function() {
    const toggleOn = document.querySelector(".fa-toggle-on");
    const toggleOff = document.querySelector(".fa-toggle-off");
    const body = document.querySelector("body");

    toggleOn.addEventListener("click", function() {
        body.classList.add("dark-mode");
    });

    toggleOff.addEventListener("click", function() {
        body.classList.remove("dark-mode");
    });
});


