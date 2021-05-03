import axios from "axios";
import { flow, types } from "mobx-state-tree";
import { URL } from "../constants";

export const AlbumModel = types
  .model("AlbumModel", {
    _id: types.optional(types.string, ""),
    name: types.optional(types.string, ""),
    imgUrl: types.optional(types.string, ""),
    artist: types.optional(types.string, ""),
    category: types.optional(types.array(types.string), []),
    releaseYear: types.optional(types.string, ""),
    price: types.optional(types.number, 0),
  })
  .views((self) => ({
    get totalPrice() {
      return self.price * self.totalInCart;
    },
  }))
  .actions((self) => ({
    getOneAlbums: flow(function* getOneAlbums(id) {
      try {
        const res = yield axios.get(URL + "/" + id);
        return res.data.album;
      } catch (error) {
        throw error;
      }
    })
  }));
