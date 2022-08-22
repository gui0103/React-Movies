import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FiSearch } from 'react-icons/fi'
import { BsFillCameraReelsFill } from 'react-icons/bs'

import './css/NavBar.css'

const NavBar = () => {

  const [search, setSearch] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    if(!search) return

    navigate(`/search?q=${search}`)
    setSearch("")
  }
  return (
    <nav id="navbar">
    <h2>
      <Link to='/'><BsFillCameraReelsFill />React Movies</Link>
    </h2>
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder='search for a movie' 
        onChange={(e) => setSearch(e.target.value)} value={search} />
        <button type="submit">
            <FiSearch />
        </button>
    </form>
  </nav>
  )
}

export default NavBar