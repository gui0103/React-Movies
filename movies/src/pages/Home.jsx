import { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';

const apiURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

const Home = () => {

    const [topMovies, setTopMovies] = useState([])
    const getTopRatedMovies = async (url) => {
    
        const response = await fetch(url)
        const data = await response.json()

        setTopMovies(data.results)
    }

    useEffect(() => {

        const topRatedURL = `${apiURL}top_rated?${apiKey}`

        getTopRatedMovies(topRatedURL)

    }, [])

    return(
        <div className='container'>
            <h2 className="title">Best Rated Movies:</h2>
            <div className="movies-container">
                {topMovies.length === 0 && <p>Loading...</p>}
                {topMovies.length > 0 
                && topMovies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
            </div>
        </div>
    )
}

export default Home