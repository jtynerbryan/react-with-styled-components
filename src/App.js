import React, { Component, Fragment } from "react";
import "./App.css";
import Wrapper from "./Wrapper";
import FooterWrapper from "./FooterWrapper";
import Button from "./Button";
import TomatoButton from "./TomatoButton";
import HomeButton from "./HomeButton";
import Title from "./Title";

const els = [...Array(10)].map((u, i) => {
  return (
    <Fragment key={i}>
      <Wrapper>
        <Title>Styled h1</Title>
        <Button>Styled Button</Button>
        <Button primary>Primary Styled Button</Button>
        <TomatoButton>Style Extended Button</TomatoButton>
      </Wrapper>
    </Fragment>
  );
});

class App extends Component {
  render() {
    console.log(els);
    return (
      <div className="App">
        {els}
        <FooterWrapper>
          <HomeButton onClick={this.onClick}>Home</HomeButton>
        </FooterWrapper>
      </div>
    );
  }

  onClick = () => {
    window.scrollTo(0, 0);
  };
}

export default App;
