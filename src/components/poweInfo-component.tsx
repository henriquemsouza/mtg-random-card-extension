import React from "react";
import { TextWrapper } from "./styled/text.styles";

export interface PowerInfoInterface {
  power?: string;
  toughness?: string;
}

export const PowerInfo = ({ power, toughness }: PowerInfoInterface) => {
  if (power == null || toughness == null) {
    return <>------------</>;
  }
  return (
    <TextWrapper>
      ------------ {power}/{toughness}
    </TextWrapper>
  );
};
