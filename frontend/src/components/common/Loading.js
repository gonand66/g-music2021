import React from "react";
import styled from "styled-components";

function Loading() {
  return (
    <Container>
      <Spinner/>
    </Container>
  );
}

export default Loading;

const Spinner = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 15px solid;
  border-color: #fff transparent #fff transparent;
  animation: spining 1.3s linear infinite;
  @keyframes spining {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
const Container = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
