import React, { useEffect, useState } from "react";
import { ActionsWrapper } from "../components/styled/actions-wrapper.styles";
import { GenericButton } from "../components/styled/generic-button.styled";
import { ImageContainer } from "../components/styled/img.styled";
import { InfoContainer } from "../components/styled/info-container.styles";
import { MainContainer } from "../components/styled/main-container.styled";
import { CardByName, CardsInfo } from "../services/card-info.service";
import { Card } from "../interfaces/card";

import { CardView } from "./view/card.view";
import { TextFieldStyled } from "../components/styled/text-field.styles";
import { CircularProgress } from "@material-ui/core";

const Home = () => {
  const [currentURL, setCurrentURL] = useState<string>();

  const [image, setImage] = useState("");
  const [cardInfo, setCardInfo] = useState<Card>();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      setCurrentURL(tabs[0].url);
    });
  }, []);

  const getCardInfo = () => {
    clearValues();
    setIsLoading(true);
    CardsInfo().then((x) => {
      const card = x.cards[0];
      setImage(card.imageUrl);
      setCardInfo(card);
      setIsLoading(false);
    });
  };

  const clearValues = () => {
    setImage("");
    setCardInfo(undefined);
  };

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value;
    console.log(searchValue);
    if (searchValue.length >= 2) {
      clearValues();
      setIsLoading(true);
      CardByName(searchValue).then((x) => {
        x.cards.length;
        if (x.cards.length != 0) {
          const card = x.cards[0];
          setImage(card.imageUrl);
          setCardInfo(card);
        } else {
          clearValues();
        }
        setIsLoading(false);
      });
    }
  };

  const progress = () => {
    return <CircularProgress />;
  };

  return (
    <MainContainer>
      <ActionsWrapper>
        <GenericButton onClick={getCardInfo}>Random</GenericButton>

        <TextFieldStyled
          id="filled-basic"
          label="Search"
          onChange={onChangeInput}
        />
      </ActionsWrapper>
      <InfoContainer>
        {cardInfo == null ? "" : CardView(cardInfo)}
        {isLoading ? progress() : ""}
      </InfoContainer>
      <div>
        {image != "" ? <ImageContainer src={image}></ImageContainer> : ""}
        {isLoading ? progress() : ""}
      </div>
    </MainContainer>
  );
};

export default Home;
