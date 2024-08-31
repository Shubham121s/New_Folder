'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

function page() {
    const router = useRouter()
  return (
    <div>
      About Page
      <br/>
      <br/>
      <br/>
      <Link href="/">Go to Home Page</Link>
      <br/>
      <br/>
      <br/>
      <button className='border bg-red-500' onClick={()=>router.push("/")}>Home PAge</button>

    </div>
  )
}

export default page
