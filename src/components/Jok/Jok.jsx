import { useState } from 'react';
import Data from './Data.json';
import './Jok.css';

const Jok = () => {
    const [joks, setJoks] = useState(Data[0]);


    const generateNumber = () => {
        let randomNumber = Math.floor(Math.random() * Data.length);
        setJoks(Data[randomNumber]);
        console.log(joks);
    }

    return (
        <div className='parant'>
            <h1>Jok-Generator</h1>
            <div className="container">
                <div className="jok">

                    {/* jok will be here  */}
                    <h3>{joks.setup}</h3>
                    <p>{joks.punchline}</p>
                    <p>{joks.type}</p>

                </div>

                <div className="btn-container">
                    <button onClick={generateNumber} className="btn">Generate Jok!</button>
                </div>

            </div>
        </div>
    )
}

export default Jok;
