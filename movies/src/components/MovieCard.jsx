import { Link } from 'react-router-dom'
import { IoStar } from 'react-icons/io5'

import './css/MovieGrid.css'

const imageURL = import.meta.env.VITE_IMG

const MovieCard = ({movie, showLink = true}) => {
  return (
    <div className='movie-card'>
        <img src={imageURL + movie.poster_path} alt={movie.title} />
        <h2>{movie.title}</h2>
        <p className='rateText'>
            <IoStar />
            <h4>{movie.vote_average}</h4>
        </p>
        {showLink && <Link to={`/movie/${movie.id}`}>Details</Link>}
    </div>
  )
}

export default MovieCard