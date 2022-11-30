import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import styled from "styled-components";

const MainHeader = styled.header`
  padding: 0 4.8rem;
  border: 2px solid#fff;
  height: 9.5rem;
  margin: 5rem;
  border-radius: 20rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    height: auto;
    max-width: 55%;
  }
`;

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img src="" alt="logo" className="logo" />
      </NavLink>
      <Navbar />
    </MainHeader>
  );
};

export default Header;