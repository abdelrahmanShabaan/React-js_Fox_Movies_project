import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";


function MovieDetails(){


             //SAVE THE USER ID From Use params
             const movieId = useParams();
    
                  //console.log(userId);
                  const [movieInfo , setMovieInfo] = useState({})


                //useEffect to loops in the data
                useEffect(()=> {
                    //then axios
                    axios(`https://api.themoviedb.org/3/movie/popular?api_key=eadbf752e3a5b90a3cf4a4afc0cb7e46/data/result/${movieId.id}`)
                    .then((res)=> {setMovieInfo(res.data.results)})
                    .catch((err) => console.log(err));

                },[])

    return(
        <>

            <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="..." alt="Card image cap"/>
            <div class="card-body">
                <h5 class="card-title">{movieInfo.title}</h5>
                <p class="card-text">{movieInfo.overview}</p>
            </div>
            </div>

        
        </>
    )
}

export default MovieDetails;