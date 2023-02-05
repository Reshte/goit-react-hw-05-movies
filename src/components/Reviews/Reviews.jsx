 import { useEffect, useState } from "react"
 import { getMovieReviews } from "../servises/Fetch"
 import { useParams } from "react-router-dom";
import {Loader} from 'components/Loader/Loader'
export const Reviews = () => {   
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        (async function () {
            setLoading(true)
        try {
            const reviews = await getMovieReviews(movieId)
            if (reviews.length > 0) { setReviews(reviews) } else {setError(true)}
                            } catch (error) {
          console.log(error)
            }
            setLoading(false)
        })()  
        
    },[movieId])

    return (
        <div>
            {loading && <Loader />}
            {error && <p>We don`t have any reviews for this movie</p>}
             {! error &&  <ul>         
               { reviews.map(({author,id,content})=>{return <li key={id}>
                <p>{author}</p>
                <p>{content}</p>
                </li>                   
                })
                 }
            </ul>}
        </div>
    )
}

export default Reviews;