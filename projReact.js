
    class App extends React.Component {
      // Constructor
      constructor(props) {
        super(props);

        this.state = {
          items: [],
          DataisLoaded: false,
        };
      }

      componentDidMount() {
        fetch("https://api.github.com/users/kiamelJ/projects")
          .then((res) => res.json())
          .then((json) => {
            this.setState({
              items: json,
              DataisLoaded: true,   
            });
          });
      }

      render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded)
          return (
            <div>
              <h1> Pleses wait some time.... </h1>{" "}
            </div>
          );
        return (
          <div className="App">
            <h1> Fetch data from an api in react </h1>{" "}
            {items.map((item) => (
              <ol key={item.id}>
                Projekt Name: {item.name} <br/>Projekt Beskrivning: {item.body},
                
              </ol>
            ))}
          </div>
        );
      }
    }
    
    ReactDOM.render(<App />, document.getElementById('root'))
