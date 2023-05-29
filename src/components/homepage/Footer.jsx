import React from 'react'
import SubscribeImg from "../../assets/subscribe_img.png"

const Footer = () => {
  return (
    <footer>
        {/* Subscribe */}
        <div className='flex shadow-lg bg-green-300 w-2/3 gap-6 m-auto rounded-lg p-3 relative -mb-9 mt-2 h-72'>
<div className='m-auto'>
    <h3 className='w-96 text-3xl font-bold'>Subscribe to our Newsletter</h3>
<p className=' font-normal'>Globe Travels</p>
<p className=' font-thin text-xs pb-2'>Get inspired! Receive travel discounts, tips and behind the scenes stories.</p>
<div className='flex gap-3'>
<input type="email" className=' w-64' />
<button className='px-3 py-1 bg-green-400'>Subscribe</button>
</div>
</div>
{/* Image */}
<div>
<img src={SubscribeImg} alt="" />
</div>
        </div>

        <div className='bg-green-500 py-12 '>
<ul>
    <li>One</li>
    <li>Two</li>
    <li></li>
    <li></li>
</ul>
        </div>
    </footer>
  )
}

export default Footer