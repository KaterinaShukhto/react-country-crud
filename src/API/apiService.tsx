import axios from "axios";
import API_URL from "./API_URL";

const getAllCountries = async ()=>{
    try{
        const {data} = await axios.get(API_URL)
        return data
    } catch (err){
        console.error(err)
    }
}

const getOneCountryById = async (id: number | string)=>{
    try{    
        const {data} = await axios.get(API_URL+'/'+id)
        return data
    }catch(err){
        console.error(err)
    }
}

const deleteCountryById = async (id: number | string)=>{
    try{    
        const {data} = await axios.get(API_URL+'/'+id)
        return data
    }catch(err){
        console.error(err)
    }
}

export {getAllCountries, getOneCountryById, deleteCountryById}