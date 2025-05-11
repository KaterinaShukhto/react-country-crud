import axios from "axios";
import API_URL from "./API_URL";
import type { ICountrie } from "../Interfaces/Interfaces";

const getAllCountries = async (): Promise<ICountrie[] | undefined>=>{
    try{
        const {data} = await axios.get<ICountrie[]>(API_URL)
        return data
    } catch (err){
        console.error(err)
    }
}

const getOneCountryById = async (id: number | string): Promise<ICountrie | number | null> =>{
    try{    
        const {data} = await axios.get<ICountrie>(`${API_URL}/${id}`)
        return data
    }catch(err){
        if (axios.isAxiosError(err) && err.response){
            console.error(`Ошибка HTTP ${err.response.status}: ${err.response.data}`);
            return err.response.status
        } else{
            console.error("Ошибка сети или неизвестная ошибка:", err);
        }
        return null; 
    }
}

const deleteCountryById = async (id: number | string): Promise<void>=>{
    try{    
        await axios.delete(API_URL+'/'+id)
    }catch(err){
        console.error(err)
    }
}

const updateCountry = async (id: number | string, data: ICountrie): Promise<void>=>{
    try{    
        await axios.put(API_URL+'/'+id, data)
    }catch(err){
        console.error(err)
    }
}

export {getAllCountries, getOneCountryById, deleteCountryById}