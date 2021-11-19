import React from "react";
import styled from "styled-components";
import { imageBaseUrl } from "../helper";

function Poster(props) {
  const { poster_path } = props;
  const image = imageBaseUrl + poster_path;
  return (
    <PosterWrapper>
      <img src={image} alt="" />
    </PosterWrapper>
  );
}

export default Poster;

const PosterWrapper = styled.div`
  height: 30vh;
  width: 300px;
  transition: all 0.8s ease-out;
  cursor: pointer;
  & img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }

  &:hover {
    transform: scale(1.1);
  }
`;
