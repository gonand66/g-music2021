import React from "react";
import styled from "styled-components";
import { NavBar } from "../common";

function HomeBanner() {
  return (
    <Banner>
      <NavBar />
      <TextBox>
        <BannerText>You are what you listening to.</BannerText>
      </TextBox>
    </Banner>
  );
}

export default HomeBanner;

const Banner = styled.div`
  height: 80vh;
  background-image: url("https://images.unsplash.com/photo-1502773860571-211a597d6e4b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80");
  background-size: cover;
  background-position: center 25%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const TextBox = styled.div`
  background-color: rgba(158, 147, 47, 0.589);
  display: flex;
  margin-bottom: 50px;
  padding: 10px;
`;
const BannerText = styled.h1`
  color: white;
  margin: 0 auto;
`;
