import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
    BsGgrapUp,
    BsWallet2,
    BsHoursglassSplit,
    BsFillFilEarmarkTextFill 
} from "react-icons/bs";

import MovieCard from "../components/MovieCard";

import "./Movie.css"

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;


const Movie = () => {
    const {id} = useParams();
    const [movie, setMovie] = useState(null);

    const getMovie = async(url) => {

        const res = await fetch(url);
        const data = await res.json();

        setMovie(data.results);
    }    


    return (
        <div>
            MOVIE
        </div>
    ) 
}

export default Movie;