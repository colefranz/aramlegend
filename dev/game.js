"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Game = function (_React$Component) {
  _inherits(Game, _React$Component);

  function Game(props) {
    _classCallCheck(this, Game);

    var _this = _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).call(this, props));

    _this.getParticipants = _this.getParticipants.bind(_this);
    return _this;
  }

  _createClass(Game, [{
    key: "getParticipants",
    value: function getParticipants() {
      var blueTeam = this.props.active.participants.map(function (participant) {
        if (participant.teamId === 100) {
          return React.createElement(Summoner, { info: participant });
        }
      });

      var redTeam = this.props.active.participants.map(function (participant) {
        if (participant.teamId === 200) {
          return React.createElement(Summoner, { info: participant });
        }
      });

      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          { className: "blue-team" },
          blueTeam
        ),
        React.createElement(
          "div",
          { className: "red-team" },
          redTeam
        )
      );
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return Game;
}(React.Component);