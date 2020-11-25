'use strict'

const { useState } = React

var ColorMouse = () => {
	const [color, setColor] = useState("red");
	
	
	const handleMouseMove = (event) => {
		const x = event.screenX;
		const y = event.screenY;
		
		const r = (x % 256).toString(16);
		const g = (y % 256).toString(16);
		const b = 255..toString(16);
		
		setColor("#" + r + g + b);
		
	}
	
	return (
		<div 
			style={{
				backgroundColor: color,
				borderWidth: 1,
				borderStyle: "bold",
				borderColor: "#343",
				width: 400,
				height: 400,
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
			onMouseMove={handleMouseMove}
		>
			<span style={{ fontSize: 20 }}>Проведите мышкой</span>
		</div>
	);
}