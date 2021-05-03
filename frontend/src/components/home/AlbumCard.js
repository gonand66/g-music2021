import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { numberWithComma } from "../../utils/formatHelper";
import { BuyButton } from "../common";

function AlbumCard(prop) {
  const { _id, name, artist, price, imgUrl } = prop.album;
  const history = useHistory();

  const renderDetail = () => {
    return (
      <DetailContainer>
        <AlbumName>{name}</AlbumName>
        <StretchBox>
          <div>
            <h4>{artist}</h4>
            <h4>฿ {numberWithComma(price)}</h4>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <BuyButton id={_id} isOne />
          </div>
        </StretchBox>
      </DetailContainer>
    );
  };

  return (
    <CardContainer onClick={() => history.push("/album/" + _id)}>
      <CardImg width={250} src={imgUrl} /> 
      {renderDetail()}
    </CardContainer>
  );
}

export default AlbumCard;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  height: 350px;
  width: 250px;
  margin: 20px;
  border: 0.1px solid #ffff;
  border-radius: 10px;
  box-shadow: 2px 3px 10px 0 gray;
  cursor: pointer;
  &:hover {
    transform: rotate(2deg);
    box-shadow: 2px 3px 20px 0 white;
  }
`;
const CardImg = styled.img`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;
const DetailContainer = styled.div`
  padding-block: 5px;
  padding-inline: 10px;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: stretch;
  justify-content: space-between;
`;
const AlbumName = styled.h3`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
const StretchBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
