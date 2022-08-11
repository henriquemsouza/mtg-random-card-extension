import { NameComponent } from "./../../components/name-component";
import { Card } from "../../interfaces/card";
import React from "react";
import { TypeInfoComponent } from "../../components/type-component";
import { ColorsComponent } from "../../components/colors-component";
import { NameAlternativeComponent } from "../../components/name-alternative-component";
import { PowerInfo } from "../../components/powerInfo-component";
import { SubTextWrapper } from "../../components/styled/sub-text-wrapper.styles";
import { TextComponent } from "../../components/text-component";

export const CardView = (info: Card) => {
  if (!info) {
    return <></>;
  }
  return (
    <>
      <NameComponent name={info.name} />
      <TypeInfoComponent
        type={info.type}
        setName={info.setName}
        set={info.set}
      />
      <ColorsComponent colors={info.colors} />
      <TextComponent text={info.text} flavor={info.flavor} />
      <PowerInfo
        power={info.power}
        toughness={info.toughness}
        rarity={info.rarity}
      />
      <SubTextWrapper>{info.artist}</SubTextWrapper>

      <NameAlternativeComponent foreignNames={info.foreignNames} />
    </>
  );
};
