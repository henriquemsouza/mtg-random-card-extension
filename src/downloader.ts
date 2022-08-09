import { Cards } from "./interfaces/card";

const cardInfo = async () => {
  let responseRaw = await fetch(
    `https://api.magicthegathering.io/v1/cards?pageSize=1&random=true`
  ).then((res) => {
    return res.json();
  });
  
  console.log(responseRaw);
  const result = responseRaw as Cards;
  result.cards[0].name;
  console.log("name", result.cards[0].name);

  return result;
};

export { cardInfo };
