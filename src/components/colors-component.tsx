import React from "react";
import { ColorsPropsInterface } from "../interfaces/colors-component.interface";
import { TypeComponentText } from "./styled/sub-text-wrapper.styles";


export const ColorsComponent = ({ colors }: ColorsPropsInterface) => {
  return (
    <>
      <TypeComponentText>{colors?.join(", ")}</TypeComponentText>
    </>
  );
};
