import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 16px;
  border-radius: 4px;
  color: black;
  text-decoration: none;
  font-weight: 500;
  :hover {
    color: greenyellow;
  }
`;

export const Container = styled.div`
  display: flex;
  padding-bottom: 5px;
  margin-bottom: 15px;
 box-shadow: 0 20px 16px -16px rgba(0,0,0,0.6);
 
 `
 export const PosterWrapper = styled.div`
  width: 30vw;
  padding: 30px;
   
`
export const Poster = styled.img`
  display: block;
    `
export const WrapperInfo = styled.div`
padding: 50px;
font-size: 16px;
width: 70vw;
`
