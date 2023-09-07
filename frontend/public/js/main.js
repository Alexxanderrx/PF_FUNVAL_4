const toggleBar = document.getElementById("toggle");

const toggleSpin = document.getElementById("spin");

const btnOpen = document.getElementById("open");

let spin = false;

btnOpen.addEventListener("click", () => {
    toggleBar.classList.toggle("collapse");
    spin = (!spin);
    console.log(spin);
    if (spin == true) {
        toggleSpin.style.transform = "rotate(180deg)";
    } else if (spin == false) {
        toggleSpin.style.transform = "rotate(0deg)";
    }
});