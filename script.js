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

// Show a message when the user bookmarks the page
window.addEventListener('DOMContentLoaded', function () {
    if (window.location.hash !== '#no-bookmark') {
        window.location.hash = 'no-bookmark';
        alert('Bookmarking is not allowed on this page.');
    }
});

window.onload = function () {
    // Prevent bookmarking when leaving or refreshing the page
    window.addEventListener('beforeunload', function (e) {
        e.preventDefault();
        e.returnValue = '';
    });

    changingText.textContent = getRandomText();
};
