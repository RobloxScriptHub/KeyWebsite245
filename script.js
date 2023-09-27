const changingText = document.getElementById("changing-text");
let randomString = '';

function getRandomString(length) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

// Function to update the text content with a new random string
function updateRandomString() {
    randomString = getRandomString(15);
    changingText.textContent = randomString;
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

    // Initialize the random string and update it every 15 seconds
    updateRandomString();
    setInterval(updateRandomString, 15000); // 15 seconds (15,000 milliseconds)
};

// Add this code to keep the same string if the page is refreshed within 15 seconds
window.addEventListener('load', function () {
    setInterval(function () {
        updateRandomString();
    }, 15000); // 15 seconds (15,000 milliseconds)
});

