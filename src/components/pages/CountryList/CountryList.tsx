import React, { useEffect, useState } from "react";
import { deleteCountryById, getAllCountries } from "../../../API/apiService";
import CountryCard from "../../UI/CountryCard/CountryCard";
import type { ICountry } from "../../../Interfaces/Interfaces";
import style from "./CountryList.module.css";
import { Link } from "react-router-dom";

const CountryList: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [countries, setCountries] = useState<ICountry[] | []>([]);

  function handleDelete(
    event: React.MouseEvent<HTMLButtonElement>,
    id: number | string
  ): void {
    const answer: boolean = confirm(
      "Вы действительно хотите удалить эту страну?"
    );
    event.preventDefault();
    event.stopPropagation();
    if (!answer) return;
    deleteCountryById(id)
      .then(() => {
        setCountries((prevCountries) =>
          prevCountries.filter((country) => country.id !== id)
        );
      })
      .catch((error) => console.error("Ошибка при удалении страны:", error));
  }

  useEffect(() => {
    setIsLoading(true);
    getAllCountries()
      .then((data) => {
        setCountries(data || []);
      })
      .catch((error) => console.error("Ошибка загрузки стран:", error))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className={style.wrapperList}>
      {isLoading ? <p>Загрузка...</p> : ""}
      {countries?.length > 0 &&
        countries.map((country: ICountry) => (
          <Link key={country.id} to={`/countries/${country.id}`}>
            <CountryCard
              country={country}
              handleDelete={(event) => handleDelete(event, country.id)}
            />
          </Link>
        ))}
    </div>
  );
};

export default CountryList;
