import { useState } from 'react';
import Input from './Input'
import Square from './Square';

function App() {
const [colorValue, setColorValue] = useState('')
const [hexValue, setHexValue] = useState('')
const [isDarkText, setIsDarkText] = useState(true)
  return (
    <div classname = "App">
      <Square
        colorValue={colorValue}
        hexValue={hexValue}
        isDarkText={isDarkText}
        isColorText
      />
      <Input
        colorValue={colorValue}
        setColorValue={setColorValue}
        hexValue={hexValue}
        setHexValue={setHexValue}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      />    
    </div>
  );
}

export default App;
