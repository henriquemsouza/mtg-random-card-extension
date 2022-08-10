import React from "react";
import { TypeComponentText } from "./styled/sub-text-wrapper.styles";

export interface TypeInfoComponentInterface {
  type?: string;
  setName?: string;
}

export const TypeInfoComponent = ({
  type,
  setName,
}: TypeInfoComponentInterface) => {
  return (
    <>
      <TypeComponentText>{type}</TypeComponentText>
      <TypeComponentText>{setName}</TypeComponentText>
    </>
  );
};
