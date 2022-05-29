const colorArray = ["red", "green", "blue", "orange", "purple", "yellow", "pink", "brown", "black", "grey"];
const flipperBtn = document.getElementById('flipperBtn');
const flipperColor = document.querySelector('.flipperColor');

flipperBtn.addEventListener('click', function() {

    const randomNumber = randomColor();
    document.body.style.backgroundColor = colorArray[randomNumber];
    flipperColor.textContent = colorArray[randomNumber];
});

function randomColor() {
    return Math.floor(Math.random() * colorArray.length);
}

