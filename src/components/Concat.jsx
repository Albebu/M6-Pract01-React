import { useState } from "react";
import Button from "./Button";
import Input from "./Input";

const Concat = () => {

    const [text1, setText1] = useState('')
    const [text2, setText2] = useState('')
    const [text3, setText3] = useState('')

    const handleConcat = () => {
        setText3(text1 + text2)
    }

    return (
        <>
            <p>CONCATENAR TEXTOS</p>
            <Input type="text" id="concat-text-1" onChange={(e) => setText1(e.target.value)} placeholder="Introduce un texto"/>
            <Input type="text" id="concat-text-2" onChange={(e) => setText2(e.target.value)}placeholder="Introduce un texto"/>
            <span id="concat-result">{text3}</span>
            <Button onClick={handleConcat}>Concatenar</Button>
        </>
    );
}

export default Concat