import { GetStaticProps, GetStaticPaths } from 'next'

interface BlogPostProps {
  post: { id: number; title: string; body: string }
}

export default function BlogPost({ post }: BlogPostProps) {
  console.log(888888, 'the blog post json was there at build time')
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  // Fetch a list of blog post IDs from an API
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json())
  // console.log(99919, posts)

  // Create paths for each post
  const paths = posts.map((post: { id: number }) => ({
    params: { slug: post.id.toString() },
  }))

  return {
    paths,
    fallback: false, // Show 404 page if path is not found
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  console.log(99934, params)

  const { slug } = params!
  const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`).then((res) =>
    res.json()
  )

  return {
    props: {
      post,
      fallback: true
    },
  }
}
