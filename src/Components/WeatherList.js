import React, { useContext } from 'react'
import WeatherContext from '../Context/Context';
import  { Card, CardContent, CardMedia, Typography } from '@mui/material';


function WeatherList() {
    const { weatherData } = useContext(WeatherContext)

    return (
        <div className='data'>

        {weatherData.map((item, index) => {
            if(index < 7) {
                const date = new Date(item.date)
                const dayNumber = date.getDay();
                const daysOfWeek = ['PAZAR', 'PAZARTESİ', 'SALI', 'ÇARŞAMBA', 'PERŞEMBE', 'CUMA', 'CUMARTESİ']
                const day = daysOfWeek[dayNumber]
                return (
                    <Card key={item.date}
                            sx={{ display:'flex', 
                                    maxWidth: 300, 
                                    justifyContent:'center', 
                                    alignItems:'center',
                                    margin:'10px' 
                                }}>
                        <CardMedia
                            sx={{ height: 50, width:50}} 
                            image={item.day.condition.icon}
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" sx={{fontSize: 16, color:'#17d3a5', fontWeight:'550', fontFamily: 'Monospace' }}>
                                {day}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{fontSize: 13, color:'#8087a1', fontFamily: 'Monospace'  }}>
                            {item.day.avgtemp_c} °C
                            </Typography>
                        </CardContent>
                    </Card>
                )
                }
    })}
        </div>

    )
}

export default WeatherList






// <>
// <img src={`https://${weatherData[0].day.condition.icon}`}></img>
// <p>{weatherData[0].day.avgtemp_c}</p>
// </>