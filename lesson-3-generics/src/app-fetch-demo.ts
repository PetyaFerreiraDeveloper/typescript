const POSTS_URL = "https://jsonplaceholder.typicode.com/posts"

interface Post {
  userId: number
  id: number
  title: string
  body: string
}

function getPosts(): void {
  fetch(POSTS_URL, { method: "GET" })
    .then((res) => {
      return res.json()
    })
    .then((data: Post[]) => {
      const postIds = data.map((post) => {
        return post.id
      })
      console.log({ postIds })
    })
    .catch((err) => console.log(`Error: ${err}`))
}

getPosts()
