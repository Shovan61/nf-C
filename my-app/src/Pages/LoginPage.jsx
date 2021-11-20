import React from "react";
import styled from "styled-components";
import backimage from "../images/netflix-collection.jpg";
import netflix from "../images/netflix-logo.png";
import test from "../test";

function LoginPage() {
  return (
    <Wrapper>
      <Nav>
        <img src={netflix} alt="netflix" />
        <Button>Sign In</Button>
      </Nav>
      <DarkShadow></DarkShadow>
    </Wrapper>
  );
}

export default LoginPage;

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url(${backimage});
  /* background-position: center center; */
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

const DarkShadow = styled.div`
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.9),
    rgba(42, 42, 42, 0.3) 60%,
    rgba(0, 0, 0, 0.9) 100%
  );
`;

const Nav = styled.div`
  height: 9vh;
  padding: 0 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 100;
  & img {
    height: 100%;
    object-fit: contain;
  }
`;

const Button = styled.button`
  cursor: pointer;
  background-color: red;
  padding: 0.7rem 1.5rem;
  transition: all 0.2s ease-in-out;
  border: none;
  color: white;
  border-radius: 5px;
  &:hover {
    background-color: #ca0000;
  }
`;
