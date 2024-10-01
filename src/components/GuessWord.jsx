import { useState } from 'react';

const guessWordWords = [
    "gato",
    "elefante",
    "luz",
    "cielo",
    "mariposa",
    "espejo",
    "nube",
    "estrella",
    "árbol",
    "río"
];

const selectRandomWord = () => {
    let randomNumber = Math.floor(Math.random() * guessWordWords.length);
    return guessWordWords[randomNumber];
};

const GuessWord = () => {
    const [palabraSecreta, setPalabraSecreta] = useState(selectRandomWord());
    const [guessWord, setGuessWord] = useState('');
    const [guessedMessage, setGuessedMessage] = useState('');
    const [guessedLetters, setGuessedLetters] = useState(0);

    const guessGame = () => {
        if (guessWord === palabraSecreta) {
            setGuessedMessage('Has acertado. Felicidades');
        } else {
            const letters = guessWord.split('');
            let count = 0;

            letters.forEach(letter => {
                if (palabraSecreta.includes(letter)) count += 1;
            });

            setGuessedLetters(count);
            setGuessedMessage(`Has adivinado ${count} letras.`);
        }
    };

    console.log(palabraSecreta)

    return (
        <div>
            <h1>Juego de Adivinar la Palabra</h1>
            <input 
                type="text" 
                value={guessWord} 
                onChange={(e) => setGuessWord(e.target.value)} 
                placeholder="Introduce una palabra"
            />
            <button onClick={guessGame}>Adivinar</button>
            <p>{guessedMessage}</p>
        </div>
    );
};

export default GuessWord;
