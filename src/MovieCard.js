import React from 'react'
import './card.css'

const MovieCard = (props) => {
    const API_IMG = "https://image.tmdb.org/t/p/w500/"
    return (
        <div className='card'>
            <div className='poster'>
                <img src= {props.poster_path ? API_IMG + props.poster_path : "https://images.unsplash.com/photo-1540224871915-bc8ffb782bdf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fGNpbmVtYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"} alt=''/>
            </div>

            <div className='info'>
                <p className='titel'>{props.name}</p>
                <p className='vote'>{props.vote_average}</p>
            </div>
            <div className='overView'>
                <h2 className='overView_info'> overview: </h2>
                <h3 className='overView_info'>{props.overview} </h3>
            </div>
        </div>
    )
}

export default MovieCard

