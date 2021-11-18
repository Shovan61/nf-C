import React, { useEffect, useState } from "react";
import styled from "styled-components";
import netflix from "../images/netflix-logo.png";
import profile from "../images/profile-logo.png";
import { Hero, MoviesCoursel } from "../Components";
import { useSelector } from "react-redux";

function HomePage() {
  const [isBlack, setisBlack] = useState(false);
  const state = useSelector((state) => state);
  let category = [];
  let values = [];

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 70) {
        setisBlack(true);
      } else {
        setisBlack(false);
      }
    });
  }, []);

  for (let key in state.movies) {
    category.push(key);
    values.push(state.movies[key]);
  }

  return (
    <Wrapper>
      <NavBar isBlack={isBlack}>
        <img src={netflix} alt="" />
        <img style={{ height: "40%" }} src={profile} alt="" />
      </NavBar>
      <Hero />

      {category.map((cur, i) => (
        <MoviesCoursel name={cur} key={i} values={values[i]} />
      ))}
    </Wrapper>
  );
}

export default HomePage;

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
`;

const NavBar = styled.div`
  height: 8vh;
  padding: 0 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.6s ease-in-out;
  background-color: ${(props) => (props.isBlack ? "#000000" : "transparent")};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  & img {
    height: 100%;
    object-fit: contain;
  }
  z-index: 100;
`;
