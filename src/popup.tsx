import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { ActionsWrapper } from "./components/styled/actions-wrapper.styles";
import { GenericButton } from "./components/styled/generic-button.styled";
import { ImageContainer } from "./components/styled/img.styled";
import { InfoContainer } from "./components/styled/info-container.styles";
import { MainContainer } from "./components/styled/main-container.styled";
import { TextContainer } from "./components/styled/text.styles";
import { cardInfo } from "./downloader";

const Popup = () => {
  const [currentURL, setCurrentURL] = useState<string>();

  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  // useEffect(() => {
  //   chrome.action.setBadgeText({ text: count.toString() });
  // }, [count]);

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      setCurrentURL(tabs[0].url);
    });
  }, []);

  const getCardInfo = () => {
    cardInfo().then((x) => {
      const card = x.cards[0];
      setName(card.name);
      setImage(card.imageUrl);
    });
  };

  return (
    <MainContainer>
      <ActionsWrapper>
        <GenericButton onClick={getCardInfo}>Random</GenericButton>
      </ActionsWrapper>
        <InfoContainer>
          <TextContainer>{name}</TextContainer>
          <TextContainer>{name}</TextContainer>
        </InfoContainer>
      <div>
        {image != "" ? <ImageContainer src={image}></ImageContainer> : ""}
      </div>
    </MainContainer>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>,
  document.getElementById("root")
);
