const changingText = document.getElementById("changing-text");

function getRandomString(length) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
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

    const randomString = getRandomString(15);
    changingText.textContent = randomString;
};
