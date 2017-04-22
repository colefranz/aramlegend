'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      summonerName: '',
      activeGame: undefined,
      error: ''
    };

    _this.handleNewSearch = _this.handleNewSearch.bind(_this);
    _this.getInformation = _this.getInformation.bind(_this);
    _this.summonerNameChange = _this.summonerNameChange.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'handleNewSearch',
    value: function handleNewSearch(event) {
      event.preventDefault();
      this.getInformation();
    }
  }, {
    key: 'getInformation',
    value: function getInformation() {
      var self = this;

      fetch('/summoners', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: this.state.summonerName
        })
      }).then(function (res) {
        res.json().then(function (body) {
          console.log(body);
          self.setState({ activeGame: body });
        });
      }, function (res) {
        self.setState({ error: res.statusText });
      });
    }
  }, {
    key: 'summonerNameChange',
    value: function summonerNameChange(event) {
      this.setState({ summonerName: event.target.value });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.textInput.focus();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React.createElement(
        'div',
        null,
        React.createElement(
          'form',
          { onSubmit: this.handleNewSearch },
          React.createElement(
            'label',
            null,
            'Summoner Name:',
            React.createElement('input', { type: 'text',
              ref: function ref(input) {
                _this2.textInput = input;
              },
              value: this.state.value,
              onChange: this.summonerNameChange })
          ),
          React.createElement('input', { type: 'submit', value: 'Submit' })
        ),
        React.createElement(Game, null)
      );
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));