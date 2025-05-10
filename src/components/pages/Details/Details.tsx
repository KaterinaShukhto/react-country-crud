import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type { ICountrie } from "../../../data/Interfaces";
import { getOneCountryById } from "../../../API/apiService";

const Details: React.FC = () => {
  const [counrtyInfo, setCountryInfo] = useState<ICountrie>()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const navigate = useNavigate()
  const {id} = useParams()

  useEffect(()=>{
    if(id){
      getOneCountryById(id).then(data=>{
        setCountryInfo(data)
      }).catch((error) => console.error("Ошибка загрузки страны:", error))
      .finally(()=> setIsLoading(false))
    }
  }, [])

  return (
    <div>
      {isLoading && <p>Загрузка...</p>}
      <button onClick={()=>navigate(-1)}>Назад</button>
      <h1>{counrtyInfo?.name}</h1>
    </div>
  );
};

export default Details;
