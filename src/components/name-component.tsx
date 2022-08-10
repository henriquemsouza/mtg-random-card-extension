import React from "react";
import { NameComponentInterface } from "../interfaces/name-component.interface";
import { TextWrapper } from "./styled/text.styles";

export const NameComponent = ({ name }: NameComponentInterface) => {
  return <TextWrapper>{name}</TextWrapper>;
};
