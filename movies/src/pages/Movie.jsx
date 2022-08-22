import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { BsGraphUp, BsWallet2, BsHourglassSplit, BsFillFileEarmarkTextFill, } from "react-icons/bs"
import { IoStar } from 'react-icons/io5'
import MovieCard from "../components/MovieCard"
import "../components/css/Movie.css"

const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY
const imageURL = import.meta.env.VITE_IMG

const Movie = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)

  const getMovie = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)
    setMovie(data)
  }

  const formatCurrency = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    })
  }

  useEffect(() => {
    const movieUrl = `${moviesURL}${id}?${apiKey}`
    getMovie(movieUrl)
  }, [])

  return (
    <div className="movie-page">
      {movie && (
        <>
        <div className='movie-card'>
            <img src={imageURL + movie.poster_path} alt={movie.title} />
        </div>

        <div className="div-content">
            
            <div className="div-main-info">
                <h2>{movie.title}</h2>
                <p className='rateText'>
                    <IoStar />
                    <h4>{movie.vote_average.toFixed(1)}</h4>
                </p>
            </div>

            <p className="tagline">{movie.tagline}</p>

            <div className="info">
                <h3>
                    <BsWallet2 /> Budget:
                </h3>
                <p>{formatCurrency(movie.budget)}</p>
            </div>
            <div className="info">
                <h3>
                    <BsGraphUp /> Box Office:
                </h3>
                <p>{formatCurrency(movie.revenue)}</p>
            </div>
            <div className="info">
                <h3>
                    <BsHourglassSplit /> Running Time:
                </h3>
                <p>{movie.runtime} minutes</p>
            </div>
            <div className="info description">
                <h3>
                    <BsFillFileEarmarkTextFill /> Overview:
                </h3>
                <p>{movie.overview}</p>
            </div>
        </div>
        </>
      )}
    </div>
  )
}

export default Movie