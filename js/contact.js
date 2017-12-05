webpackJsonp([0],{

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var sleep = exports.sleep = function () {
  var _ref = _asyncToGenerator(function* (ms) {
    return new Promise(function (resolve, reject) {
      setTimeout(resolve, ms);
    });
  });

  return function sleep(_x) {
    return _ref.apply(this, arguments);
  };
}();

var post = exports.post = function () {
  var _ref2 = _asyncToGenerator(function* (url, data) {
    var req = new window.XMLHttpRequest();
    req.open('POST', url, true);
    req.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    req.send(JSON.stringify(data));

    return true;
  });

  return function post(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(1);

var _decor = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Contact = function (_Component) {
  _inherits(Contact, _Component);

  function Contact() {
    _classCallCheck(this, Contact);

    return _possibleConstructorReturn(this, (Contact.__proto__ || Object.getPrototypeOf(Contact)).apply(this, arguments));
  }

  _createClass(Contact, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'Contact'
        ),
        _react2.default.createElement(
          'p',
          null,
          _react2.default.createElement(
            'b',
            null,
            'Email'
          ),
          ': markedcode@gmail.com'
        ),
        _react2.default.createElement(_decor.EmailForm, { email: 'markedcode@gmail.com' })
      );
    }
  }]);

  return Contact;
}(_react.Component);

(0, _reactDom.render)(_react2.default.createElement(Contact, null), document.getElementById('root'));

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProjectCard = function (_Component) {
  _inherits(ProjectCard, _Component);

  function ProjectCard() {
    _classCallCheck(this, ProjectCard);

    return _possibleConstructorReturn(this, (ProjectCard.__proto__ || Object.getPrototypeOf(ProjectCard)).apply(this, arguments));
  }

  _createClass(ProjectCard, [{
    key: 'render',
    value: function render() {
      var optImage = null;

      if (this.props.img) {
        optImage = _react2.default.createElement('img', { className: 'section media', src: this.props.img.url, alt: this.props.img.alt });
      }

      return _react2.default.createElement(
        'div',
        { className: 'card large' },
        _react2.default.createElement(
          'div',
          { className: 'section' },
          _react2.default.createElement(
            'h3',
            null,
            this.props.title
          )
        ),
        optImage,
        _react2.default.createElement(
          'div',
          { className: 'section' },
          _react2.default.createElement(
            'p',
            null,
            this.props.description
          ),
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(
              'a',
              { href: this.props.url, target: '_blank', rel: 'noopener' },
              'View on GitHub'
            )
          )
        )
      );
    }
  }]);

  return ProjectCard;
}(_react.Component);

exports.default = ProjectCard;

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TimedParagraph = exports.ProjectCard = exports.EmailForm = undefined;

var _EmailForm = __webpack_require__(6);

var _EmailForm2 = _interopRequireDefault(_EmailForm);

var _ProjectCard = __webpack_require__(3);

var _ProjectCard2 = _interopRequireDefault(_ProjectCard);

var _TimedParagraph = __webpack_require__(7);

var _TimedParagraph2 = _interopRequireDefault(_TimedParagraph);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.EmailForm = _EmailForm2.default;
exports.ProjectCard = _ProjectCard2.default;
exports.TimedParagraph = _TimedParagraph2.default;

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EmailForm = function (_Component) {
  _inherits(EmailForm, _Component);

  function EmailForm(props) {
    _classCallCheck(this, EmailForm);

    var _this = _possibleConstructorReturn(this, (EmailForm.__proto__ || Object.getPrototypeOf(EmailForm)).call(this, props));

    _this.state = {
      name: '',
      email: '',
      website: '',
      message: '',
      sent: false
    };

    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(EmailForm, [{
    key: 'valid',
    value: function valid() {
      return !(this.state.name.trim() === '') && !(this.state.email.trim() === '') && !(this.state.message.trim() === '');
    }
  }, {
    key: 'handleChange',
    value: function handleChange(event) {
      var target = event.target;
      var value = target.type === 'checkbox' ? target.checked : target.value;
      var name = target.name;

      this.setState(_defineProperty({}, name, value));
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      var _this2 = this;

      event.preventDefault();

      if (!this.valid()) {
        return;
      }

      var url = 'https://formspree.io/' + this.props.email;
      var data = {
        email: this.state.email.trim(),
        _subject: this.state.name.trim() + ' | Contact | Portfolio',
        _format: 'plain',
        message: (this.state.name.trim() + ' ' + this.state.website.trim() + '\n      ' + new Date().toString() + '\n\n      ' + this.state.message.trim()).split('\n').map(function (line) {
          return line.trim();
        }).join('\n')
      };

      (0, _utils.post)(url, data).then(function (result) {
        _this2.setState({
          sent: true
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        null,
        _react2.default.createElement(
          'form',
          null,
          _react2.default.createElement(
            'fieldset',
            null,
            _react2.default.createElement(
              'legend',
              null,
              'Email Form'
            ),
            _react2.default.createElement(
              'div',
              { className: 'input-group vertical' },
              _react2.default.createElement(
                'label',
                { htmlFor: 'form-name' },
                'Name'
              ),
              _react2.default.createElement('input', { id: 'form-name', type: 'text', name: 'name', onChange: this.handleChange, disabled: this.state.sent })
            ),
            _react2.default.createElement(
              'div',
              { className: 'input-group vertical' },
              _react2.default.createElement(
                'label',
                { htmlFor: 'form-email' },
                'Email'
              ),
              _react2.default.createElement('input', { id: 'form-email', type: 'text', name: 'email', onChange: this.handleChange, disabled: this.state.sent })
            ),
            _react2.default.createElement(
              'div',
              { className: 'input-group vertical' },
              _react2.default.createElement(
                'label',
                { htmlFor: 'form-website' },
                'Website'
              ),
              _react2.default.createElement('input', { id: 'form-website', type: 'text', name: 'website', onChange: this.handleChange, disabled: this.state.sent })
            ),
            _react2.default.createElement(
              'div',
              { className: 'input-group vertical' },
              _react2.default.createElement(
                'label',
                { htmlFor: 'form-message' },
                'Message'
              ),
              _react2.default.createElement('textarea', { rows: '5', id: 'form-message', type: 'text', name: 'message', onChange: this.handleChange, disabled: this.state.sent })
            )
          ),
          _react2.default.createElement(
            'button',
            { className: 'primary', onClick: this.handleSubmit, disabled: this.state.sent },
            'Submit'
          )
        )
      );
    }
  }]);

  return EmailForm;
}(_react.Component);

exports.default = EmailForm;

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TimedParagraph = function (_Component) {
  _inherits(TimedParagraph, _Component);

  function TimedParagraph(props) {
    _classCallCheck(this, TimedParagraph);

    var _this = _possibleConstructorReturn(this, (TimedParagraph.__proto__ || Object.getPrototypeOf(TimedParagraph)).call(this, props));

    _this.state = {
      counter: 0,
      length: _this.props.children.toString().length
    };

    _this.reveal = _this.reveal.bind(_this);
    return _this;
  }

  _createClass(TimedParagraph, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var timeInterval = this.props.period / this.state.length || 50;

      this.timerID = setInterval(function () {
        _this2.reveal();
      }, timeInterval);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearInterval(this.timerID);
    }
  }, {
    key: 'reveal',
    value: function reveal() {
      var _this3 = this;

      this.setState(function (prevState) {
        if (prevState.counter >= prevState.length) {
          clearInterval(_this3.timerID);
          return {};
        } else {
          return {
            counter: prevState.counter + 1
          };
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        null,
        _react2.default.createElement(
          'p',
          { className: 'visually-hidden' },
          this.props.children
        ),
        _react2.default.createElement(
          'p',
          { 'aria-hidden': 'true' },
          this.props.children.toString().substring(0, this.state.counter)
        )
      );
    }
  }]);

  return TimedParagraph;
}(_react.Component);

exports.default = TimedParagraph;

/***/ })

},[23]);
//# sourceMappingURL=contact.js.map