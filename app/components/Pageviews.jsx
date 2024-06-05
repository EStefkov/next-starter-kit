import { wait } from '@/lib/posts'
import React from 'react'


const Pageviews = async({slug}) => {
    //fetch page view conts from db
    //const views =  await getPageview(slug)

    await wait(1000)

  return (
    <div>
      views: 100
    </div>
  )
}

export default Pageviews
