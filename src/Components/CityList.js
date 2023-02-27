import { Autocomplete, TextField } from '@mui/material';
import { useContext } from 'react'
import WeatherContext from "../Context/Context"


function CityList() {
    const { cities, city, setCity } = useContext(WeatherContext);
    console.log(city);
  return (
        <Autocomplete
        value={city}
        onChange={(event, newValue) => {
            setCity(newValue);
          }}
        disablePortal
        id="combo-box-demo"
        options={cities}
        getOptionLabel={(option) => option?.name??""}
        sx={{ width: 300, fontFamily: 'Monospace' }}
        renderInput={(params) => <TextField {...params} label="Şehirler" />}
        />
  )
}

export default CityList