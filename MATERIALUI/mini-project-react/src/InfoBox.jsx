import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './InfoBox.css';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import WbCloudyIcon from '@mui/icons-material/WbCloudy';
export default function InfoBox({info}){
    const cloudUrl="https://plus.unsplash.com/premium_photo-1674475564066-f063d788abbe?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdWR5fGVufDB8fDB8fHww"
    const hotUrl="https://images.unsplash.com/photo-1610557013547-dc7a52d44709?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90JTIwdGVtcGVyYXR1cmV8ZW58MHx8MHx8fDA%3D";
    const coldUrl="https://images.unsplash.com/photo-1433162653888-a571db5ccccf?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZHxlbnwwfHwwfHx8MA%3D%3D";
    const rainUrl="https://images.unsplash.com/photo-1503435824048-a799a3a84bf7?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFpbnxlbnwwfHwwfHx8MA%3D%3D";
    
   
    return (
        <div className="InfoBox">
            <h1>Weather Info:{info.weather.toUpperCase()}</h1>
            <div className="cardContainer">
            <Card sx={{ maxWidth: 500 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.weather==="Clouds"?cloudUrl:info.humidity>80?rainUrl:info.temp>15?hotUrl:coldUrl}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
            {info.weather==="Clouds"?<WbCloudyIcon/>:info.humidity>80?<ThunderstormIcon/>:info.temp>15?<WbSunnyIcon/>:<AcUnitIcon/>}
          
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <p> Feels Like : {info.feelsLike}</p>
          <p> Humidity : {info.humidity}</p>
          <p> Temp : {info.temp}</p>
          <p> Temp Max : {info.tempMax}&deg;</p>
          <p> Temp Min : {info.tempMin}&deg;</p>
          <p> Weather can be described as  : {info.weather}</p>

        </Typography>
      </CardContent>
      
    </Card>
            </div>
        </div>
    )
}