class TodoApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = { items: [], text: '' };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
      return (
        <div style={{color:'black', fontFamily:'Enriqueta'}}>
          <h3 >Список дел на неделю</h3>
          <hr style={{color:'black'}}></hr>
          <TodoList items={this.state.items} />
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="new-todo">
              Какие планы?
            </label>
            <br></br>
            <br></br>
            <input
              id="new-todo"
              onChange={this.handleChange}
              value={this.state.text}
            />
            <br></br>
            <br></br>
            <button style={{color:'black'}}>
              Добавить в список
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
        <ul>
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