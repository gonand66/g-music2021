import React, { useContext, useEffect } from "react";
import HomePage from "./pages/HomePage";
import { Switch, Route } from "react-router-dom";
import AlbumDetailPage from "./pages/AlbumDetailPage";
import CartPage from "./pages/CartPage";
import { CartContext } from "./models";
import { Footer } from "./components/common";
import styled from "styled-components";

function App() {
  const { getCartItemFromStorage } = useContext(CartContext);
  useEffect(() => {
    getCartItemFromStorage();
  },[]);

  return (
    <AppDiv>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/cart" component={CartPage} />
        <Route path="/album/:id" component={AlbumDetailPage} />
      </Switch>
      <Footer />
    </AppDiv>
  );
}

export default App;

const AppDiv = styled.div`
  background: linear-gradient(to right, #cac531, #f3f9a7);
`;
