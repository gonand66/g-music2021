import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { BuyButton, Loading, NavBar } from "../components/common";
import { AlbumModel, CartContext } from "../models";
import { numberWithComma } from "../utils/formatHelper";

const AlbumDetailPage = observer(() => {
  const { id } = useParams();
  const [album, setAlbum] = useState(AlbumModel.create({}));
  const { quantityById } = useContext(CartContext);
  const { name, artist, releaseYear, category, imgUrl, price, loading } = album;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await album.getOneAlbums(id);
        setAlbum(res);
      } catch (error) {
        console.log("AlbumDetailPage bug==>", error);
      }
    };
    fetchData();
  }, []);

  const renderCategory = () => {
    return category.map((cat, index) => {
      return index > 0 ? "," + cat : cat;
    });
  };

  return (
    <>
      <NavBar noBanner />
      <Container>
        {!loading ? (
          <>
            <Image src={imgUrl} />
            <DetailBox>
              <h1>{name}</h1>
              <Text>
                Artist : <b>{artist}</b>
              </Text>
              <Text>
                Release year : <b>{releaseYear}</b>
              </Text>
              <Text>Category : {renderCategory()}</Text>
              <Text>
                Price(฿) : <b>{numberWithComma(price)}</b>
              </Text>
              <Text>
                In cart : <b>{quantityById(id)}</b> pc.
              </Text>
              <BuyBox>
                <p>
                  Total price(฿) :{" "}
                  <b>{numberWithComma(quantityById(id) * price)}</b>
                </p>
                <BuyButton id={id} />
              </BuyBox>
            </DetailBox>
          </>
        ) : (
          <Loading />
        )}
      </Container>
    </>
  );
});

export default AlbumDetailPage;

const Container = styled.div`
  min-height: 70vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const Image = styled.img`
  min-width: 300px;
  width: 25%;
  height: 25%;
  border-radius: 20px;
  margin: 5%;
  margin-bottom: 0;
  box-shadow: 2px 3px 10px 0 gray;
`;
export const DetailBox = styled.div`
  background-color: white;
  min-width: 300px;
  height: 100%;
  width: 25%;
  border-radius: 20px;
  margin: 5%;
  padding: 2%;
  margin-bottom: 0;
  box-shadow: 2px 3px 10px 0 gray;
`;
const Text = styled.p`
  margin-top: 0.5rem;
`;
const BuyBox = styled.div`
  padding: 1rem;
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 2px 3px 10px 0 gray;
  border-radius: 20px;
`;
