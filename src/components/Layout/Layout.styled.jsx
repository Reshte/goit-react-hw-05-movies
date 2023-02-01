import styled from '@emotion/styled'
import { NavLink } from "react-router-dom"

export const Container = styled.div`
/* display: flex;
justify-content: center;
align-items: center; */
padding: 30px 100px;
font-size: 40;
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
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;

  > nav {
    display: flex;
  }
`