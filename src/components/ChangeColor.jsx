import { useEffect, useState } from 'react';
import Input from './Input';
import Button from './Button';
import '../styles/ChangeColor.css'

const ChangeColor = ({ backgroundColor }) => {
  const [color, setColor] = useState('');
  const [lastColors, setLastColors] = useState([]);

  const handleColorChange = () => {
    // Usar el estado "color" en lugar de e.target.value
    backgroundColor(color);
    
    // Añadir el color actual al historial de colores
    const newColor = lastColors.concat(color);
    setLastColors(newColor);
  };

  const displayLastColors = () => {
    if (lastColors.length !== 0) {
      if (lastColors.length > 10) {
        return (
          <>
            <ul>
          {lastColors.map((color, index) => (
            <li key={index} style={{backgroundColor: color}}>{color}</li>
          ))}
        </ul>
          <Button onClick={() => setLastColors([])}>Reiniciar</Button>
          </>
        )
      }
      return (
        <ul>
          {lastColors.map((color, index) => (
            <li key={index} style={{backgroundColor: color}}>{color}</li>
          ))}
        </ul>
      );
    }

    

  };

  useEffect(() => {
    console.log('Last colors:', lastColors);
  }, [lastColors]);

  return (
    <>
      <div className='ChangeColor-top'>
        <p>CAMBIO DE COLOR DEL HEADER Y FOOTER</p>
        {/* Actualiza el estado "color" cuando se selecciona un nuevo color */}
        <Input 
          type="color" 
          value={color} 
          onChange={(e) => setColor(e.target.value)} 
        />
        {/* Usa el "color" actual cuando el usuario presiona el botón */}
        <Button onClick={handleColorChange}>Select Color</Button>
      </div>
      <div className='ChangeColor-bottom'>
        {displayLastColors()}
      </div>
    </>
  );
};

export default ChangeColor;
