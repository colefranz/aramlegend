class Tab extends React.Component {
  constructor(props) {
    super(props);

    this.isActive = this.isActive.bind(this);
  }

  isActive() {
    return this.props.active ? 'active' : '';
  }

  render() {
    return (
      <div className={"tab " + this.isActive()}
          onClick={()=>this.props.callback(this.props.id)}>
        <img src={this.props.info.icon} title={this.props.info.name} />
        <p>{this.props.name}</p>
      </div>
    );
  }
}