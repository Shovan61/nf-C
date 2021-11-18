import React from "react";
import styled from "styled-components";

function MoviesCoursel(props) {
  const { name, values } = props;
  //   console.log(values);

  const getName = (n) => {
    if (n === "popular") {
      return "Most Popular";
    } else if (n === "highRate") {
      return "Highest Rated";
    } else if (n === "bestFrom") {
      return "Best movies 2014 Onwards";
    } else if (n === "newMovies") {
      return "New";
    } else if (n === "kids") {
      return "For Kids";
    } else if (n === "ratedR") {
      return "Rated R";
    } else if (n === "drama") {
      return "Drama";
    }
  };

  return (
    <Wrapper name={name}>
      <h1>{getName(name)}</h1>
      <MoviesContainer></MoviesContainer>
    </Wrapper>
  );
}

export default MoviesCoursel;

const Wrapper = styled.div`
  margin-top: 4rem;
  height: 30vh;
  width: 100%;
  & h1 {
    color: white;
    padding-left: 3rem;
    font-weight: 500;
    letter-spacing: 2px;
    height: 14%;
  }
  margin-bottom: ${(props) => (props.name === "drama" ? "3rem" : "0rem")};
`;

const MoviesContainer = styled.div`
  display: flex;
  align-items: center;
  overflow-x: scroll;
  height: 86%;
`;
