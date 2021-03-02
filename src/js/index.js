import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import "bootstrap";

import "../styles/index.scss";

function Counter(props) {
	return (
		<div className="Principal">
			<div className="ImagenReloj">
				<i className="far fa-clock"></i>
			</div>
			<div className="CuartaPosicion">{props.numeroCuatro % 10}</div>
			<div className="TerceraPosicion">{props.numeroTres % 10}</div>
			<div className="SegundaPosicion">{props.numeroDos % 10}</div>
			<div className="PrimerPosicion">{props.numeroUno % 10}</div>
		</div>
	);
}

Counter.propTypes = {
	numeroCuatro: PropTypes.number,
	numeroTres: PropTypes.number,
	numeroDos: PropTypes.number,
	numeroUno: PropTypes.number
};

let contador = 0;
setInterval(function() {
	const cuarto = Math.floor(contador / 1000);
	const tercero = Math.floor(contador / 100);
	const segundo = Math.floor(contador / 10);
	const primero = Math.floor(contador / 1);
	console.log(cuarto, tercero, segundo, primero);
	contador++;
	ReactDOM.render(
		<Counter
			numeroUno={primero}
			numeroDos={segundo}
			numeroTres={tercero}
			numeroCuatro={cuarto}
		/>,
		document.querySelector("#app")
	);
}, 1000);
