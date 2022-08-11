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
import { ColorsComponent } from "../components/colors-component";
import { TextComponent } from "../components/text-component";

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

  const cardViewInfo = () => {
    return (
      <>
        <NameComponent name={cardInfo?.name} />
        <TypeInfoComponent
          type={cardInfo?.type}
          setName={cardInfo?.setName}
          set={cardInfo?.set}
        />
        <ColorsComponent colors={cardInfo?.colors} />
        <TextComponent text={cardInfo?.text} flavor={cardInfo?.flavor} />
        <PowerInfo
          power={cardInfo?.power}
          toughness={cardInfo?.toughness}
          rarity={cardInfo?.rarity}
        />
        <SubTextWrapper>{cardInfo?.artist}</SubTextWrapper>
      </>
    );
  };

  return (
    <MainContainer>
      <ActionsWrapper>
        <GenericButton onClick={getCardInfo}>Random</GenericButton>
      </ActionsWrapper>
      <InfoContainer>{cardInfo == null ? "" : cardViewInfo()}</InfoContainer>
      <div>
        {image != "" ? <ImageContainer src={image}></ImageContainer> : ""}
      </div>
    </MainContainer>
  );
};

export default Home;
