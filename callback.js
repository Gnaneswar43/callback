// callbacks.js
document.getElementById("callbackButton").addEventListener("click", () => {
    executeCallback((message) => {
        document.getElementById("callbackResult").textContent = message;
    });
});

function executeCallback(callback) {
    setTimeout(() => {
        callback("Callback executed after 5 seconds");
    }, 5000);
}

function executeCallback(callback) {
    setTimeout(() => {
        fetch("https://dummyjson.com/posts")
            .then(response => response.json())
            .then(data => {
                const postTitles = data.posts.map(post => post.title).join(", ");
                callback(`Posts: ${postTitles}`);
            });
    }, 5000);
}
