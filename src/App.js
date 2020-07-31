import React, { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import store from "./redux/store";
import * as actions from "./redux/actions";
// components
import Playlist from "./components/Playlist";
import Listened from "./components/Listened";
import Favourite from './components/Favourite'

const App = () => {
  const getPlaylist = async () => {
    const url = "http://localhost:3000/playlist";
    await axios.get(url).then((res) => {
      console.log(res.data);
      const items = res.data;
      items.forEach((item) => {
        store.dispatch(actions.addToPlaylist(item));
      });
    });
  };

  useEffect(() => {
    getPlaylist();
  }, []);

  return (
    <AppContainer>
      <ListContainer>
        <Favourite/>
        <Listened />
        <Playlist />
      </ListContainer>
    </AppContainer>
  );
};

const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: purple;
  padding-top: 5rem;
`;

const ListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80vw;
  margin: auto;
`;

export default App;
