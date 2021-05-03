import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { AlbumCard } from ".";
import { AlbumListContext } from "../../models";
import { Loading } from "../common";

const AlbumsList = observer(() => {
  const { getAlbums, list, loading } = useContext(AlbumListContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getAlbums();
      } catch (error) {
        console.log("Albumslist bug==>", error);
      } finally {
      }
    };
    fetchData();
  }, []);

  return !loading ? (
    <ListContainer>
      {list.map((album) => (
        <AlbumCard album={album} key={album._id} />
      ))}
    </ListContainer>
  ) : (
    <Loading />
  );
});

export default AlbumsList;

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-inline: 10%;
  justify-content: center;
  padding-bottom: 100px;
`;
