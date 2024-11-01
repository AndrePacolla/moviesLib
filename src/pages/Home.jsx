import {useState , useEffect} from "react";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;



const Home = () => {
    const [topMovies, setTopMovies ] = useState([]);

    const getTopRateMovies = async (url) => {

        const res = await fecth(url);
        const data = await res.json();

        console.log(data)
    };

    useEffect(() => {
        const topRateUrl =`${moviesURL}top_rated?${apiKey}`;

    }, [])

   
    return (
        <div>
            HOME
        </div>
    ) 
}

export default Home;
