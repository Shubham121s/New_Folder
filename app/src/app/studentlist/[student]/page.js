'use client'


import React from 'react'

function page({params}) {
  return (
    <div>
        <h1 className='text-2xl font-bold m-3'>Student Details:</h1>
        <h3>NAME:{params.student}</h3>
      
    </div>
  )
}

export default page
