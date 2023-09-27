const textArray = [
    "Text 1",
    "Text 2",
    "Text 3",
    "Text 4",
    // Add more text values here
];

const changingText = document.getElementById("changing-text");

function getRandomText() {
    const randomIndex = Math.floor(Math.random() * textArray.length);
    return textArray[randomIndex];
}

window.onload = function () {
    changingText.textContent = getRandomText();
};
