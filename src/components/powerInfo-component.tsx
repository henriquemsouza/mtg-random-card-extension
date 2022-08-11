import React from "react";
import { PowerInfoText } from "./styled/text.styles";

export interface PowerInfoInterface {
  power?: string;
  toughness?: string;
  rarity?: string;
}

export const PowerInfo = ({ power, toughness, rarity }: PowerInfoInterface) => {
  return (
    <PowerInfoText>
      {rarity}--------------------{power}/{toughness}
    </PowerInfoText>
  );
};
