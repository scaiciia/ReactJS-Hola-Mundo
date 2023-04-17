import React, { useState } from 'react';
import PropTypes from 'prop-types';


const GreetingF = (props) => {

    // Breve introduccion a useState
    // const [variable, metodoParaActualizarla] = useState(valorInicial);
    const [age, setage] = useState(32);

    const birthday = () => {
        // actualiza el State
        setage(age + 1);
    }

    return (
        <div>
            <h1>
                HOLA {props.name} desde componente funcional!
            </h1>
            <h2>
                Tu edad es de: { age }
            </h2>
            <div>
                <button onClick={birthday}>
                    Cumplir años
                </button>
            </div>
        </div>
    );
};


GreetingF.propTypes = {
    name: PropTypes.string,
};


export default GreetingF;
