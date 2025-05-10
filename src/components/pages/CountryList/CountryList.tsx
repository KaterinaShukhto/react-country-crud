import React, { useEffect, useState } from "react";
import { getAllCountries } from "../../../API/apiService";
import CountryCard from "../../UI/CountryCard/CountryCard";
import type { ICountries } from "../../../data/Interfaces";
import style from './CountryList.module.css'
import { Link } from "react-router-dom";

 const CountryList: React.FC = ()=>{
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [countries, setCountries] = useState<ICountries[]>([])

  useEffect(() => {
    setIsLoading(true);
    getAllCountries()
      .then((res) => {
        setCountries(res || []);
      })
      .catch((error) => console.error("Ошибка загрузки стран:", error))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className={style.wrapperList}>
      {isLoading ? <p>Загрузка...</p>:''}
      {countries?.length>0 && countries.map((country: ICountries)=><Link key={country.id}  to={`/countries/${country.id}`}><CountryCard country={country}/></Link>) }
    </div>
  );
}

export default CountryList
