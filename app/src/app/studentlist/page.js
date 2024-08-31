import Link from 'next/link';
import React from 'react';

function Page() {
    return (
        <div className='m-3'>
            <h1 className='text-2xl font-bold'>Student List:</h1>
            <ul className='list-disc ml-6'>
                <li>
                    <Link href="/studentlist/shubham">Shubham</Link>
                </li>
                <li>
                    <Link href="/studentlist/rahul">Rahul</Link>
                </li>
                <li>
                    <Link href="/studentlist/ketan">Ketan</Link>
                </li>
                <li>
                    <Link href="/studentlist/shardha">Shardha</Link>
                </li>
                <li>
                    <Link href="/studentlist/noorani">Noorani</Link>
                </li>
            </ul>
        </div>
    );
}

export default Page;

