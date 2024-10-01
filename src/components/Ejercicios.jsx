import React from 'react';
import Compare from './Compare';
import Counter from './Counter';
import SquareRoot from './SquareRoot';
import Concat from './Concat'
import ChangeColor from './ChangeColor';
import ChangeSize from './ChangeSize';
import GuessWord from './GuessWord';

const Ejercicios = ({ ejercicio, setBackgroundColor }) => {

  console.log(ejercicio)
  const renderizarEjercicios = () => {
    switch(ejercicio) {
      case 'Compare':
        return <Compare />;
      case 'Counter':
        return <Counter />;
      case 'Square Root':
        return <SquareRoot />;
      case 'Concat':
        return <Concat />;
      case 'Change Color':
        return <ChangeColor backgroundColor={setBackgroundColor}/>;
      case 'Change Size':
        return <ChangeSize />;
      case 'Guess Word':
        return <GuessWord />;
      default:
        return <p>Selecciona un ejercicio.</p>;
    }
  };

  return (
    <div>
      <h1>{ejercicio}</h1>
      {renderizarEjercicios()}
    </div>
  );
};

export default Ejercicios;
