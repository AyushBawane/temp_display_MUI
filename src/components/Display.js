import { Box, FormControl, MenuItem, Select } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react'
import './display.css'

const Display = ({ tempVal, MedVal }) => {

  const [Medium, setMedium] = useState('Celsius');
  const [ConvertedTemp, setConvertedTemp] = useState(20);
  const [ThermoPercentage, setThermoPercentage] = useState(0);
  // console.log(tempVal)
  // console.log(MedVal)


  useEffect(() => {

    function FromCelsius(params) {
      setThermoPercentage(100 * (params - 0) / (100 - 0) + 0)
      switch (Medium) {
        case 'Celsius':
          return params;
          break;
        case 'Fahrenheit':
          // console.log(params)
          return (params * 9 / 5) + 32;
          break;
        case 'Kelvin':
          return params + 273.15
          break;
        default:
          break;
      }
    }

    //function for conversion from fahrenheit
    function FromFahrenheit(params) {
      setThermoPercentage(100 * (params - 32) / (212 - 32) + 0)
      switch (Medium) {
        case 'Celsius':
          return (params - 32) * 5 / 9
          break;
        case 'Fahrenheit':
          return params;
          break;
        case 'Kelvin':
          return (params + 459.67) * (5 / 9)
          break;
        default:
          break;
      }
    }

    //function for conversion from kelvin
    function FromKelvin(params) {
      setThermoPercentage(100 * (params - 273) / (373 - 273) + 0)
      switch (Medium) {
        case 'Celsius':
          return params - 273.15
          break;
        case 'Fahrenheit':
          return (params * 9 / 5) - 459.67;
          break;
        case 'Kelvin':
          return params;
          break;
        default:
          break;
      }
    }

    let result;
    // alert(tempToConv.value);
    switch (MedVal) {
      case 'Celsius':
        result = FromCelsius(parseFloat(tempVal));
        setConvertedTemp(parseInt(result))
        // console.log('from cel')
        break;
      case 'Fahrenheit':
        result = FromFahrenheit(parseFloat(tempVal));
        setConvertedTemp(parseInt(result))
        // console.log('from fer')
        break;
      case 'Kelvin':
        result = FromKelvin(parseFloat(tempVal));
        setConvertedTemp(parseInt(result))
        // console.log('from kel')
        break;
    }
    // console.log(parseInt(result))

    console.log(ThermoPercentage)

  }, [Medium, tempVal, MedVal])


  return (
    <Box className='display'>
      {/* <Box className="">
        <select onChange={(e) => { setMedium(e.target.value) }} value={Medium} name="temp" id="tempD">
          <option className='option' value="Celsius">Celsius</option>
          <option className='option' value="Fahrenheit">Fahrenheit</option>
          <option className='option' value="Kelvin">Kelvin</option>
        </select>
      </Box> */}

      <Box sx={{
        width: "150px",
        padding: "10px 0"
      }}>
        <FormControl fullWidth>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            onChange={(e) => { setMedium(e.target.value) }}
            value={Medium}
          >
            <MenuItem value="Celsius">Celsius</MenuItem>
            <MenuItem value="Fahrenheit">Fahrenheit</MenuItem>
            <MenuItem value="Kelvin">Kelvin</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box className="dispInner">
        <Box className="thermometer">
          <Box style={{ height: `${ThermoPercentage}%` }} className="temprature"></Box>
        </Box>
        {Medium === 'Celsius' ?
          <Box className="scale">
            <Box>-&ensp; 100&deg;</Box>
            <Box>-&ensp;  90&deg;</Box>
            <Box>-&ensp;  80&deg;</Box>
            <Box>-&ensp;  70&deg;</Box>
            <Box>-&ensp;  60&deg;</Box>
            <Box>-&ensp;  50&deg;</Box>
            <Box>-&ensp;  40&deg;</Box>
            <Box>-&ensp;  30&deg;</Box>
            <Box>-&ensp;  20&deg;</Box>
            <Box>-&ensp;  10&deg;</Box>
            <Box>-&ensp;   0&deg;</Box>
          </Box>
          :
          <>{Medium === 'Fahrenheit' ?
            <Box className="scale">
              <Box>-&ensp; 212&deg;</Box>
              <Box>-&ensp;  194&deg;</Box>
              <Box>-&ensp;  176&deg;</Box>
              <Box>-&ensp;  158&deg;</Box>
              <Box>-&ensp;  140&deg;</Box>
              <Box>-&ensp;  122&deg;</Box>
              <Box>-&ensp;  104&deg;</Box>
              <Box>-&ensp;  86&deg;</Box>
              <Box>-&ensp;  68&deg;</Box>
              <Box>-&ensp;  50&deg;</Box>
              <Box>-&ensp;  32&deg;</Box>
            </Box> :
            <Box className="scale">
              <Box>-&ensp; 373&deg;</Box>
              <Box>-&ensp; 363&deg;</Box>
              <Box>-&ensp; 353&deg;</Box>
              <Box>-&ensp; 343&deg;</Box>
              <Box>-&ensp; 333&deg;</Box>
              <Box>-&ensp; 323&deg;</Box>
              <Box>-&ensp; 313&deg;</Box>
              <Box>-&ensp; 303&deg;</Box>
              <Box>-&ensp; 293&deg;</Box>
              <Box>-&ensp; 283&deg;</Box>
              <Box>-&ensp; 273&deg;</Box>
            </Box>
          }</>

        }
      </Box>
      <Box className="showTempDisplay">{ConvertedTemp}&deg; {Medium}</Box>
    </Box>
  )
}

export default Display
