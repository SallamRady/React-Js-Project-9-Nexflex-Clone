import React, {useEffect, useState} from 'react';
import axios from "axios";
import './Row.scss';
import YouTube from "react-youtube";
import movieTrailer from 'movie-trailer';

function Row(props){
    //Declaration...
    const {title,fetchUrl,isLargeRow} = props;
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState('');
    const base_url = 'https://api.themoviedb.org/3';
    const poster_base_url = 'https://image.tmdb.org/t/p/original';
    const options ={
        width:'100%',
        height:'390',
        playerVars:{
            autoplay:1
        }
    }
    //Methods...
    useEffect(async ()=>{
        let url = base_url + fetchUrl;
        await axios.get(url).then(
            (response)=>setMovies(response.data.results)
        ).catch(
            err=>console.log(err.code)
        )
    },[])
    const handleClick = (movie)=>{
        // console.log(movie);
        if(trailerUrl){
            setTrailerUrl('');
        }else{
            movieTrailer(movie?.name || movie?.title || movie?.originalnam_name || '').then(
                (url)=>{
                    let urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get('v'));
                    // console.log(urlParams.get('v'))
                }
            ).catch(
                (err)=>console.log(err)
            )
        }
    }
    //return our view
    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className='row-posters'>
                {movies&&movies.map(
                    movie=>{
                        return (
                            <img
                                key={movie.id}
                                className={`row-poster ${isLargeRow && 'row-posterLarge'}`}
                                src={`${poster_base_url}${isLargeRow?movie.poster_path:movie.backdrop_path}`}
                                alt={movie.name}
                                onClick={()=>handleClick(movie)}
                                title={movie?.title || movie?.name || movie?.originalnam_name}
                            />
                        );
                    }
                )}
            </div>
            {trailerUrl&&<YouTube videoId={trailerUrl} opts={options}/> }
        </div>
    );
}

export default Row;