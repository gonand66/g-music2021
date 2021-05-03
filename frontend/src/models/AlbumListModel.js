import axios from "axios";
import { types, flow } from "mobx-state-tree";
import { URL } from "../constants";
import { AlbumModel } from "./AlbumModel";

export const AlbumListModel = types
  .model("AlbumListModel", {
    list: types.optional(types.array(AlbumModel), []),
    loading: types.optional(types.boolean, false),
  })
  .actions((self) => ({
    getAlbums: flow(function* getAlbums(category) {
      let body = category !== "All" ? { params: { category: category } } : "";
      try {
        self.loading = true;
        const res = yield axios.get(URL, body);
        self.list = res.data.albums;
      } catch (error) {
        throw error;
      } finally {
        self.loading = false;
      }
    }),
  }));
