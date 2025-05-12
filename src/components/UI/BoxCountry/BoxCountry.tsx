import React, { useReducer, useState } from "react";
import type { ICountry } from "../../../Interfaces/Interfaces";
import styles from "./BoxCountry.module.css";
import { reducer } from "../../../Redusers/reduserForUpdate";
import { updateCountry } from "../../../API/apiService";

interface CountryProps {
  country: ICountry;
}

const BoxCountry: React.FC<CountryProps> = ({ country }) => {
  const [info, dispatch] = useReducer(reducer, country);
  const [editField, setEditField] = useState<string | null>(null);

  function activeEdit(field: string): void {
    if (editField !== null && editField !== field) return;
    setEditField((prev) => (prev === field ? null : field));
    if (editField !== null) handleSave();
  }

  function handleEdit(event: React.ChangeEvent<HTMLInputElement>): void {
    if (!editField) return;
    dispatch({ type: editField, payload: event.target.value });
  }

  function handleSave(): void {
    if (!editField) return;
    if (JSON.stringify(info) !== JSON.stringify(country)) {
      updateCountry(country.id, info);
    }
  }

  return (
    <div
      className={styles.wrapper}
      style={{
        background: `linear-gradient(90deg,rgba(255, 255, 255, 0) 0%, 
                        rgba(255, 255, 255, 1) 40%, 
                        rgba(255, 255, 255, 1) 100%),
                        url(${country.flag}) left/contain no-repeat`,
      }}
    >
      <div className={styles.infoBox}>
        <p>
          <span
            className={styles.edit}
            onClick={() => activeEdit("name")}
            id="name"
          >
            {editField === "name" ? "save" : "edit"}
          </span>
          Страна:
          {editField === "name" ? (
            <input value={info.name} onChange={handleEdit}></input>
          ) : (
            <big>{info.name}</big>
          )}
        </p>
        <p>
          <span
            className={styles.edit}
            onClick={() => activeEdit("capital")}
            id="capital"
          >
            {editField === "capital" ? "save" : "edit"}
          </span>
          Столица:
          {editField === "capital" ? (
            <input value={info.capital} onChange={handleEdit}></input>
          ) : (
            <big>{info.capital}</big>
          )}
        </p>
        <p>
          <span
            className={styles.edit}
            onClick={() => activeEdit("population")}
            id="population"
          >
            {editField === "population" ? "save" : "edit"}
          </span>
          Численность населения:
          {editField === "population" ? (
            <input
              type="number"
              value={info.population}
              onChange={handleEdit}
            ></input>
          ) : (
            <big>{info.population}</big>
          )}
        </p>
      </div>
    </div>
  );
};

export default BoxCountry;
