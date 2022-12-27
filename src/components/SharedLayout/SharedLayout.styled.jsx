import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
`;

export const StyledLink = styled(NavLink)`
  font-size: 22px;
  color: black;
  padding: 12px;
  background-color: #babdba;
  border-radius: 25px;

  :last-child {
    margin-left: 20px;
  }

  :hover {
    background-color: #848684;
  }

  &.active {
    color: rgb(52, 26, 195);
  }
`;

export const NavWraper = styled.nav`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
