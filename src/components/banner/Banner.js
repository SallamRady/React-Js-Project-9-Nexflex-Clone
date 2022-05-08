import React, {useEffect, useState} from 'react';
import axios from "axios";
import api from "../../api/api";
import './Banner.scss';

function Banner(){
    //Declaration...
    const [movie, setMovie] = useState({});
    const url = 'https://api.themoviedb.org/3'+api.netflixOriginals;
    //Methods...
    useEffect(async () => {
        await axios.get(url).then(
            res=>{
                let len = res.data.results.length-1;
                let index = Math.floor(Math.random()*len);
                setMovie(res.data.results[index])
            }
        ).catch(
            (err)=>console.log(err.code)
        )
    }, []);

    const turncate = (str,allowedLen)=>{
        return str.length > allowedLen ? str.substr(0,allowedLen-1) : str;
    }
    //return view...
    return (
        <header
            className='banner'
            style={{
                backgroundSize:'cover',
                backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition:'center center'
            }}
        >
            <div className='banner-contents'>
                <h1 className='banner-title'>
                    {movie?.title || movie?.name || movie?.originalnam_name}
                </h1>
                <div className='banner-buttons'>
                    <button className='banner-button'>Play</button>
                    <button className='banner-button'>My List</button>
                </div>
                <p className='banner-description'>
                    {movie?.overview}
                </p>
                <div className='banner-fadebottom'></div>
            </div>
        </header>
    );
}

export default Banner;