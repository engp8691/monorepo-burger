// app/blog/[slug]/page.tsx
import { notFound } from 'next/navigation'

type BlogPostProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()

  return posts.slice(0, 5).map((post: {id: number}) => ({
    slug: post.id.toString(),
  }))
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = await params
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`, {
    cache: 'force-cache', // Enables SSG
  })

  if (!res.ok) {
    notFound()
  }

  const post = await res.json()

  if (!post?.id) {
    notFound()
  }

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </article>
  )
}
