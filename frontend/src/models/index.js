import { createContext } from "react";
import { AlbumListModel } from "./AlbumListModel";
import { AlbumModel } from "./AlbumModel";
import { CartModel } from "./CartModel";

export { AlbumListModel, AlbumModel, CartModel };

export const AlbumContext = createContext(AlbumModel.create({}));
export const AlbumListContext = createContext(AlbumListModel.create({}));
export const CartContext = createContext(CartModel.create({}));
