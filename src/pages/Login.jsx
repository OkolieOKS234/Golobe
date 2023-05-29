import React from 'react'
import LoginImage from "../assets/login_img.png"
import AppleLogo from "../assets/apple.png"
import FacebookLogo from "../assets/facebook.png"
import GoogleLogo from "../assets/google.png"

const Login = () => {
  return (
    <div className='flex  items-center gap-24 mx-12'>
        <div className="mx-4">
            <h3 className='font-bold text-4xl mt-3'>Login</h3>
            <p className='text-extralight text-sm mb-6'>Login to access your Golobe account</p>
            <div className='flex flex-col gap-6'>
            <input type="text" placeholder='Enter your email address' className='border border-black w-96 h-9 rounded focus:outline-none' />
            <input type="password" placeholder='*********' className='border border-black w-96 h-9 rounded focus:outline-none' />
            </div>
            <div className='flex gap-24 my-2'>
                <div className='flex gap-2'>
                <input type="checkbox" name="remember" id="" className='cursor-pointer'/>
            <label htmlFor="">Remember me</label>
                </div>
                <div>
                    <p className='px-3 text-red-500'>Forgot Password?</p>
                </div>
            
            
            </div>
            <button className='bg-green-300 hover:bg-green-500 px-12 m-auto text-center w-96 mx-1 py-1'>Login</button>
        <p className='text-center my-2'>Don't have an account? <span className='text-red-400'>SignUp</span></p>
        {/* Social account login */}

    <p className='text-center text-sm my-3'>or Login with</p>
    <div className='flex gap-4 mx-auto w-96'>
        <img src={AppleLogo} alt="apple" className='h-10 hover:bg-green-200 cursor-pointer' />
        <img src={FacebookLogo} alt="facebook" className='h-10 hover:bg-green-200 cursor-pointer' />
        <img src={GoogleLogo} alt="google" className='h-10 hover:bg-green-200 cursor-pointer' />
    </div>
        
        </div>
        <div className='flex'>
            <img src={LoginImage} alt="" className=' w-[80%] my-3' />
        </div>
    </div>
  )
}

export default Login