import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
// import { Button } from "../styles/Button";
// import { useGlobalContext } from "../../context/context";

// using props destructuring
const Planet = () => {
//   const { name, image } = useGlobalContext();

  const Wrapper = styled.section`
    padding: 9rem 0;
    .section-hero-data {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .btn {
      max-width: 16rem;
    }
    .hero-top-data {
      text-transform: none;
      font-weight: 500;
      font-size: 1.5rem;
      color: ${({ theme }) => theme.colors.helper};
    }
    .hero-heading {
      text-transform: none;
      font-size: 4rem;
    }
    .hero-para {
      margin-top: 1.5rem;
      margin-bottom: 3.4rem;
      max-width: 60rem;
    }
    .section-hero-image {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    picture {
      text-align: center;
    }
    .hero-img {
      max-width: 80%;
    }
    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      .grid {
        gap: 7.2rem;
      }
    }
  `;

  return (
    <Wrapper>
      <div className="container grid grid-two-column">
        <div className="section-hero-data">
          <p1 className="hero-top-data">Payment Planet Prepaid Card</p1>
          <h4 className="hero-heading">The Card that takes You to Different Places</h4>
         <picture>
            <img src="images/cards.jpg"/>
         </picture>
        </div>
        <div className="section-hero-image">
          <picture>
            <img src="images/card.jpg" alt="" className="hero-img" />
          </picture>
          
        </div>
      </div>
    </Wrapper>
  );
};

export default Planet;