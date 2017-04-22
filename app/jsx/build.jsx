class Build extends React.Component {
  constructor(props) {
    super(props);

    this.state = {ready: false};

    this.getBuilds = this.getBuilds.bind(this);
  }

  getBuilds() {
    if (this.props.info) {
      return this.props.info.builds.map(function(item, index) {
        return <Item key={index} info={item} />
      });
    }
  }

  render() {
    return (
      <div id="build">
        <img className="background"
             src="http://riot-web-static.s3.amazonaws.com/images/news/April_2013/29_04_2013_Howling_Abyss_Announcement/LOL.com.HowlingAbyss.FooterSS.jpg" />
        <div className="foreground">
          {this.getBuilds()}
        </div>
      </div>
    );
  }
}