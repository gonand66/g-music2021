import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { CartContext } from "../../models";

function BuyButton(props) {
  const { id, isOne } = props;
  const {
    increateQuantityById,
    decreateQuantityById,
    quantityById,
    addNewAlbumToCart,
    removeAlbumFromCart,
    totalQuantity,
  } = useContext(CartContext);

  const handleIncreate = (e) => {
    quantityById(id) > 0 ? increateQuantityById(id) : addNewAlbumToCart(id);
    e.stopPropagation();
  };

  const handleDecreate = () => {
    if (quantityById(id) === 1) {
      removeAlbumFromCart(id);
    } else decreateQuantityById(id);
  };

  const renderOneButton = () => {
    return (
      <Button
        disabled={quantityById(id) > 98 || totalQuantity > 998}
        onClick={handleIncreate}
      >
        Add
      </Button>
    );
  };

  const renderTwoBotton = () => {
    return (
      <div>
        <HaftButton disabled={quantityById(id) < 1} onClick={handleDecreate}>
          -
        </HaftButton>
        <HaftButton
          disabled={quantityById(id) > 98 || totalQuantity > 998}
          onClick={handleIncreate}
          right
        >
          +
        </HaftButton>
      </div>
    );
  };

  return isOne ? renderOneButton() : renderTwoBotton();
}

export default BuyButton;

const Button = styled.button`
  width: 60px;
  height: 80%;
  border-radius: 10px;
  background: ${(props) => (props.disabled ? "#D3D3D3" : "#e0dc5a")};
  color: white;
  border: none;
  cursor: pointer;
  &:active {
    background-color: #f3f9a7;
  }
  box-shadow: 1px 1px 2px grey;
`;

const HaftButton = styled(Button)`
  width: 50px;
  height: 32px;
  font-size: 20px;
  margin-right: 2px;
  border-radius: 0;
  ${(props) =>
    props.right
      ? css`
          border-bottom-right-radius: 20px;
          border-top-right-radius: 20px;
        `
      : css`
          border-bottom-left-radius: 20px;
          border-top-left-radius: 20px;
        `};
`;
