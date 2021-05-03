import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { CartContext } from "../../models";
import HamburgerMenu from "./HamburgerMenu";

const NavBar= observer(({ noBanner })=> {
  const history = useHistory();
  const [screenWidth, setScreenWidth] = useState(0);
  const { totalQuantity } = useContext(CartContext);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    setScreenWidth(window.innerWidth);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const renderNavLink = () => {
    return (
      <>
        <H2 onClick={() => history.push("/")}>home</H2>
        <H2 onClick={() => history.push("/cart")}>cart({totalQuantity})</H2>
      </>
    );
  };

  return  (
    <Nav noBanner={noBanner}>
      <H1 onClick={() => history.push("/")}>G-Music</H1>
      {screenWidth > 450 ? (
        <FlexDiv>{renderNavLink()}</FlexDiv>
      ) : (
        <HamburgerMenu renderNavLink={renderNavLink} />
      )}
    </Nav>
  );
})

export default NavBar;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  padding-block: 10px;
  padding-inline: 8%;
  transition: 5s;
  ${(props) =>
    props.noBanner &&
    `
    background-color: rgba(158, 147, 47);
  `};
`;
const FlexDiv = styled.div`
  display: flex;
  align-items: center;
`;
const H1 = styled.h1`
  color: white;
  font-size: 40px;
  cursor: pointer;
`;
const H2 = styled.h2`
  color: white;
  margin-left: 30px;
  cursor: pointer;
`;
