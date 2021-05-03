import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { CartItem } from "../components/cart";
import { Loading, NavBar } from "../components/common";
import { CartContext } from "../models";
import { numberWithComma } from "../utils/formatHelper";
import { DetailBox } from "./AlbumDetailPage";

const CartPage = observer(() => {
  const {
    getAlbumInCart,
    quantityById,
    cartItems,
    allTotal,
    getCartItemFromStorage,
  } = useContext(CartContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getCartItemFromStorage();
    const fetchData = async () => {
      try {
        setLoading(true);
        await getAlbumInCart();
      } catch (error) {
        console.log("CartPage bug==>", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const renderItemList = () => {
    return (
      <ListBox>
        {cartItems.map((item) => {
          return <CartItem item={item} key={"cart_item_" + item._id} />;
        })}
      </ListBox>
    );
  };

  const renderSummaryList = () => {
    return (
      <SummaryListBox>
        {cartItems.map((item) => {
          return (
            <p key={"cart_text_" + item._id}>
              {item.album.name} x{quantityById(item._id)}
            </p>
          );
        })}
      </SummaryListBox>
    );
  };

  return (
    <>
      <NavBar noBanner />
      <Container>
        {!loading ? (
          <>
            {renderItemList()}
            <DetailBox>
              <h1>Summary</h1>
              {renderSummaryList()}
              <h3>Total {numberWithComma(allTotal)} ฿</h3>
              {/* <button>Confirm</button> */}
            </DetailBox>
          </>
        ) : (
          <Loading />
        )}
      </Container>
    </>
  );
});

export default CartPage;

const Container = styled.div`
  min-height: 90vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const ListBox = styled.div`
  margin: 5%;
`;
const SummaryListBox = styled.div`
  margin: 5%;
`;
