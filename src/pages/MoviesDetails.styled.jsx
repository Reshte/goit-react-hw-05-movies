import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Button = styled(NavLink)`
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
  border-bottom: 1px solid #ccc;
`
export const Poster = styled.img`
  display: block;
  width: 30vw;
  padding: 2px;
 
`
export const WrapperInfo = styled.div`
padding: 50px;
font-size: 16px;
width: 70vw;
`
