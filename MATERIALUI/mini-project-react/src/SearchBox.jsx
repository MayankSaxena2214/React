
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import "./SearchBox.css";
import {useState} from "react";
export default function SearchBox({updateInfo}){
    let [city,setCity]=useState("");
    let [error,setError]=useState(false);
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="7de1771aed3727c40e7e6c84c1aff945"
    let getWeatherInfo=async()=>{
        try{
                let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
                let jsonResponse=await response.json();
                // console.log(jsonResponse);
                let result={
                city:city,
                temp:jsonResponse.main.temp,
                tempMin:jsonResponse.main.temp_min,
                tempMax:jsonResponse.main.temp_max,
                humidity:jsonResponse.main.humidity,
                feelsLike:jsonResponse.main.feels_like,
                weather:jsonResponse.weather[0].description,
                }
            return result;
        }
        catch(err){
            throw err;
        }
    }
    
    let handleChange=(event)=>{
        setCity(event.target.value);
    }
    let handleSubmit=async(event)=>{
        try{
            event.preventDefault();
        console.log(city);
        setCity("");
        let newinfo=await getWeatherInfo();
        updateInfo(newinfo);
        }
        catch(err){
            setError(true);
        }
    }
    return (
        <div className="Searchbox">
            <h1>Search for the weather</h1>
            <br />
            <form onSubmit={handleSubmit}>
            <TextField id="city" onChange={handleChange} value={city} label="city name" variant="outlined" required/>
            <br /><br />
            <Button type="submit" variant="contained" endIcon={<SendIcon />}>
                Search
            </Button>
            {error && <p>Something went wrong</p>}
            </form>
        </div>
    )
}