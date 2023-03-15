import { getMovieCredits } from "../servises/Fetch"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';


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
       <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 5, md: 5 }}>
            {actors.map(({ name, character, profile_path, id }) => {
            return ( <Grid xs={2}>
          <Card sx={{ MaxWidth: 200 }} key ={id}>
        <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={`http://image.tmdb.org/t/p/w200/${profile_path}`}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h7" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {character}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        </Grid>    
          )})}
       </Grid>
    </Box>
  );
}
  
export default Cast;



