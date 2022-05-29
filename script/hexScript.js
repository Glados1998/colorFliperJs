const hexArray = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

const btn = document.getElementById("hexBtn");
const color = document.querySelector(".hexColor");

btn.addEventListener("click", function() {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hexArray[Math.floor(Math.random() * hexArray.length)];
    }
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
});