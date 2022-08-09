import React, { useEffect, useState } from "react";
import { ActionsWrapper } from "../components/styled/actions-wrapper.styles";
import { GenericButton } from "../components/styled/generic-button.styled";
import { ImageContainer } from "../components/styled/img.styled";
import { InfoContainer } from "../components/styled/info-container.styles";
import { MainContainer } from "../components/styled/main-container.styled";
import { TextWrapper } from "../components/styled/text.styles";
import { cardsInfo } from "../services/card-info.service";
import { Card } from "../interfaces/card";
import { SubTextWrapper } from "../components/styled/sub-text-wrapper.styles";
import { PowerInfo } from "../components/poweInfo-component";

const Home = () => {
    const [currentURL, setCurrentURL] = useState<string>();

    const [name, setName] = useState("");
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
        setName(card.name);
        setImage(card.imageUrl);
        setCardInfo(card)
      });
    };
  
    return (
      <MainContainer>
        <ActionsWrapper>
          <GenericButton onClick={getCardInfo}>Random</GenericButton>
        </ActionsWrapper>
          <InfoContainer>
            <TextWrapper>{name}</TextWrapper>
            <PowerInfo power={`${cardInfo?.power}`} toughness={`${cardInfo?.toughness}`}/>
            <SubTextWrapper>{cardInfo?.text}</SubTextWrapper>
           
          </InfoContainer>
        <div>
          {image != "" ? <ImageContainer src={image}></ImageContainer> : ""}
        </div>
      </MainContainer>
    );
}

export default Home;