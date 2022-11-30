import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import {  FaLocationArrow, FaMedal, FaPhone, } from "react-icons/fa";

const Footer = () => {
  const Wrapper = styled.section`
    footer {
      padding: 14rem 0 9rem 0;
      background-color: ${({ theme }) => theme.colors.footer_bg};
      h3 {
        color: ${({ theme }) => theme.colors.black};
        margin-bottom: 2.4rem;
      }
      p {
        color: ${({ theme }) => theme.colors.black};
      }
      .footer-social--icons {
        display: flex;
        gap: 2rem;
        div {
          padding: 1rem;
          border-radius: 50%;
          border: 2px solid ${({ theme }) => theme.colors.black};
          .icons {
            color: ${({ theme }) => theme.colors.black};
            font-size: 2.4rem;
            position: relative;
            cursor: pointer;
          }
        }
      }
      .footer-bottom--section {
        padding-top: 9rem;
        hr {
          margin-bottom: 2rem;
          color: ${({ theme }) => theme.colors.black};
          height: 0.1px;
        }
      }
    }
    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      footer .footer-bottom--section {
        padding-top: 3.2rem;
      }
    }
  `;

  return (
    <Wrapper>
      <footer>
        <div className="container grid grid-four-column">
          <div className="footer-about">
            <h3>coder jason</h3>
            <p>Something .... new</p>
          </div>
          <div className="footer-services">
            <h3>Services</h3>
            <li>
              <NavLink to="/">Plant</NavLink>
            </li>
            <li>
              <NavLink to="/">Payment</NavLink>
            </li>
            <li>
              <NavLink to="/">Prepaid</NavLink>
            </li>
            <li>
              <NavLink to="/">Card</NavLink>
            </li>
          </div>

          <div className="">
            <h3>Contact  Us</h3>
            <div className="footer-social--icons">
             <FaPhone/>
             <FaLocationArrow/>
             <FaMedal/>
            </div>
          </div>

          {/* 4th column  */}
          <div className="footer-appstore">
        <picture>
            <img src="images/cards.jpg" />
        </picture>
          </div>
        </div>

        {/* bottom section  */}
        <div className="footer-bottom--section">
          <hr />
          <div className="container grid grid-two-column">
            <p>
              @{new Date().getFullYear()} Varun kumar. All Rights Reserved
            </p>
            <div>
              <p>PRIVACY POLICY</p>
              <p>TERMS & CONDITIONS</p>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

export default Footer;