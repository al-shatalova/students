// функциональный компонент
function Hello1() {
  return <h1 style={{ color: "orange" }}>Hello from Hello1 component</h1>;
}

// компонент с помощью стрелочной функции:
var Hello2 = ({ color }) => {
    return <h1 style={{ color: color }}>Hello from Hello2 component</h1>;
}

// rомпонент с помощью класса
class Hello3 extends React.Component {
	render() {
		return (
			<div>
				<h2 style={{ color: "red" }}>Hello from Hello3 component</h2>
			</div>
		);
	}
}