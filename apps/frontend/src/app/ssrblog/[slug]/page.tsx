import { cookies } from 'next/headers'

export default async function BlogPost({ params }: { params: { slug: string } }) {
    const { slug } = await params
    const cookieStore = await cookies()
    const token = cookieStore.get('token')?.value

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`, {
        headers: { Authorization: `Bearer ${token}` },
        cache: 'no-store'
    })

    const post = await res.json()
    return <div>{post.title}</div>
}
