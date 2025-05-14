import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type { ICountry } from "../../../Interfaces/Interfaces";
import { getOneCountryById } from "../../../API/apiService";
import style from "./Details.module.css";
import BoxCountry from "../../UI/BoxCountry/BoxCountry";

const Details: React.FC = () => {
  const [countryInfo, setCountryInfo] = useState<ICountry>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isNotFound, setIsNotFound] = useState<boolean>(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (!id) return;
    getOneCountryById(id)
      .then((data) => {
        if (!data || typeof data === "number") {
          setIsNotFound(!isNotFound);
          return;
        }
        setCountryInfo(data);
      })
      .catch((error) => console.error("Ошибка загрузки страны:", error))
      .finally(() => setIsLoading(false));
  }, [id]);

  return (
    <div>
      {isLoading && <p>Загрузка...</p>}
      {isNotFound && <p>Запрашиваемая страница не найдена</p>}
      <button className={style.toBack} onClick={() => navigate(-1)}>
        &#8592; Назад
      </button>
      {countryInfo && <BoxCountry country={countryInfo} />}
    </div>
  );
};

export default Details;
