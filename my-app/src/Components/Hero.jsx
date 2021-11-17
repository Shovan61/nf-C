import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { randomMovie, imageBaseUrl } from "../helper";

function Hero() {
  const state = useSelector((state) => state);
  const random = randomMovie(state.movies.popular);
  console.log(random);

  if (random === undefined) {
    return <span style={{ color: "white" }}>...Loading</span>;
  } else {
    return (
      <Wrapper background={imageBaseUrl + random.backdrop_path}>
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
  background-position: center center;
  background-size: cover;
  position: relative;
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
