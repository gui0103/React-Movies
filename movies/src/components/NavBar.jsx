import React from 'react'
import { Link } from 'react-router-dom'
import { FiSearch } from 'react-icons/fi'
import { BsFillCameraReelsFill } from 'react-icons/bs'

import './css/NavBar.css'

const NavBar = () => {
  return (
    <nav id="NavBar">
    <h2>
      <Link to='/'><BsFillCameraReelsFill />React Movies</Link>
    </h2>
    <form>
        <input type="text" placeholder='search for a movie' />
        <button type="submit">
            <FiSearch />
        </button>
    </form>
  </nav>
  )
}

export default NavBar