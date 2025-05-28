// import dynamic from 'next/dynamic'
import { notFound } from 'next/navigation'

export const dynamicParams = false // Generate 404 if param is not in generateStaticParams
export const revalidate = 50

type BlogPostProps = {
  params: { slug: string }
}

// The simple version
// export async function generateStaticParams() {
//   return [{ slug: 'post-1' }, { slug: 'post-2' }];
// }
// export default async function BlogPost({ params }: BlogPostProps) {
//   const { slug } = params
//   return <div>Blog Post: {slug}</div>;
// }

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
