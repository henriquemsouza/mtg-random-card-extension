import React from "react";
import { TypeComponentText } from "./styled/sub-text-wrapper.styles";

export interface ColorsPropsInterface {
  colors?: string[];
}

export const ColorsComponent = ({ colors }: ColorsPropsInterface) => {
  console.log("colors", colors)
  return (
    <>
      <TypeComponentText>{colors?.join(", ")}</TypeComponentText>
    </>
  );
};
