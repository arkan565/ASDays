module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/ColorPicker.js":
/*!***********************************!*\
  !*** ./components/ColorPicker.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ColorPicker; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-color */ "react-color");
/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_color__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var ColorPicker =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ColorPicker, _React$Component);

  function ColorPicker(props) {
    _classCallCheck(this, ColorPicker);

    return _possibleConstructorReturn(this, _getPrototypeOf(ColorPicker).call(this, props));
  }

  _createClass(ColorPicker, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, this.props.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_color__WEBPACK_IMPORTED_MODULE_1__["SketchPicker"], {
        color: this.props.color,
        onChange: this.props.handleChange
      }));
    }
  }]);

  return ColorPicker;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./node_modules/bulma/css/bulma.css":
/*!******************************************!*\
  !*** ./node_modules/bulma/css/bulma.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/configPanel.js":
/*!******************************!*\
  !*** ./pages/configPanel.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Config; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bulma_css_bulma_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bulma/css/bulma.css */ "./node_modules/bulma/css/bulma.css");
/* harmony import */ var bulma_css_bulma_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bulma_css_bulma_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_ColorPicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ColorPicker */ "./components/ColorPicker.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }


'next/link';




var Config =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Config, _React$Component);

  _createClass(Config, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var res, config;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()("http://localhost:3000/config");

              case 2:
                res = _context.sent;
                _context.next = 5;
                return res.json();

              case 5:
                config = _context.sent;
                return _context.abrupt("return", {
                  config: config
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  function Config(props) {
    var _this;

    _classCallCheck(this, Config);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Config).call(this, props));
    _this.format = _this.props.config.format;
    _this.form = {
      startTime: _this.props.config.startTime,
      finishTime: _this.props.config.finishTime
    };
    _this.layout = _this.props.config.layout;

    if (!_this.layout) {
      _this.layout = {};
    }

    _this.message = [];
    _this.changeStartHourValue = _this.changeStartHourValue.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.changeFinishHourValue = _this.changeFinishHourValue.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.save = _this.save.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.changeBackground = _this.changeBackground.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.changeText = _this.changeText.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.changeTableBorder = _this.changeTableBorder.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.changeActivity = _this.changeActivity.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.changeActiveActivity = _this.changeActiveActivity.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.changeTitles = _this.changeTitles.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Config, [{
    key: "changeStartHourValue",
    value: function changeStartHourValue(event) {
      if (this.format == "24") {
        this.form.startTime.value = event.target.value;

        if (this.form.startTime.value >= 12) {
          this.form.startTime.midTime = "pm";
          this.form.startTime.startHour = "".concat(parseInt(this.form.startTime.value) - 12);
        } else {
          this.form.startTime.midTime = "am";
          this.form.startTime.startHour = "".concat(this.form.startTime.value);
        }
      } else {
        if (event.target.value == "am" || event.target.value == "pm") {
          this.form.startTime.midTime = event.target.value;
        } else {
          this.form.startTime.startHour = event.target.value;
        }

        if (this.form.startTime.midTime == "am") {
          this.form.startTime.value = "".concat(this.form.startTime.startHour);
        } else {
          this.form.startTime.value = "".concat(parseInt(this.form.startTime.startHour) + 12);
        }
      }

      this.setState({
        date: new Date()
      });
    }
  }, {
    key: "changeFinishHourValue",
    value: function changeFinishHourValue(event) {
      if (this.format == "24") {
        this.form.finishTime.value = event.target.value;

        if (this.form.finishTime.value >= 12) {
          this.form.finishTime.midTime = "pm";
          this.form.finishTime.finishHour = "".concat(parseInt(this.form.finishTime.value) - 12);
        } else {
          this.form.finishTime.midTime = "am";
          this.form.finishTime.finishHour = "".concat(this.form.finishTime.value);
        }
      } else {
        if (event.target.value == "am" || event.target.value == "pm") {
          this.form.finishTime.midTime = event.target.value;
        } else {
          this.form.finishTime.finishHour = event.target.value;
        }

        if (this.form.finishTime.midTime == "am") {
          this.form.finishTime.value = "".concat(this.form.finishTime.finishHour);
        } else {
          this.form.finishTime.value = "".concat(parseInt(this.form.finishTime.finishHour) + 12);
        }
      }

      this.setState({
        date: new Date()
      });
    }
  }, {
    key: "renderStartForm",
    value: function renderStartForm() {
      if (this.format == "24") {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          style: {
            display: "inline-block"
          }
        }, "Start hour: ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          className: "input",
          type: "number",
          min: "0",
          max: "24",
          value: this.form.startTime.value,
          onChange: this.changeStartHourValue
        }));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          style: {
            display: "inline-block"
          }
        }, "Start hour:", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          style: {
            display: "inline-block"
          }
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          className: "input",
          value: this.form.startTime.startHour,
          type: "number",
          min: "0",
          max: "11",
          onChange: this.changeStartHourValue
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "select"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
          value: this.form.startTime.midTime,
          onChange: this.changeStartHourValue
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
          value: "am"
        }, "am"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
          value: "pm"
        }, "pm"))));
      }
    }
  }, {
    key: "save",
    value: function save() {
      var _this2 = this;

      isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()("http://localhost:3000/config", {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          format: this.format,
          startTime: this.form.startTime,
          finishTime: this.form.finishTime,
          layout: this.layout
        })
      }).then(function (res) {
        res.json().then(function (res) {
          _this2.message.splice(0, 0, res.message);

          _this2.setState({
            date: new Date()
          });

          setTimeout(function () {
            _this2.message.pop();

            _this2.setState({
              date: new Date()
            });
          }, 2000);
        });
      });
    }
  }, {
    key: "renderFinishForm",
    value: function renderFinishForm() {
      if (this.format == "24") {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          style: {
            display: "inline-block"
          }
        }, "Finish hour: ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          className: "input",
          type: "number",
          min: "0",
          max: "24",
          value: this.form.finishTime.value,
          onChange: this.changeFinishHourValue
        }));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          style: {
            display: "inline-block"
          }
        }, "Finish Hour:", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          style: {
            display: "inline-block"
          }
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          className: "input",
          value: this.form.finishTime.finishHour,
          type: "number",
          min: "0",
          max: "11",
          onChange: this.changeFinishHourValue
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "select"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
          value: this.form.finishTime.midTime,
          onChange: this.changeFinishHourValue
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
          value: "am"
        }, "am"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
          value: "pm"
        }, "pm"))));
      }
    }
  }, {
    key: "changeBackground",
    value: function changeBackground(color, event) {
      this.layout.background = color.hex;
    }
  }, {
    key: "changeText",
    value: function changeText(color, event) {
      this.layout.text = color.hex;
    }
  }, {
    key: "changeTableBorder",
    value: function changeTableBorder(color, event) {
      this.layout.tableBorder = color.hex;
    }
  }, {
    key: "changeActivity",
    value: function changeActivity(color, event) {
      this.layout.activity = color.hex;
    }
  }, {
    key: "changeActiveActivity",
    value: function changeActiveActivity(color, event) {
      this.layout.activeActivity = color.hex;
    }
  }, {
    key: "changeTitles",
    value: function changeTitles(color, event) {
      this.layout.title = color.hex;
    }
  }, {
    key: "default",
    value: function _default() {
      this.layout.background = "#fff";
      this.layout.text = "#4a4a4a";
      this.layout.tableBorder = "#DADADA";
      this.layout.activity = "#DCEDC8";
      this.layout.active = "#ffdd57";
      this.layout.title = "#363636";
      this.setState({
        date: new Date()
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", null, "Config Panel"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          position: "absolute",
          right: "0",
          display: "inline-block",
          maxWidth: "50%"
        }
      }, this.message.map(function (message, index) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          key: index,
          style: {
            zIndex: "100"
          },
          className: "notification is-primary"
        }, message);
      })), "format:", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "select"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
        value: this.format,
        onChange: function onChange(e) {
          _this3.format = e.target.value;

          _this3.setState({
            date: new Date()
          });
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
        value: "12"
      }, "12 hours"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
        value: "24"
      }, "24 hours"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), this.renderStartForm(), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), this.renderFinishForm(), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "columns"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ColorPicker__WEBPACK_IMPORTED_MODULE_4__["default"], {
        className: "column",
        title: "Background",
        color: this.layout.background ? this.layout.background : "#fff",
        handleChange: this.changeBackground
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ColorPicker__WEBPACK_IMPORTED_MODULE_4__["default"], {
        className: "column",
        title: "Text Color",
        color: this.layout.text ? this.layout.text : "#4a4a4a",
        handleChange: this.changeText
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ColorPicker__WEBPACK_IMPORTED_MODULE_4__["default"], {
        className: "column",
        title: "Titles",
        color: this.layout.title ? this.layout.title : "#363636",
        handleChange: this.changeTitles
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ColorPicker__WEBPACK_IMPORTED_MODULE_4__["default"], {
        className: "column",
        title: "Table Border",
        color: this.layout.tableBorder ? this.layout.tableBorder : "#DADADA",
        handleChange: this.changeTableBorder
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ColorPicker__WEBPACK_IMPORTED_MODULE_4__["default"], {
        className: "column",
        title: "Activity Color",
        color: this.layout.activity ? this.layout.activity : "#DCEDC8",
        handleChange: this.changeActivity
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ColorPicker__WEBPACK_IMPORTED_MODULE_4__["default"], {
        className: "column",
        title: "Activity Active Color",
        color: this.layout.active ? this.layout.active : "#ffdd57",
        handleChange: this.changeActiveActivity
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "button",
        onClick: this.default.bind(this)
      }, "Default Colors"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "button is-success",
        onClick: this.save
      }, "Save"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null));
    }
  }]);

  return Config;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);



/***/ }),

/***/ 4:
/*!************************************!*\
  !*** multi ./pages/configPanel.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/configPanel.js */"./pages/configPanel.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-color":
/*!******************************!*\
  !*** external "react-color" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-color");

/***/ })

/******/ });
//# sourceMappingURL=configPanel.js.map