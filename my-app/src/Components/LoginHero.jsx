import React from "react";
import styled from "styled-components";

function LoginHero() {
  return (
    <Wrapper>
      <h1>Unlimited movies, TV shows, and more.</h1>
      <h2>Watch anywhere. Cancel anytime.</h2>
      <h3>
        Ready to watch? Enter your email to create or restart your membership.
      </h3>
      <Input>
        <input type="email" placeholder="Email address" />
        <Button>Get Started</Button>
      </Input>
    </Wrapper>
  );
}

export default LoginHero;

const Wrapper = styled.div`
  position: relative;
  width: 800px;
  /* border: 1px solid white; */
  z-index: 100;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  & h1 {
    color: white;
    font-size: 3.2rem;
    text-align: center;
    letter-spacing: 1px;
    width: 65%;
    font-weight: 900;
  }
  & h2 {
    color: white;
    font-size: 1.7rem;
    text-align: center;
    margin-top: 1.5rem;
    font-weight: 400;
    letter-spacing: 2px;
  }
  & h3 {
    color: white;
    font-size: 1.2rem;
    text-align: center;
    margin-top: 1.5rem;
    font-weight: 400;
    letter-spacing: 0.5px;
  }
`;

const Input = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  padding: 0 2rem;
  width: 100%;
  & input {
    width: 70%;
    padding: 1.5rem;
    border: none;

    &:focus {
      outline: none;
    }
  }
`;

const Button = styled.button`
  width: 30%;
  padding: 1rem;
  color: white;
  font-size: 1.8rem;
  cursor: pointer;
  background-color: red;
  border: none;
  &:active {
    background-color: #cc0000;
    color: #fbf5e8;
  }
`;
