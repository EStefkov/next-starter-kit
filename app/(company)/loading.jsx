import { wait } from '@/lib/posts'
import React from 'react'

const Loading = async() => {

    await wait(500)
  return (
    <div>
      Loading
    </div>
  )
}

export default Loading
