import React from "react";
import styled from "styled-components";

function Footer() {
  return <FooterContainer>Made by Gboy</FooterContainer>;
}

export default Footer;

const FooterContainer = styled.div`
  height: 100px;
  background-color: #2b2a2a;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
`;
