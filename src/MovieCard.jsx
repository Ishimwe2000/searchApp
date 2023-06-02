import React from 'react';


const MovieCard = ({ movie: {imdbID, Year, Poster, Title, Type } }) => {
  return (
      <div className="movie" key={imdbID}>
      <div>
          <p> {Year} </p>
          </div>
             
              <div>
                  <img src={Poster !=='N/A'? Poster : 'http://via.placeholder.com/400x400'} 
                       alt="movie poster" >
                  </img>
              </div>

              <div>
                  <span>{Type}</span>
                  <h3>{Title}</h3>
              </div>

          </div>
    
  )
}

export default MovieCard
//   object destructuring