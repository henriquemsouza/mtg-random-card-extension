import React from "react";
import { TypeComponentText } from "./styled/sub-text-wrapper.styles";

export interface TypeInfoComponentInterface {
  type?: string;
  setName?: string;
  set?: string;
}

export const TypeInfoComponent = ({
  type,
  setName,
  set
}: TypeInfoComponentInterface) => {
  return (
    <>
      <TypeComponentText>{type}</TypeComponentText>
      <TypeComponentText>{set}-{setName}</TypeComponentText>
    </>
  );
};
