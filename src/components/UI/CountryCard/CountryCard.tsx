import React from 'react'
import type { ICountries } from '../../../data/Interfaces'
import style from './CountryCard.module.css'

interface CountryProps {
    country: ICountries;
  }

const CountryCard: React.FC<CountryProps> = ({country})=>{
  return (
        <div className={style['country-card']}>
          <img className={style.flag} src={country.flag} alt={country.name}/>
          <h2>{country.name}</h2>
          <h3>{country.capital}</h3>
          <p>{country.population}</p>
        </div>
  )
}

export default CountryCard