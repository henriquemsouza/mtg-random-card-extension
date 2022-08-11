import React from "react";
import { FlavorTextWrapper, SubTextWrapper } from "./styled/sub-text-wrapper.styles";

export interface TextPropsInterface {
  text?: string;
  flavor?: string;
}

export const TextComponent = ({ text , flavor}: TextPropsInterface) => {
  return (
    <>
      <SubTextWrapper>{text}</SubTextWrapper>
      <FlavorTextWrapper>{flavor}</FlavorTextWrapper>
    </>
  );
};
