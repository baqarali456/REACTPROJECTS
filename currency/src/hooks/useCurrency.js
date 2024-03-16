import { useState,useEffect } from "react";

function useCurrency(currency){
 useEffect(()=>{
   fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
   .then(res=>res.json())
   .then()
 },[currency])
}