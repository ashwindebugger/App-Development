import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <div className="flex justify-between items-center bg-red-300 text-black w-full h-[75px] p-8">
            <Link to='/'><h1 className="text-xl font-semibold ">Shooping Cart</h1></Link>
            <div className="flex justify-center items-center text-lg gap-5">
                <Link to='/login'><a>Sign In</a></Link>
                <Link to='/register'><a>Sign Up</a></Link>
            </div>
        </div>
    </div>
  )
}

export default Header