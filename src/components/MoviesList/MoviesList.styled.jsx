import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'

export const Wrapper = styled.ul`
    display:flex;
    gap:20px;
    justify-content: center;
    flex-wrap:wrap;
`

export const CardWrapper = styled.li`
    list-style:none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0 1px 4px rgba(0,0,0,0.3), -23px 0 20px -23px rgba(0,0,0,0.8), 23px 0 20px -23px rgba(0,0,0,0.8), 0 0 40px rgba(0,0,0,0.1) inset;   

`

export const Link = styled(NavLink)`
    text-decoration:none;
    
`

export const Poster = styled.img`
    /* margin-bottom: 10px; */

    width: 280px;
    height: 402px;
    overflow:overlay;
    border-radius: 5px;
`

export const MovieName = styled.h2`
   margin-bottom: 4px;
font-size: 20px;
line-height: 1.17;
width:170px;
white-space:pre-wrap;
text-align: center;
color:black;
margin: 0 auto;
padding: 10px 25px;
`
