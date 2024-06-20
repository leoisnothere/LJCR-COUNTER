import React from 'react';
import { useState, useEffect } from 'react';

const Counter = () => {
    const [segundoActual, setsegundoActual] = useState(0);

    useEffect(() => {
        const intervalo = setInterval(() => {
            setsegundoActual((segundoActual) => {
                segundoActual++;
                    
                let digitoStr = segundoActual.toString();

                for(let i = 0; i < digitoStr.length; i++) {
                    document.getElementById("pos" + (digitoStr.length -i)).textContent = digitoStr[i];
                }
                
                return segundoActual;
            });
        }, 1000);
        return  () => clearInterval(intervalo);
    }, [segundoActual]);

  return (
    <div>
        <div className="container">
			<div className="row bg-dark text-light h1 p-3 text-center">
				<div className="col" id="logo">
                    <i>Clock</i>
                </div>
				<div className="col" id="pos6">0</div>
				<div className="col" id="pos5">0</div>
				<div className="col" id="pos4">0</div>
				<div className="col" id="pos3">0</div>
				<div className="col" id="pos2">0</div>
				<div className="col" id="pos1">0</div>
			</div>
		</div>
    </div>
  )
}

export default Counter;