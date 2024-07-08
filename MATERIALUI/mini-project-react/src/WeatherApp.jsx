import SearchBox from "./SearchBox";
import { useState } from 'react'
import InfoBox from "./InfoBox";
export default function WeatherApp(){
    let [weatherInfo,setWeatherInfo]=useState({city:"Delhi",
    feelsLike:24.84,
    humidity:30,
    temp:30,
    tempMax:30,
    tempMin:30,
    weather:"Clouds"});
    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }
   
    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather app by delta</h2>
            <SearchBox  updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}