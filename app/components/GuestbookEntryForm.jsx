'use client'

import { useRouter } from "next/navigation"

import { useState,useTransition } from "react"

const GuestbookEntryForm = () => {

    const router = useRouter()
    const [isPending, startTransition] = useTransition()
    const [isFetching, setIsFetching] = useState(false)
    const isMutating = isFetching || isPending

     

    const handleSumbit = async (event) =>{
        event.preventDefault()
        const form = event.currentTarget
        const formData = new FormData(form)
        const {name, message} = Object.fromEntries(formData);
       
        if (!name || !message) return


        setIsFetching(true)

        const {error} = await fetch ('/api/guestbook',{
            method:'Post',
            headers:{
                'Content-type': 'application/json'
            },
            body: JSON.stringify({name,message})
        })

        form.reset()
        setIsFetching(false)
        startTransition(()=>{
            router.refresh  
        })

    }


  return (
    <form 
    className='flex max-w-sm flex-col gap-y-3 text-sm'
    onSubmit={handleSumbit}
    >

        <input 
        type='text' 
        name='name' 
        placeholder='Your name'
        className='rounded border bg-transparent px-3 py-2' />

        <input 
        type='text' 
        name='message' 
        placeholder='Your message'
        className='rounded border bg-transparent px-3 py-12' />

        <button type='submit'
        disabled={isMutating}
        className='rounded bg-black px-3 py-1 text-white'>
            Add
        </button>

    </form>
  )
}

export default GuestbookEntryForm
