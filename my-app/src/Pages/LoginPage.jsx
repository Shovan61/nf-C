import React from "react";
import styled from "styled-components";
import backimage from "../images/backimage.jpg";

function LoginPage() {
  return (
    <Wrapper>
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
`;

const DarkShadow = styled.div`
  height: 100vh;
  width: 100%;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.9),
    rgba(42, 42, 42, 0.2) 60%,
    rgba(0, 0, 0, 0.9) 100%
  );
`;
