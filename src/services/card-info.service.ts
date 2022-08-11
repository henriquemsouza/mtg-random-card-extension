import { Cards } from "../interfaces/card";

const basePatch = "https://api.magicthegathering.io/v1";

const CardsInfo = async () => {
  const pageSize = 1;
  let responseRaw = await fetch(
    `${basePatch}/cards?pageSize=${pageSize}&random=true`
  ).then((res) => {
    return res.json();
  });

  const result = responseRaw as Cards;

  return result;
};

const CardByName = async (name: string) => {
  const pageSize = 1;
  let responseRaw = await fetch(
    `${basePatch}/cards?pageSize=${pageSize}&name=${name}`
  ).then((res) => {
    return res.json();
  });

  console.log(responseRaw);
  const result = responseRaw as Cards;


  return result;
};

export { CardsInfo, CardByName };
