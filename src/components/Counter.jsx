import React, { useState } from 'react';
import Input from './Input'; // Asegúrate de que este componente esté configurado correctamente
import Button from './Button'; // Si tienes un componente Button personalizado

const Counter = () => {
  const [text, setText] = useState('');
  const [charCount, setCharCount] = useState(0);
  const maxLength = 30;

  const handleInputChange = (e) => {
    const inputText = e.target.value;

    // Permitir solo hasta 30 caracteres
    if (inputText.length <= maxLength) {
      setText(inputText);
      setCharCount(inputText.length);
    }
  };

  const handleClearInput = () => {
    setText(''); // Reinicia el texto a una cadena vacía
    setCharCount(0); // Reinicia el contador de caracteres
  };

  return (
    <div>
      <p>CONTADOR HASTA 30 LETRAS</p>
      <Input
        type="text"
        value={text}
        onChange={handleInputChange}
        placeholder="Introduce un texto"
        disabled={charCount >= maxLength}
      />
      <p>Caracteres: {charCount} / {maxLength}</p>
      <Button onClick={handleClearInput}>Borrar</Button> {/* Botón para limpiar el input */}
    </div>
  );
};

export default Counter;
