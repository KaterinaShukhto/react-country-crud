import React from "react";
import type { ICountry } from "../../../Interfaces/Interfaces";
import style from "./CountryCard.module.css";
import { FLAG_URL } from "../../../data/defaulFlagURL";

interface CountryProps {
  country: ICountry;
  handleDelete: (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number | string
  ) => void;
}

const CountryCard: React.FC<CountryProps> = ({ country, handleDelete }) => {
  return (
    <div className={style["country-card"]}>
      <img
        className={style.flag}
        src={country.flag ? country.flag : FLAG_URL}
        alt={country.name}
      />
      <h2>
        <span className={style.description}> Страна:</span>
        {country.name}
      </h2>
      <h3>
        <span className={style.description}> Столица:</span>
        {country.capital}
      </h3>
      <p>
        <span className={style.description}> Численность населения:</span>{" "}
        {country.population}
      </p>
      <button
        className={style.btnDelete}
        onClick={(event) => handleDelete(event, country.id)}
      >
        Удалить
      </button>
    </div>
  );
};

export default CountryCard;
