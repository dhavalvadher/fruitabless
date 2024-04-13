import axios from "axios"
import { ADDTOCART, GETCARTDATA } from "../ActionType"
import { baseURL } from "../../../../Utils/baseURL"


export const addtocart=(data)=>async(dispatch)=>{
    try {
        await axios.post(baseURL+'cart',data)
        .then((responce)=>dispatch({type:ADDTOCART,payload:responce.data}) )
      .catch((error)=>console.log(error))
    } catch (error) {
        
    }
}

export const getcart=()=>async(dispatch)=>{
    try {
      await axios.get(baseURL+'cart')
       .then((responce)=>{
          dispatch({type:GETCARTDATA,payload:responce.data})
  
       })
       .catch((error)=>{

       })
       
    } catch (error) {
       
    }
    
  }