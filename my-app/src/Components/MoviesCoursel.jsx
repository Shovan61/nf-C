import React from "react";
import styled from "styled-components";
import Poster from "./Poster";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MoviesCoursel(props) {
  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const { name, values } = props;

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
      <MoviesContainer {...settings}>
        {values.map((cur, i) => {
          return cur.poster_path ? <Poster key={i} {...cur} /> : null;
        })}
      </MoviesContainer>
    </Wrapper>
  );
}

export default MoviesCoursel;

const Wrapper = styled.div`
  margin-top: 8rem;
  height: 30vh;
  width: 100%;
  /* margin-bottom: ${(props) => (props.name === "drama" ? "3rem" : "0rem")}; */
  padding: 2rem;
  & h1 {
    color: red;
    padding-left: 3rem;
    text-align: start;
    font-weight: 500;
    letter-spacing: 2px;
    height: 20%;
  }
`;

const MoviesContainer = styled(Slider)``;
