webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/activeActivitiesCard.js":
/*!********************************************!*\
  !*** ./components/activeActivitiesCard.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ActiveActivitiesCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bulma_css_bulma_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bulma/css/bulma.css */ "./node_modules/bulma/css/bulma.css");
/* harmony import */ var bulma_css_bulma_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bulma_css_bulma_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var ActiveActivitiesCard =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ActiveActivitiesCard, _React$Component);

  function ActiveActivitiesCard(props) {
    _classCallCheck(this, ActiveActivitiesCard);

    return _possibleConstructorReturn(this, _getPrototypeOf(ActiveActivitiesCard).call(this, props));
  }

  _createClass(ActiveActivitiesCard, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this = this;

      this.interval = setInterval(function () {
        return _this.setState({
          time: Date.now()
        });
      }, 1000);
    }
  }, {
    key: "renderChart",
    value: function renderChart() {
      if (this.props.activity.active) {
        var startHourSplit = this.props.activity.startTime.split(":");
        var startHour = parseInt(startHourSplit[0]);
        var startMinutes = parseInt(startHourSplit[1]);
        var finishHourSplit = this.props.activity.finishTime.split(":");
        var finishHour = parseInt(finishHourSplit[0]);
        var finishMinutes = parseInt(finishHourSplit[1]);
        var duration = (finishHour - startHour) * 3600 + (finishMinutes - startMinutes) * 60;
        var date = new Date();
        var active = 'rgb(255, 221, 87)';

        if (this.props.config && this.props.config.layout && this.props.config.layout.active) {
          active = this.props.layout.active;
        }

        var data = [{
          name: 'Passed time',
          value: (date.getHours() - startHour) * 3600 + (date.getMinutes() - startMinutes) * 60 + date.getSeconds(),
          fill: active
        }, {
          name: 'Remaining time',
          value: duration - ((date.getHours() - startHour) * 3600 + (date.getMinutes() - startMinutes) * 60 + date.getSeconds()),
          fill: 'grey'
        }];
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_2__["ResponsiveContainer"], {
          width: "99%",
          aspect: 3,
          maxHeight: "100%"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_2__["PieChart"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_2__["Pie"], {
          data: data,
          startAngle: 90,
          endAngle: -270,
          outerRadius: "100%",
          isAnimationActive: false,
          dataKey: "value"
        })));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, " Start at ", this.props.activity.startTime);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var imgStyle = {
        maxWidth: "100%",
        maxHeight: "70vh",
        margin: "auto",
        width: "auto"
      };
      var cardStyle = {
        maxHeight: "86vh",
        display: "inline-block",
        width: "100%",
        borderRadius: "1%",
        minWidth: "0"
      };
      var active = 'rgb(255, 221, 87)';

      if (this.props.config && this.props.config.layout && this.props.config.layout.active) {
        active = this.props.layout.active;
      }

      var cardStyleActive = _defineProperty({
        maxHeight: "86vh",
        height: "100%",
        display: "inline-block",
        width: "100%",
        borderRadius: "1%",
        boxShadow: "",
        border: "solid ".concat(active)
      }, "boxShadow", "none");

      var title = "#363636";

      if (this.props.config.layout && this.props.config.layout.title) {
        title = this.props.config.layout.title;
      }

      var textStyle = {
        justifyContent: "center",
        color: title
      };
      var content = {
        width: "100%",
        height: "100%",
        minWidth: "0"
      };
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "column"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card"
      }, "//style=", this.props.activity.active ? cardStyleActive : cardStyle, ">", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
        className: "card-content",
        style: {
          minWidth: 0
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "card-header-title",
        style: textStyle
      }, this.props.activity.title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card-content",
        style: content
      }, this.renderChart())));
    }
  }]);

  return ActiveActivitiesCard;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.d0418e9586d8e284a90f.hot-update.js.map