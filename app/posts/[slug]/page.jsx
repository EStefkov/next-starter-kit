import Pageviews from '@/app/components/Pageviews'
import { getAllPosts,getPostBySlug } from '@/lib/posts'
import { Suspense } from 'react'
// export async function generateStaticParams(){
//     const posts = await getAllPosts()

//     return posts.map(post =>({slug : post.slug}))
// }

const page = async ({params}) => {
    const {slug} = params

     const {content,frontmetter} = await getPostBySlug(slug)

  return (
   
    <section className='py-24'>
        <div className='container'>
            {/* Post frontmetter */}
            <header className='rounded bg-gray-100 p-8'>
                <h1 className='font-serif text-3x1'>{frontmetter?.title}</h1>
                <p className='mb-6 text-sm font-light uppercase leading-snug'> 
               author
                </p>
                <Suspense fallback={<div>Loading view count...</div>}>
                <Pageviews slug={slug}/>
                </Suspense>
            </header>
            <main className='prose mt-12'>{content}</main>
        </div>
    </section>

  )
}

export default page
