import React from 'react';
import Row from "../../components/row/Row";
import api from "../../api/api";
import Banner from "../../components/banner/Banner";
import './NetFlix-Show.css';
import Nav from "../../components/nav/Nav";

function Netflix_Show(){
    return (
        <div>
        {/*    Navbar   */}
            <Nav/>
        {/*    Banner   */}
            <Banner/>
        {/*    Rows   */}
            <div className='content-rows'>
                <Row title='Netflix Originals' fetchUrl={api.netflixOriginals} isLargeRow={true}/>
                <Row title='Trending Now' fetchUrl={api.trending}/>
                <Row title='Top Rated' fetchUrl={api.topRated}/>
                <Row title='Action Movies' fetchUrl={api.actionMovies}/>
                <Row title='Comedy Movies' fetchUrl={api.comedyMovies}/>
                <Row title='Romance Movies' fetchUrl={api.romanceMovies}/>
                <Row title='Documentaries Movies' fetchUrl={api.documentaries}/>
            </div>
        </div>
    );
}

export default Netflix_Show;