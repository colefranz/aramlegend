class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      summonerName: '',
      activeGame: undefined,
      error: ''
    }

    this.handleNewSearch = this.handleNewSearch.bind(this);
    this.getInformation = this.getInformation.bind(this);
    this.summonerNameChange = this.summonerNameChange.bind(this);
    this.displayError = this.displayError.bind(this);
  }

  handleNewSearch(event) {
    event.preventDefault();
    this.getInformation();
  }

  getInformation() {
    var self = this;

    this.setState({error: ''});

    fetch('/summoners', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.summonerName,
      })
    }).then(function(res) {
      if (!res.ok) {
        self.setState({error: res.statusText});

        return;
      }

      res.json().then((body) => {
        self.setState({activeGame: body});
      });
    }, function(res) {
      self.setState({error: res.statusText});
    })
  }

  summonerNameChange(event) {
    this.setState({summonerName: event.target.value});
  }

  displayError() {
    if (this.state.error !== '') {
      return <p>{this.state.error}</p>;
    }
  }
  componentDidMount() {
    this.textInput.focus();
  }

  render() {
    return (
      <div id="main">
        <form onSubmit={this.handleNewSearch}>
          <label>
            Enter Name:
            <input type="text"
              ref={(input) => {this.textInput = input}}
              value={this.state.value}
              onChange={this.summonerNameChange} />
          </label>
          {this.displayError()}
        </form>
        <Game game={this.state.activeGame}/>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);