import React from "react";
import { useForm } from "react-hook-form";
import type { ICountry } from "../../../Interfaces/Interfaces";
import styles from "./Form.module.css";
import { addNewCountry } from "../../../API/apiService";

const Form: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ICountry>({
    mode: "onChange",
  });

  async function onSubmit(data: ICountry): Promise<void> {
    try {
      await addNewCountry(data);
      alert("Новая страна добавлена");
      reset();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <form className={styles.mainForm} onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">
        Страна:
        <input
          {...register("name", { required: true })}
          type="text"
          id="name"
          placeholder="Введите название страны"
        />
        {errors.name && <span>{errors.name.message}</span>}
      </label>
      <label htmlFor="capital">
        Столица:
        <input
          {...register("capital")}
          type="text"
          id="capital"
          placeholder="Введите название столицы"
        />
        {errors.capital && <span>{errors.capital.message}</span>}
      </label>
      <label htmlFor="population">
        Численность населения:
        <input
          {...register("population")}
          type="number"
          id="population"
          placeholder="Введите количество населения"
        />
        {errors.population && <span>{errors.population.message}</span>}
      </label>
      <label htmlFor="flag">
        Флаг (URL):
        <input
          {...register("flag")}
          type="text"
          id="flag"
          placeholder="Вставте ссылку на изображение флага"
        />
        {errors.flag && <span>{errors.flag.message}</span>}
      </label>
      <button type="submit">Добавить</button>
    </form>
  );
};

export default Form;
