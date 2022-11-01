import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// (1 + 2) / 3

class Card extends React.Component {
	render() {
		return <div className={"card " + this.props.className}>
			<div className="like">&lt;3</div>
			{this.props.smile}
			<h6>{this.props.text}</h6>
		</div>
		
	}
}

const emotions = [
	{smile: "=)", description: "Ы."},
	{smile: "O_o", description: "Ооо..."},
	{smile: "^_^", description: "Ммм ня"},
	{smile: "=(", description: "Уф"}
];

ReactDOM.render(
	<div className="wrapper">
		{/* v1 */}
		<div className="card">=)</div>	
		<div className="card">O_o</div>	
		<div className="card">^_^</div>	
		<div className="card">=(</div>

		{/* v2 */}
		<Card smile="=)" text="Ы." className="red" />
		<Card smile="O_o" text="Ооо..." />
		<Card smile="^_^" text="Ммм ня" />
		<Card smile="=(" text="Уф" />

		{/* v3 */}
		{emotions.map((el,i) => <Card smile={el.smile} text={el.description} key={i}/>)}
		{/* <div/>
		<img/> */}
	</div>,
	document.querySelector("#root")
)

/*
	Метод map:
		["Яблоко", "Арбуз", "Банан"] => ["<p>Яблоко</p>", "<p>Арбуз</p>", "<p>Банан</p>"]
*/