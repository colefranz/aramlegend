class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <img className="item" src={this.props.info.icon} />
    );
  }
}