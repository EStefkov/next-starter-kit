import Link from 'next/link'
import React from 'react'

import { getAllPosts } from '@/lib/posts'
import { ErrorBoundary } from 'next/dist/client/components/error-boundary'

const  Page =  async() => {
  

  const posts = await getAllPosts( ) 

  return (
   <section className='py-24'>
    <div className='container'>
      <h1 className='text-3x1 font-bold'>All blog posts</h1>
      <ul className='mt-12'>
        {posts.map(post=>(
          <li key={post.slug}>
            <Link href={`/posts/${post.slug}`}>
              <h4 className='text-lg font-medium'>
                
                {post.frontmatter?.title}
          
              </h4>
              <p className='text-sm text-gray-500'>
                sss
                
                {post.frontmatter?.author}
                
              </p>
            </Link>
          </li>
        ))
        }
      </ul>
    </div>
   </section>
  )
}

export default Page
