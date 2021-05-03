import React, { useState } from "react";
import styled from "styled-components";

function HamburgerMenu({ renderNavLink }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <BurgerBox onClick={() => setOpen(!open)}>
        <Line1 open={open} />
        <Line2 open={open} />
        <Line3 open={open} />
      </BurgerBox>
      <WhitePage open={open}>{renderNavLink()}</WhitePage>
    </div>
  );
}

export default HamburgerMenu;

const WhitePage = styled.div`
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  width: 70%;
  z-index: 2;
  background: linear-gradient(to right, #ffe000, #799f0c);
  transition: 1s;
  transform: ${(props) => (props.open ? "translateX(0)" : "translateX(-100%)")};
  padding: 15px;
`;
const BurgerBox = styled.div`
  z-index: 3;
  margin-top: 8px;
`;
const BurgerLine = styled.div`
  border-top: 4px solid white;
  width: 2rem;
  margin-bottom: 5px;
`;
const Line1 = styled(BurgerLine)`
  transition: 0.5s;
  transform: ${(props) =>
    props.open ? "translateY(9px) rotate(45deg)" : "rotate(0)"};
`;
const Line2 = styled(BurgerLine)`
  transition: 0.5s;
  opacity: ${(props) => (props.open ? 0 : 1)};
`;
const Line3 = styled(BurgerLine)`
  transition: 0.5s;
  transform: ${(props) =>
    props.open ? "translateY(-9px) rotate(-45deg)" : "rotate(0)"};
`;
