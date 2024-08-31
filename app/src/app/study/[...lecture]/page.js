'use client'

import React from 'react';

function Page({params}) {
  return (
    <div>
      <h1 className='text-2xl font-bold m-3'>Lecture: 1</h1>
      <h2 className='text-xl font-bold m-3'>{params.lecture[0]}</h2>
      <h2 className='text-xl font-light m-3'>{params.lecture[1]}</h2>
      <h2 className='text-xl font-extralight m-3'>{params.lecture[2]}</h2>
    </div>
  );
}

export default Page;
