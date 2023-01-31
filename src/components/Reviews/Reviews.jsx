 import { useEffect, useState } from "react"
 import { getMovieReviews } from "../servises/Fetch"
 import { useParams } from "react-router-dom";

export function Reviews() {   
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        (async function () {
        try {
          const reviews = await getMovieReviews(movieId)
          console.log(reviews)
          setReviews(reviews)
        } catch (error) {
          console.log(error)
            console.log(",kf,kf")
             }
        })()               
    },[movieId])

    return (
        <div>
            <ul>
                {reviews.map(({author,id,content})=>{return  <li key={id}>
                        <p>{author}</p>
                        <p>{content}</p>
                    </li>                   
                })}
            </ul>
        </div>
    )
}