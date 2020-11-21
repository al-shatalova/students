function Z1(props)
 		{
 			return <ul className="border">
 				<li>Имя: {props.name}</li>
 				<li>Возраст: {props.age}</li>
 			</ul>;
 		}
 		ReactDOM.render(
               <Z1 name="Екатерина" age="21" />,
               document.getElementById("app1")
       )
class ClickButton extends React.Component {

constructor(props) {
  super(props);
  this.state = {class: "off", label: "Нажми",count:0};

  this.press = this.press.bind(this);
}
press(){
  let className = (this.state.class==="off")?"on":"off";
  this.setState({class: className,label:this.state.label.split("").reverse().join(""),count:this.state.count+1});
}
render()
{
  return <button onClick={this.press} className={this.state.class}>{this.state.label}({this.state.count})</button>;
}
}

ReactDOM.render(
<ClickButton />,
document.getElementById("app2")
)
       

class TodoApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = { items: [], text: '' };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
      return (
        <div>
          <h3>TODO</h3>
          <TodoList items={this.state.items} />
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="new-todo">
              What needs to be done?
            </label>
            <input
              id="new-todo"
              onChange={this.handleChange}
              value={this.state.text}
            />
            <button>
              Add #{this.state.items.length + 1}
            </button>
          </form>
        </div>
      );
    }
  
    handleChange(e) {
      this.setState({ text: e.target.value });
    }
  
    handleSubmit(e) {
      e.preventDefault();
      if (this.state.text.length === 0) {
        return;
      }
      const newItem = {
        text: this.state.text,
        id: Date.now()
      };
      this.setState(state => ({
        items: state.items.concat(newItem),
        text: ''
      }));
    }
  }
  
  class TodoList extends React.Component {
    render() {
      return (
        <ul class="border">
          {this.props.items.map(item => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
      );
    }
  }
  
  ReactDOM.render(
    <TodoApp />,
    document.getElementById('todos-example')
  );