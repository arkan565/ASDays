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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/bulma-calendar/dist/css/bulma-calendar.min.css":
/*!*********************************************************************!*\
  !*** ./node_modules/bulma-calendar/dist/css/bulma-calendar.min.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/bulma/css/bulma.css":
/*!******************************************!*\
  !*** ./node_modules/bulma/css/bulma.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/editor.js":
/*!*************************!*\
  !*** ./pages/editor.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Editor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bulma_calendar_dist_js_bulma_calendar_min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bulma-calendar/dist/js/bulma-calendar.min.js */ "bulma-calendar/dist/js/bulma-calendar.min.js");
/* harmony import */ var bulma_calendar_dist_js_bulma_calendar_min_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bulma_calendar_dist_js_bulma_calendar_min_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bulma_css_bulma_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bulma/css/bulma.css */ "./node_modules/bulma/css/bulma.css");
/* harmony import */ var bulma_css_bulma_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bulma_css_bulma_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bulma_calendar_dist_css_bulma_calendar_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bulma-calendar/dist/css/bulma-calendar.min.css */ "./node_modules/bulma-calendar/dist/css/bulma-calendar.min.css");
/* harmony import */ var bulma_calendar_dist_css_bulma_calendar_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bulma_calendar_dist_css_bulma_calendar_min_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var Editor =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Editor, _React$Component);

  function Editor(props) {
    var _this;

    _classCallCheck(this, Editor);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Editor).call(this, props));
    _this.state = {
      date: ""
    };
    _this.type = "";
    _this.date = "default";
    _this.activities = [];
    _this.edit = false;
    _this.changeType = _this.changeType.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.changeDate = _this.changeDate.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.fetchDate = _this.fetchDate.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.addActivity = _this.addActivity.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.changeTitle = _this.changeTitle.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.save = _this.save.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.calendars = null;
    return _this;
  }

  _createClass(Editor, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.calendars = bulma_calendar_dist_js_bulma_calendar_min_js__WEBPACK_IMPORTED_MODULE_1___default.a.attach('[type="date"]');
    }
  }, {
    key: "typeSwitch",
    value: function typeSwitch() {
      switch (this.type) {
        case "weekDay":
          this.date = weekDays[0];
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "select"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
            name: "type",
            id: "type",
            onChange: this.changeDate
          }, weekDays.map(function (day, index) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
              key: index,
              value: "".concat(day)
            }, day);
          })));

        case "Date":
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            style: {
              display: "inline-block"
            }
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
            className: "input",
            type: "date",
            name: "date",
            id: "date",
            value: this.date,
            onChange: this.changeDate
          }));
          break;

        default:
          break;
      }
    }
  }, {
    key: "save",
    value: function save() {
      isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()("http://localhost:3000/editor/".concat(this.date), {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          activities: this.activities,
          date: this.date
        })
      });
    }
  }, {
    key: "changeType",
    value: function changeType(event) {
      this.type = event.target.value;

      if (this.type == "default") {
        this.changeDate(event);
      }

      this.setState({
        type: event.target.value
      });
    }
  }, {
    key: "changeDate",
    value: function changeDate(event) {
      this.date = event.target.value;
      this.activities = [];
      this.edit = false;
      this.setState({
        date: this.date
      });
    }
  }, {
    key: "fetchDate",
    value: function fetchDate() {
      var _this2 = this;

      isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()("http://localhost:3000/editor/".concat(this.date)).then(function (res) {
        res.json().then(function (res) {
          _this2.activities = res.activities;
          _this2.edit = true;

          _this2.setState({
            date: _this2.date
          });
        });
      });
    }
  }, {
    key: "changeTitle",
    value: function changeTitle(index, event) {
      this.activities[index].title = event.target.value;
      this.setState({
        date: new Date()
      });
    }
  }, {
    key: "changeTime",
    value: function changeTime(index, event) {
      var splitDate;
      console.log(event.target.attributes["name"]);

      switch (event.target.attributes["name"].value) {
        case "startHour":
          splitDate = this.activities[index].startTime.split(":");
          splitDate[0] = event.target.value;
          this.activities[index].startTime = splitDate.join(":");
          break;

        case "startMinute":
          splitDate = this.activities[index].startTime.split(":");
          splitDate[1] = event.target.value;
          this.activities[index].startTime = splitDate.join(":");
          break;

        case "finishHour":
          splitDate = this.activities[index].finishTime.split(":");
          splitDate[0] = event.target.value;
          this.activities[index].finishTime = splitDate.join(":");
          break;

        case "finishMinute":
          splitDate = this.activities[index].finishTime.split(":");
          splitDate[1] = event.target.value;
          this.activities[index].finishTime = splitDate.join(":");
          break;
      }

      this.setState({
        date: event.target.value
      });
    }
  }, {
    key: "addActivity",
    value: function addActivity() {
      this.activities.push({
        title: "title",
        startTime: "00:00",
        finishTime: "00:00"
      });
      this.setState({
        date: new Date()
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var switchRender = this.typeSwitch();
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "select"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
        className: "select is-info",
        name: "type",
        id: "type",
        onChange: this.changeType
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "default"
      }, "Default"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "weekDay"
      }, "Week Day"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "Date"
      }, "Date"))), this.typeSwitch(), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "button is-info",
        onClick: this.fetchDate
      }, "Edit"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), this.activities.map(function (activity, index) {
        var splitStartDate = activity.startTime.split(':');
        var splitFinishDate = activity.finishTime.split(':');
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          key: index,
          className: "card",
          style: {
            display: "inline-block",
            margin: "10px"
          }
        }, "title:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: {
            display: "inline-block"
          }
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          className: "input",
          type: "text",
          value: activity.title,
          onChange: function onChange(e) {
            return _this3.changeTitle(index, e);
          }
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "start time:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: {
            display: "inline-block"
          }
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          className: "input",
          type: "number",
          min: "00",
          max: "23",
          name: "startHour",
          value: splitStartDate[0],
          onChange: function onChange(e) {
            return _this3.changeTime(index, e);
          }
        })), ":", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: {
            display: "inline-block"
          }
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          className: "input",
          type: "number",
          min: "00",
          max: "59",
          gap: "1",
          name: "startMinute",
          value: splitStartDate[1],
          onChange: function onChange(e) {
            return _this3.changeTime(index, e);
          }
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "finish time:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: {
            display: "inline-block"
          }
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          className: "input",
          type: "number",
          min: "00",
          max: "23",
          name: "finishHour",
          value: splitFinishDate[0],
          onChange: function onChange(e) {
            return _this3.changeTime(index, e);
          }
        })), ":", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: {
            display: "inline-block"
          }
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          className: "input",
          type: "number",
          min: "00",
          max: "59",
          gap: "1",
          name: "finishMinute",
          value: splitFinishDate[1],
          onChange: function onChange(e) {
            return _this3.changeTime(index, e);
          }
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          onClick: function onClick(index) {
            _this3.activities.splice(index, 1);

            _this3.setState({
              date: new Date()
            });
          },
          className: "button is-danger"
        }, "Delete"));
      }), this.edit ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "button is-info",
        onClick: this.addActivity
      }, "Add activity"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "button is-success",
        onClick: this.save
      }, "Save")) : "");
    }
  }]);

  return Editor;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/editor.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/editor.js */"./pages/editor.js");


/***/ }),

/***/ "bulma-calendar/dist/js/bulma-calendar.min.js":
/*!***************************************************************!*\
  !*** external "bulma-calendar/dist/js/bulma-calendar.min.js" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bulma-calendar/dist/js/bulma-calendar.min.js");

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

/***/ })

/******/ });
//# sourceMappingURL=editor.js.map