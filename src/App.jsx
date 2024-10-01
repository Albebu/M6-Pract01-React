import { useState, useCallback } from 'react';
import Card from './components/Card';
import Button from './components/Button';
import Header from './components/Header';
import Ejercicios from './components/Ejercicios';

const App = () => {
  const [selected, setSelected] = useState(0);
  const [inside, setInside] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState('#4A90E2')

  const exercises = [
    "Compare",
    "Counter",
    "Square Root",
    "Concat",
    "Change Color",
    "Change Size",
    "Guess Word"
  ];

  // useCallback optimiza el manejo de la memoria al no tener que recargar constantemente las funciones. 
  const handleLeftClick = useCallback(() => {
    setSelected(prevSelected => Math.max(prevSelected - 1, 0));
  }, []);

  const handleRightClick = useCallback(() => {
    setSelected(prevSelected => Math.min(prevSelected + 1, exercises.length - 1));
  }, [exercises.length]);

  const handleCardClick = useCallback(() => {
    setInside(true);
  }, []);

  const handleInsideClick = useCallback(() => {
    setInside(false);
  }, []);

  const isInside = useCallback(() => {
    if (!inside) {
      return(
        <div className='App-isIn'>
            <Card onClick={handleCardClick}>{exercises[selected]}</Card>
            <div className='App-isIn-exercise'>
              <Button onClick={handleLeftClick} label="Anterior">Anterior</Button>
              <Button onClick={handleRightClick} label="Siguiente">Siguiente</Button>
            </div>
        </div>
      );
    } else {
      return(
        <div className='App-isIn'>
          <div className='App-isIn-exercise'>
            <Ejercicios ejercicio={exercises[selected]} setBackgroundColor={setBackgroundColor} />
          </div>
          <div className='App-isIn-exit'>
            <button onClick={handleInsideClick}>Salir</button>
          </div>
        </div>
      );
    }
  })

  return (
    <main>
      <Header exercises={exercises} setSelected={setSelected} setInside={setInside} backgroundColor={backgroundColor}/>
      <div className='body'>
         {isInside()}
      </div>
    </main>
  );
}

export default App;
