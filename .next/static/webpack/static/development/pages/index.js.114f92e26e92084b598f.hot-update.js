webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/hoursPanel.js":
/*!**********************************!*\
  !*** ./components/hoursPanel.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HoursPanel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");

var HoursPanel =
/*#__PURE__*/
function (_React$Component) {
  _inherits(HoursPanel, _React$Component);

  function HoursPanel(props) {
    var _this;

    _classCallCheck(this, HoursPanel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HoursPanel).call(this, props));
    _this.hoursPanelStyle = {
      "display": "grid",
      "gridTemplateRows": "repeat(".concat(_this.props.config.finishTime.value - _this.props.config.startTime.value, ", 1fr)"),
      "height": "100%",
      "minHeight": "85vh"
    };
    _this.hourDivStyle = {
      border: "solid",
      borderWidth: "1px 0px 1px 1px",
      borderColor: "#DADADA",
      textAlign: "center"
    };
    return _this;
  }

  _createClass(HoursPanel, [{
    key: "renderHours",
    value: function renderHours() {
      var hours = [];
      var date = new Date();

      for (var i = this.props.config.startTime.value; i < this.props.config.finishTime.value; i++) {
        try {
          date.setHours(Math.trunc(i));
          date.setMinutes(0);

          if (this.props.config.format == "12") {
            hours.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              style: this.hourDivStyle,
              key: date
            }, moment(date).format("hh:mm A")));
          } else {
            hours.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              style: this.hourDivStyle,
              key: date
            }, moment(date).format("HH:mm")));
          }
        } catch (ex) {
          console.log(ex);
        }
      }

      return hours;
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: this.hoursPanelStyle
      }, this.renderHours());
    }
  }]);

  return HoursPanel;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.114f92e26e92084b598f.hot-update.js.map