import React, { useEffect, useState } from "react";
import { ActionsWrapper } from "../components/styled/actions-wrapper.styles";
import { GenericButton } from "../components/styled/generic-button.styled";
import { ImageContainer } from "../components/styled/img.styled";
import { InfoContainer } from "../components/styled/info-container.styles";
import { MainContainer } from "../components/styled/main-container.styled";
import { cardsInfo } from "../services/card-info.service";
import { Card } from "../interfaces/card";
import { SubTextWrapper } from "../components/styled/sub-text-wrapper.styles";
import { TypeInfoComponent } from "../components/type-component";
import { NameComponent } from "../components/name-component";
import { PowerInfo } from "../components/powerInfo-component";

const Home = () => {
  const [currentURL, setCurrentURL] = useState<string>();

  const [image, setImage] = useState("");

  const [cardInfo, setCardInfo] = useState<Card>();

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      setCurrentURL(tabs[0].url);
    });
  }, []);

  const getCardInfo = () => {
    cardsInfo().then((x) => {
      const card = x.cards[0];
      setImage(card.imageUrl);
      setCardInfo(card);
    });
  };

  return (
    <MainContainer>
      <ActionsWrapper>
        <GenericButton onClick={getCardInfo}>Random</GenericButton>
      </ActionsWrapper>
      <InfoContainer>
        <NameComponent name={cardInfo?.name} />
        <PowerInfo
          power={`${cardInfo?.power}`}
          toughness={`${cardInfo?.toughness}`}
        />
        <TypeInfoComponent type={cardInfo?.type} setName={cardInfo?.setName} />
        <SubTextWrapper>{cardInfo?.text}</SubTextWrapper>
      </InfoContainer>
      <div>
        {image != "" ? <ImageContainer src={image}></ImageContainer> : ""}
      </div>
    </MainContainer>
  );
};

export default Home;
