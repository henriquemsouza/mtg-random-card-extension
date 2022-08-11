import React from "react";
import { NameAlternativeProsInterface } from "../interfaces/name-alternative.interface";
import { NameAlternativeText } from "./styled/text.styles";


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
