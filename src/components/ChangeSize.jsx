import { useState } from 'react';
import Input from './Input';
import Button from './Button';
import '../styles/changeSize.css';

const ChangeSize = () => {
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(100);
  const [isAspectRatio, setIsAspectRatio] = useState(true);

  const ratio = width / height;

  const handleWidthChange = (e) => {
    const value = parseInt(e.target.value, 10);

    if (value <= 400 && value >= 0) {
      setWidth(value);
      if (isAspectRatio) {
        setHeight(Math.round(value / ratio));
      }
    }
  };

  const handleHeightChange = (e) => {
    const value = parseInt(e.target.value, 10);

    if (value <= 400 && value >= 0) {
      setHeight(value);
      if (isAspectRatio) {
        setWidth(Math.round(value * ratio)); 
      }
    }
  };

  const toggleAspectRatio = () => {
    setIsAspectRatio(prev => !prev); 
  };

  return (
    <div>
      <p>CAMBIO DE TAMAÑO</p>
      <span>Ancho: <Input type="number" value={width} onChange={handleWidthChange} /></span>
      <span>Alto: <Input type="number" value={height} onChange={handleHeightChange} /></span>
      <Button onClick={toggleAspectRatio}>
        {isAspectRatio ? 'Deshabilitar Relación de Aspecto' : 'Habilitar Relación de Aspecto'}
      </Button>
      <div className='changeSize-img'>
        <img 
          src="./src/assets/output.jpg" 
          alt="example" 
          style={{ width: `${width}px`, height: `${height}px` }} 
        />
      </div>
    </div>
  );
};

export default ChangeSize;
