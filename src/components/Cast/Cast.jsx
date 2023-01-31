import { getMovieCredits } from "../servises/Fetch"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";


export function Cast() {
const { movieId } = useParams();
const [actors, setActors] = useState([])

    useEffect(() => {
        if (movieId) {
            (async function () {
        try {
          const credits = await getMovieCredits(movieId)
          setActors(credits)
        } catch (error) {
          console.log(error)
             }
        })()
            
        }
    },[movieId])

    console.log(actors)
    return (
        <div>
            <ul>
          {actors.map(({name,character,profile_path,id}) =>{ return(
            <li key ={id}>
                <img src={`http://image.tmdb.org/t/p/w200/${profile_path}`} alt="" />
                <p>{name}</p>
                <p>{character}</p>
            </li>
          )})}
            </ul>
        </div>
    )
}