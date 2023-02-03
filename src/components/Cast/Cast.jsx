import { getMovieCredits } from "../servises/Fetch"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { Wrapper, ActorFoto } from "./Cast.styled";


export const Cast =()=>{
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

    return (
        <Wrapper>
            <ul>
          {actors.map(({name,character,profile_path,id}) =>{ return(
            <li key ={id}>
                <ActorFoto src={`http://image.tmdb.org/t/p/w200/${profile_path}`} alt="" />
                <p>{name}</p>
                <p>{character}</p>
            </li>
          )})}
            </ul>
        </Wrapper>
    )
}