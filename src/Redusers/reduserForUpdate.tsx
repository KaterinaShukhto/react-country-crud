import type { ICountry } from "../Interfaces/Interfaces";

type Action = {
  type: string;
  payload: string;
};

export const reducer = (state: ICountry, action: Action): ICountry => {
  switch (action.type) {
    case "name":
      console.log(">>> name");
      return { ...state, name: action.payload };
    case "capital":
      console.log(">>> capital");
      return { ...state, capital: action.payload };
    case "population":
      console.log(">>> population");
      return {
        ...state,
        population: action.payload ? Number(action.payload) : 0,
      };
    default:
      return state;
  }
};
