
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
            console.log(json)
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
              <h1> Hämtar projekt... </h1>{" "}
            </div>
          );
        return (
          <div className="App">
            <h1> Projektdata hämtad från GitHub via API </h1>{" "}
            {items.map((item) => (
              <ol key={item.id}>
                Namn: {item.name} <br/>Beskrivning: {item.body},    
              </ol>
            ))}
          </div>
        );
      }
    } 
    ReactDOM.render(<App />, document.getElementById('root'))
