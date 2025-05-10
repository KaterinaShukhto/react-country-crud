import React, { useEffect, useState } from "react";
import { getAllCountries } from "../../../API/apiService";
import CountryCard from "../../UI/CountryCard/CountryCard";
import type { ICountrie } from "../../../data/Interfaces";
import style from './CountryList.module.css'
import { Link } from "react-router-dom";

 const CountryList: React.FC = ()=>{
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [countries, setCountries] = useState<ICountrie[] | []>([])

  function handleDelete(event: React.MouseEvent<HTMLButtonElement>, id: number): void{
    event.preventDefault();
    event.stopPropagation();
    console.log("Удалить?" + id)
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
      {isLoading ? <p>Загрузка...</p>:''}
      {countries?.length>0 && countries.map((country: ICountrie)=>(
        <Link key={country.id}  to={`/countries/${country.id}`}>
          <CountryCard country={country} handleDelete={handleDelete}/>
        </Link>)) }
    </div>
  );
}

export default CountryList
