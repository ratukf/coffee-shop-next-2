import { useEffect } from 'react'
import { NextPage } from 'next'
import { LargeNumberLike } from 'crypto'

interface BlogProps {
    userId: number
    id: number
}

const Blog: NextPage = () => {
    const fetchBlogs = async () => {
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/posts'
        )
        const data = await response.json()
    }

    useEffect(() => {
        fetchBlogs()
    }, [])

    return (
        <article className="blog">
            <h1 className="blog__title">Blog</h1>
        </article>
    )
}

export default Blog
