const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";
function getPosts() {
    fetch(POSTS_URL, { method: "GET" })
        .then((res) => {
        return res.json();
    })
        .then((data) => {
        const postIds = data.map((post) => {
            return post.id;
        });
        console.log({ postIds });
    })
        .catch((err) => console.log(`Error: ${err}`));
}
getPosts();
//# sourceMappingURL=app-fetch-demo.js.map