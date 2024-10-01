import { useState } from 'react';
import Input from './Input';
import Button from './Button';

const Compare = () => {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [comparisonResult, setComparisonResult] = useState('');

  const handleCompareButton = () => {
    setComparisonResult(text1 === text2 ? '=' : '!=');
    console.log(text1)
    console.log(text2)
  };

  return (
    <div>
      <p>COMPARADOR DE TEXTOS</p>
      <Input type="text" value={text1} onChange={(e) => setText1(e.target.value)} placeholder="Introduce un texto" id="compare-text1"/>
      <span>{comparisonResult}</span>
      <Input type="text" value={text2} onChange={(e) => setText2(e.target.value)} placeholder="Introduce un texto" id="compare-text2"/>
      <Button onClick={handleCompareButton}>Compare</Button>
    </div>
  );
};

export default Compare;

{/*onChange={(e) => setText1(e.target.value)} detecta que hay un cambio, recoge el cambio que ha habido y ejecutamos una funcion */}