import React from 'react'

function NavBar() {
  return (
    <nav className="flex justify-between gap-10 bg-(--apricot) px-5 sm:px-[15%] py-1 text-white text-lg">
      <a>New Arrivals</a>
      <a>Upcoming</a>
      <a>Shop</a>
    </nav>
  )
}

export default NavBar