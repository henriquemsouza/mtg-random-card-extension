import React, { useEffect, useState } from "react";
import { CircularProgress } from "@material-ui/core";

import { ActionsWrapper } from "../components/styled/actions-wrapper.styles";
import { GenericButton } from "../components/styled/generic-button.styled";
import { ImageContainer } from "../components/styled/img.styled";
import { InfoContainer } from "../components/styled/info-container.styles";
import { MainContainer } from "../components/styled/main-container.styled";
import { CardByName, CardsInfo } from "../services/card-info.service";
import { Card } from "../interfaces/card";

import { CardView } from "./view/card.view";
import { TextFieldStyled } from "../components/styled/text-field.styles";
import { ExportCard } from "../services/downloader.service";
import { ImgContainer } from "../components/styled/img-container.styles";
import { STORAGE_KEYS } from "../utils/storage/constants";
import { Storage } from "../utils/storage/storage";

const currentCardInfo = Storage.getData(STORAGE_KEYS.CURRENT_CARD);
const Home = () => {
  const [image, setImage] = useState("");
  const [cardInfo, setCardInfo] = useState<Card>();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (currentCardInfo != undefined) {
      let info = currentCardInfo as unknown as Card;

      setCardInfo(info);
      setImage(info.imageUrl);
    }
  }, []);

  const getCardInfo = () => {
    clearValues();
    setIsLoading(true);
    CardsInfo().then((x) => {
      const card = x.cards[0];
      setImage(card.imageUrl);
      setCardInfo(card);
      setIsLoading(false);
      Storage.setData(STORAGE_KEYS.CURRENT_CARD, card);
    });
  };

  const clearValues = () => {
    setImage("");
    setCardInfo(undefined);
    Storage.removeData(STORAGE_KEYS.CURRENT_CARD);
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

  const onClickExportCard = () => {
    if (cardInfo) {
      ExportCard(cardInfo);
    }
  };

  const exportButton = () => {
    return <GenericButton onClick={onClickExportCard}>Export</GenericButton>;
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

        {cardInfo == null ? "" : exportButton()}
      </ActionsWrapper>
      <InfoContainer>
        {cardInfo == null ? "" : CardView(cardInfo)}
        {isLoading ? progress() : ""}
      </InfoContainer>
      <ImgContainer>
        {image != "" ? <ImageContainer src={image}></ImageContainer> : ""}
        {isLoading ? progress() : ""}
      </ImgContainer>
    </MainContainer>
  );
};

export default Home;
