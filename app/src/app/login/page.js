
'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

function page() {
    const router= useRouter();
    const navigate=(name)=>{
      router.push(name)

    }
  return (
    <div>
      Login Page
      <br/>
      <Link  className= "font bold text-2xl "href="/">Go to Home Page</Link>
      <br/>
      <br/>
      <button className='border ' onClick={()=>navigate("/about")}>About Page</button>
    </div>
  )
}

export default page
