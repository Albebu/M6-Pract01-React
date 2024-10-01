import { useState } from 'react';
import Input from './Input';
import Button from './Button';

const SquareRoot = () => {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState(null);

  const handleSquareRootButton = () => {
    const sqrt = Math.round(Math.sqrt(number) * 100) / 100;
    setResult(sqrt);
  };

  return (
    <div>
      <p>RAIZ CUADRADA</p>
      <Input type="number" value={number} onChange={(e) => setNumber(e.target.value)} placeholder="Introduce un número" />
      <span>{result}</span>
      <Button onClick={handleSquareRootButton}>Calculate</Button>
    </div>
  );
};

export default SquareRoot;
