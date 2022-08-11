import React from "react";
import { ForeignName } from "../interfaces/card";
import { NameAlternativeText } from "./styled/text.styles";

export interface NameAlternativeProsInterface {
  foreignNames?: ForeignName[];
}

export const NameAlternativeComponent = ({
  foreignNames,
}: NameAlternativeProsInterface) => {
  const names = foreignNames?.map((x) => x.name);
  console.log(names);

  return (
    <>
      <NameAlternativeText>Alternative Names:</NameAlternativeText>
      <NameAlternativeText>{names?.join(". \n")}</NameAlternativeText>
    </>
  );
};
