import axios from "axios";
import API_URL from "../data/API/API_URL";

const getAllCountries = async ()=>{
    try{
        const {data} = await axios.get(API_URL)
        return data
    } catch (err){
        console.error(err)
    }
}

export {getAllCountries}