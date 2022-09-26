import './App.css';
import Selector from './components/Selector';
import Display from './components/Display';
import { useState } from 'react';
import { Box } from '@mui/material';

function App() {

  const [Temp, setTemp] = useState(20)
  const [Medium, setMedium] = useState('Celsius')
  // const [TempPer, setTempPer] = useState(20)

  const handleTempChange = (data, medium, sliderPer) => {
      setTemp(data);
      setMedium(medium);
      // setTempPer(sliderPer);
      // console.log(Medium)
      // console.log(data)
  }

  return (
    <Box className="App">
      <Selector tempCallback={handleTempChange}/>    
      <Display tempVal={Temp}  MedVal={Medium}/>
    </Box>
  );
}

export default App;
