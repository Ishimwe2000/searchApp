import {useEffect, useState, React} from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

//  d354df56
// the above is an API key
// Google API KEY: AIzaSyDL-fkgH2VnMn9glxZDo_kx6dbpqWdDcms
// const apikey = 'd354df56';

const API_URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    
    const searchMovies = async(title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();


        setMovies(data.Search);
        console.log(data);

    }
    useEffect(() => {
        searchMovies('The Titanic');
    }, []);
    // it worked!!
    return(
        <div className='app'>
            <h1>MovieLand</h1>

            <div className="search">
                <input
                   placeholder='Search for movies'
                    value={searchTerm}
                    onChange={(e)=> setSearchTerm(e.target.value)}
                ></input>
                <img
                src={SearchIcon}
                alt="search"
                onClick={()=> searchMovies(searchTerm)}>
                </img> 
            </div>

            { movies?.length > 0? (
                <div className="container">
                {movies.map((movie) => 
                <MovieCard movie={movie} />
            )}
            </div>) :
             (<div className="empty">
            <h2>No movies found</h2>
            </div>)
            }

            
        </div>
         
          
       
    );
}
export default App;