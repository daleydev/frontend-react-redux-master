import React, { useState } from "react";
import * as StyledComponents from "./StyledComponents";
import store from "../redux/store";
import * as actions from "../redux/actions";

const Listened = () => {
  const title = "Listened";
  const [listened, setListened] = useState([]);

  store.subscribe(() => {
    const reduxState = store.getState();
    console.log(reduxState);
    setListened(reduxState);
  });

  return (
    <StyledComponents.ListContainer>
      <StyledComponents.Title>{title}</StyledComponents.Title>
      {listened.map(
        (item) =>
          item.listened && (
            <div key={item.id}>
              <div>{item.artist}</div>
              <div>{item.track || item.song.track}</div>
              {item.listened ? (
                <StyledComponents.ButtonOn
                  onClick={() => store.dispatch(actions.toggleListened(item))}
                >
                  listened
                </StyledComponents.ButtonOn>
              ) : (
                <StyledComponents.ButtonOff
                  onClick={() => store.dispatch(actions.toggleListened(item))}
                >
                  listened
                </StyledComponents.ButtonOff>
              )}

              {item.favourite ? (
                <StyledComponents.ButtonOn>favourite</StyledComponents.ButtonOn>
              ) : (
                <StyledComponents.ButtonOff>
                  favourite
                </StyledComponents.ButtonOff>
              )}
            </div>
          )
      )}
    </StyledComponents.ListContainer>
  );
};

export default Listened;
