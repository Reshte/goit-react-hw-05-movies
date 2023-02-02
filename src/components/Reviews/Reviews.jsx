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
          setReviews(reviews)
        } catch (error) {
          console.log(error)
          
             }
        })()               
    },[movieId])
console.log(reviews)
    return (
        <div>
            <ul>

                {reviews.length > 0 ? (reviews.map(({author,id,content})=>{return  <li key={id}>
                        <p>{author}</p>
                        <p>{content}</p>
                    </li>                   
                })
      ) : (
        <p>We don`t have any reviews for this movie</p>
      )}
                
            </ul>
        </div>
    )
}