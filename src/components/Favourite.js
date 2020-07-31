import React from "react";
import * as StyledComponents from "./StyledComponents";
import store from "../redux/store";
import * as actions from "../redux/actions";

class Favourite extends React.Component {
  constructor(props) {
    super(props);
    this.title = "Favourite";
    this.favourite = [];
  }

  componentDidMount() {
    store.subscribe(() => {
      const reduxState = store.getState();
      console.log(reduxState);
      this.favourite = reduxState;
    });
  }

  render() {
    return (
      <StyledComponents.ListContainer>
        <StyledComponents.Title>{this.title}</StyledComponents.Title>
        {this.favourite.map((item) => (
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
              <StyledComponents.ButtonOff>favourite</StyledComponents.ButtonOff>
            )}
          </div>
        ))}
      </StyledComponents.ListContainer>
    );
  }
}

export default Favourite;
