import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { AlbumCard } from ".";
import { AlbumListContext } from "../../models";
import { Loading } from "../common";

const AlbumsList = observer(() => {
  const { getAlbums, list } = useContext(AlbumListContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        await getAlbums();
      } catch (error) {
        console.log("Albumslist bug==>", error);
      } finally {
        setLoading(false);
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
