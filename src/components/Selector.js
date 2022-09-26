import { Box, FormControl, InputLabel, MenuItem, Select, Slider, TextField, Typography } from '@mui/material';
import { padding } from '@mui/system';
import React, { useEffect, useRef, useState } from 'react'
import './selector.css'

const Selector = ({ tempCallback }) => {

  const [Temprature, setTemprature] = useState(20);
  const [Medium, setMedium] = useState('Celsius');

  // const [SliderPercentage, setSliderPercentage] = useState(20);

  useEffect(() => {
    switch (Medium) {
      case 'Celsius':
        if (Temprature < 0) {
          setTemprature(0);
        } else if (Temprature > 100) {
          setTemprature(100);
        }
        break;
      case 'Fahrenheit':
        if (Temprature < 32) {
          setTemprature(32);
        } else if (Temprature > 212) {
          setTemprature(132);
        }
        break;
      case 'Kelvin':
        if (Temprature < 273) {
          setTemprature(273);
        } else if (Temprature > 373) {
          setTemprature(373);
        }
        break;
    }
    // console.log(Temprature, Medium)

    // let min = tempRef.current.min;
    // let max = tempRef.current.max;
    // setSliderPercentage(100 * (Temprature- min) / (max - min)) ;

    tempCallback(Temprature, Medium)

  }, [Medium, Temprature])

  return (
    <Box className='selector'>
      {/* <select onChange={(e) => { setMedium(e.target.value); }} value={Medium} name="temp" id="temp">
        <option className='option' value="Celsius">Celsius</option>
        <option className='option' value="Fahrenheit">Fahrenheit</option>
        <option className='option' value="Kelvin">Kelvin</option>
      </select> */}
      <Box sx={{
        width: "150px",
        padding: "10px 0"
      }}>
        <FormControl fullWidth>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={Medium}
            onChange={(e) => { setMedium(e.target.value); }}
          >
            <MenuItem value="Celsius">Celsius</MenuItem>
            <MenuItem value="Fahrenheit">Fahrenheit</MenuItem>
            <MenuItem value="Kelvin">Kelvin</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box sx={{
        width: "150px",
        padding: "10px 0"
      }}>
        <FormControl fullWidth>
          <TextField onChange={(e) => { setTemprature(e.target.value); }} value={Temprature} type="number" variant="outlined" />
        </FormControl>
      </Box>

      <Box sx={{
        width: "150px",
        padding: "10px 0"
      }}>
        <FormControl fullWidth>
          {Medium === 'Celsius' ?
            <Slider
              onChange={(e) => { setTemprature(e.target.value); }}
              value={Temprature}
              min={0}
              max={100}
            /> : <></>
          }
          {Medium === 'Fahrenheit' ?
            <Slider
              onChange={(e) => { setTemprature(e.target.value); }}
              value={Temprature}
              min={32}
              max={212}
            /> : <></>
          }
          {Medium === 'Kelvin' ?
            <Slider
              onChange={(e) => { setTemprature(e.target.value); }}
              value={Temprature}
              min={273}
              max={373}
            /> : <></>
          }
        </FormControl>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography sx={{
          fontWeight: 'bold'
        }}>
          {Temprature}
        </Typography>&deg; {Medium}
      </Box>
    </Box>
  )
}

export default Selector
