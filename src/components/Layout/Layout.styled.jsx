import styled from '@emotion/styled'
import { NavLink } from "react-router-dom"

export const Container = styled.div`
padding: 30px 100px;
font-size: 50;
color: #010101;


`
export const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: greenyellow;
  }
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  justify-content: center;
  gap: 12px;
  font-size: 30px;
  padding: 8px 0;
  margin-bottom: 16px;
  box-shadow: 0 20px 16px -16px rgba(0,0,0,0.6);

  > nav {
    display: flex;
  }
`