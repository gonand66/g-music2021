import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { numberWithComma } from "../../utils/formatHelper";
import { BuyButton } from "../common";

function CartItem(props) {
  const { album, quantity } = props.item;
  const { _id, name, price, imgUrl } = album;
  const history = useHistory();

  return (
    <Container>
      <Image
        width={100}
        src={imgUrl}
        onClick={() => history.push("/album/" + _id)}
      />
      <SummaryBox>
        <h4>
          {name} <TextAmount> x{quantity} pc.</TextAmount>
        </h4>
        <EditBox>
          <BuyButton id={_id} />
          <p>{numberWithComma(quantity * price)} ฿</p>
        </EditBox>
      </SummaryBox>
    </Container>
  );
}

export default CartItem;

const Container = styled.div`
  background-color: white;
  display: flex;
  padding: 5px;
  margin: 10px;
  width: 320px;
  border-radius: 10px;
  box-shadow: 2px 3px 10px 0 gray;
`;
const Image = styled.img`
  border-radius: 10px;
  cursor: pointer;
`;
const SummaryBox = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-left: 5px;
  justify-content: space-between;
`;
const TextAmount = styled.span`
  color: grey;
`;
const EditBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
