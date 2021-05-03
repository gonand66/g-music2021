import axios from "axios";
import { flow, types } from "mobx-state-tree";
import { URL_LIST } from "../constants";
import { AlbumModel } from "./AlbumModel";

export const CartItemModel = types.model("CartItemModel", {
  _id: types.optional(types.string, ""),
  quantity: types.optional(types.number, 0),
  album: types.optional(AlbumModel, {}),
});

export const CartModel = types
  .model("CartModel", {
    cartItems: types.optional(types.array(CartItemModel), []),
  })
  .views((self) => ({
    quantityById(id) {
      const item = self.cartItems.find((e) => e._id === id);
      return item ? item.quantity : 0;
    },
    get itemsIdList() {
      let list = [];
      self.cartItems.map((item) => list.push(item._id));
      return list;
    },
    get allTotal() {
      return self.cartItems.reduce(
        (acc, { quantity, album }) => acc + quantity * album.price,
        0
      );
    },
    get totalQuantity() {
      return self.cartItems.reduce((acc, { quantity }) => acc + quantity, 0);
    },
  }))
  .actions((self) => ({
    getAlbumInCart: flow(function* getAlbumInCart() {
      try {
        const res = yield axios.get(URL_LIST, {
          params: {
            list: self.itemsIdList,
          },
        });
        self.putAlbumsToItems(res.data.albums);
      } catch (error) {
        throw error;
      }
    }),
    addNewAlbumToCart(id) {
      const newItem = {
        _id: id,
        quantity: 1,
        album: {},
      };
      self.cartItems.push(newItem);
      self.setCartItemToStorage();
    },
    removeAlbumFromCart(id) {
      self.cartItems = self.cartItems.filter((item) => item._id !== id);
      self.setCartItemToStorage();
    },
    increateQuantityById(id) {
      self.cartItems.find((e) => e._id === id).quantity += 1;
      self.setCartItemToStorage();
    },
    decreateQuantityById(id) {
      self.cartItems.find((e) => e._id === id).quantity -= 1;
      self.setCartItemToStorage();
    },
    setTotalPrice(input) {
      self.totalPrice = input;
    },
    putAlbumsToItems(albums) {
      albums.forEach((inputAlbum) => {
        self.cartItems.find((e) => e._id === inputAlbum._id).album = inputAlbum;
      });
    },
    setCartItemToStorage() {
      localStorage.setItem("cart_items", JSON.stringify(self.cartItems));
    },
    getCartItemFromStorage() {
      JSON.parse(localStorage.getItem("cart_items")) &&
        (self.cartItems = JSON.parse(localStorage.getItem("cart_items")));
    },
  }));
