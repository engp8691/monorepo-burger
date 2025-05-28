import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function BlogPost({ params }: { params: { slug: string } }) {
    const { slug } = await params
    const cookieStore = await cookies()
    const token = cookieStore.get('token')?.value
    console.log(99997, token)

    if (!token) {
        redirect('/login')
        return null
    }

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`, {
        headers: { Authorization: `Bearer ${token}` },
        cache: 'no-store'
    })

    const post = await res.json()
    return <div>{post.title}</div>
}
