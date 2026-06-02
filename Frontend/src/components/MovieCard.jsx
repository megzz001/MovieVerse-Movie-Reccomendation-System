import React from 'react'

const MovieCard = ({movie}) => {

    function AddToFavourites() {
        alert("Added to favourites");

    }
    return (
        <div>
            <div className="movie-card">
                <div className="movie-poster">
                    <img src={movie.url} alt={movie.title} />
                    <div className="movie-overlay">
                        <button className="favourite" onClick={AddToFavourites}> 🤍</button>
                    </div>
                    <div className="movie-info">
                        <h3>{movie.title}</h3>
                        <p>{movie.release_date}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieCard