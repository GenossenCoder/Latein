import React from 'react'
import Logo from '../Images/Logo.svg'

const Header = () => {
  return (
    <div className="flex items-center justify-center text font-medium p-2 bg-emerald-400  shadow-sm">
        <img className="w-8" src={Logo}/>
        <h1 className="text text-7xl p-2">Die Giganten </h1>
    </div>
  )
}

export default Header