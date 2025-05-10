import React from 'react'
import type { ICountrie } from '../../../data/Interfaces'
import style from './CountryCard.module.css'

interface CountryProps {
    country: ICountrie;
    handleDelete: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
  }

const CountryCard: React.FC<CountryProps> = ({country, handleDelete})=>{
  return (
        <div className={style['country-card']}>
          <img className={style.flag} src={country.flag} alt={country.name}/>
          <h2><span className={style.description}> Страна:</span>{country.name}</h2>
          <h3><span className={style.description}> Столица:</span>{country.capital}</h3>
          <p><span className={style.description}> Численность населения:</span> {country.population}</p>
          <button className={style.btnDelete} onClick={(event)=>handleDelete(event, +country.id)}>Удалить</button>
        </div>
  )
}

export default CountryCard