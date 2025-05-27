import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'

interface Post {
  id: number
  title: string
  body: string
}

interface BlogPostProps {
  post?: Post
}

export default function BlogPost({ post }: BlogPostProps) {
  const router = useRouter()

  if (router.isFallback) {
    return <p>Loading post...</p>
  }

  if (!post) {
    return <p>Post not found.</p>
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  // Fetch only first 3 posts for build-time generation
  const posts: Post[] = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3').then(res => res.json())

  const paths = posts.map(post => ({
    params: { slug: post.id.toString() },
  }))

  return {
    paths,
    // fallback: false
    fallback: true, // fallback enabled
    // fallback: 'blocking'

    // fallback	Initial behavior for missing paths	SEO Friendly?	UX	Caching
    // false	404 page	✅	Fast, no loading screen	Static
    // true	Show loading fallback, then fetch & render	❌ (loading fallback)	Loading screen on first visit	Cached after first visit
    // 'blocking'	Wait server-side, then send full page	✅	Wait longer on first load, no loading screen	Cached after first visit
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string

  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`)
    
    if (!res.ok) {
      return { notFound: true }
    }

    const post: Post = await res.json()

    if (!post?.id) {
      return { notFound: true }
    }

    return {
      props: {
        post,
      },
      revalidate: 30,
    }
  } catch (error) {
    return { notFound: true }
  }
}
