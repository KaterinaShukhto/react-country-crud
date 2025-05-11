import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type { ICountrie } from "../../../data/Interfaces";
import { getOneCountryById } from "../../../API/apiService";

const Details: React.FC = () => {
  const [countryInfo, setCountryInfo] = useState<ICountrie>()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [isNotFound, setIsNotFound] = useState<boolean>(false)
  const navigate = useNavigate()
  const {id} = useParams()

  useEffect(()=>{
    if(!id) return
    getOneCountryById(id)
    .then(data=>{
      if(!data || typeof data === 'number'){
        setIsNotFound(!isNotFound)
        return;
      }
      setCountryInfo(data)
    })
    .catch((error) => console.error("Ошибка загрузки страны:", error))
    .finally(()=> setIsLoading(false))
  }, [id])

  return (
    <div>
      {isLoading && <p>Загрузка...</p>}
      {isNotFound && <p>Запрашиваемая страница не найдена</p>}
      <button onClick={()=>navigate(-1)}>Назад</button>
      <h1>{countryInfo?.name}</h1>
    </div>
  );
};

export default Details;
