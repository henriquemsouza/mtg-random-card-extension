import { Card } from "../interfaces/card";

export const ExportCard = (info: Card) => {
  const element = document.createElement("a");

  const json = JSON.stringify(info, null, 2);
  const file = new Blob([json], {
    type: "application/json",
  });
  element.href = URL.createObjectURL(file);
  
  const fileName = info.name.substring(0, 3)

  element.download =`${fileName}.json`;
  document.body.appendChild(element);
  element.click();
};
