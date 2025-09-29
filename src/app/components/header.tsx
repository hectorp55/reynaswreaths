import React from 'react';
import NavBar from './nav-bar';
import Image from 'next/image';

function Header() {
  return (
    <header>
      <h1 className="flex justify-center w-full">
        <span className="flex justify-center p-5">
            <Image src="/logo.png" width={200} height={200} alt="Wreaths by Reyna logo"></Image>
        </span>
      </h1>
      <NavBar/>
    </header>
  )
}

export default Header