class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {active: undefined};

    this.getTeam = this.getTeam.bind(this);
    this.setActive = this.setActive.bind(this);
  }

  static teams() {
    return {
      blue: 100,
      red: 200
    }
  }

  getTeam(name) {
    let teamId = Game.teams()[name],
        classname = name + '-team',
        callback = this.setActive,
        activeId = '';

    if (this.state.active) {
      activeId = this.state.active.summonerId
    }

    let team = this.props.game.participants.map(function(participant) {
      if (participant.teamId === teamId) {
        return <Tab key={participant.summonerId}
                  id={participant.summonerId}
                  info={participant.champ}
                  name={participant.summonerName}
                  callback={callback}
                  active={activeId === participant.summonerId}/>
      }
    });

    return (
      <div className={"team " + classname}>
        {team}
      </div>
    )
  }

  setActive(id) {
    let active = this.props.game.participants.find(function(participant) {
      return participant.summonerId === id;
    });
    this.setState({active: active});
  }

  render() {
    if (!this.props.game) {
      return null;
    }

    return (
      <div id="game">
        <p>Game mode: {this.props.game.gameMode}</p>
        {this.getTeam('blue')}
        <Build info={this.state.active} />
        {this.getTeam('red')}
      </div>
    );
  }
}