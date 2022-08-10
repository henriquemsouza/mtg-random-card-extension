import React from "react";
import { TextWrapper } from "./styled/text.styles";

export interface PowerInfoInterface {
  power?: string;
  toughness?: string;
}

export const PowerInfo = ({ power, toughness }: PowerInfoInterface) => {
  if ( power !== 'undefined' &&  toughness !== 'undefined') {
    return (
      <TextWrapper>
        -----------------------{power}/{toughness}
      </TextWrapper>
    );
  } else {
    return (
      <TextWrapper>
        ------------------------
      </TextWrapper>
    )
  }
};
