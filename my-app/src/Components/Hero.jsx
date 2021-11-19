import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { getArr, imageBaseUrl } from "../helper";

function Hero() {
  const state = useSelector((state) => state);
  const random = getArr(state.movies);
  console.log(random);
  if (random === undefined) {
    return (
      <span
        style={{
          color: "white",
          position: "absolute",
          left: "50%",
          transform: "translate(-50%, 0)",
          top: "6rem",
        }}
      >
        ...Loading
      </span>
    );
  } else {
    return (
      <Wrapper background={imageBaseUrl + random.backdrop_path}>
        <Container>
          <h1>{random.original_title}</h1>

          <ButtonContainer>
            <Button>
              <span>Play</span>
            </Button>
            <Button style={{ marginLeft: "1rem" }}>
              <span>My List</span>
            </Button>
          </ButtonContainer>
          <Description>{random.overview}</Description>
        </Container>

        <Shadow></Shadow>
      </Wrapper>
    );
  }
}

export default Hero;

const Wrapper = styled.div`
  height: 60vh;
  width: 100%;
  background-image: url("${(props) => props.background}");
  background-position: bottom bottom;
  background-size: cover;
  position: relative;
  transition: all 1.25s ease-in-out;
`;

const Shadow = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  height: 15vh;
  background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.001),
    #181818
  );
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 5rem;
  height: 100%;
  width: 100%;
  transition: all 1.25s ease-in-out;
  & h1 {
    color: white;
    font-weight: 500;
    letter-spacing: 3px;
    font-size: 4rem;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
`;

const Button = styled.div`
  padding: 1rem 2rem;
  background-color: rgb(41, 40, 40);
  border-radius: 8px;
  transition: all 0.2s ease-in;
  cursor: pointer;
  & span {
    color: white;
  }
  &:hover {
    background-color: rgb(61, 60, 60);
  }
`;

const Description = styled.span`
  color: white;
  margin-top: 2rem;
  width: 50%;
`;
