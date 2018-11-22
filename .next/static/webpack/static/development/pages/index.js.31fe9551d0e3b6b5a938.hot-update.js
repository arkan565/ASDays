webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/activitiesGrid.js":
/*!**************************************!*\
  !*** ./components/activitiesGrid.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ActivitiesGrid; });
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



var ActivitiesGrid =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ActivitiesGrid, _React$Component);

  function ActivitiesGrid(props) {
    var _this;

    _classCallCheck(this, ActivitiesGrid);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ActivitiesGrid).call(this, props));
    _this.activitiesGridStyle = {
      "display": "grid",
      "gridTemplateRows": "repeat(".concat(_this.props.config.finishTime.value - _this.props.config.startTime.value, ", 1fr)"),
      "height": "100%",
      "border": "solid 1px #DADADA"
    };
    return _this;
  }

  _createClass(ActivitiesGrid, [{
    key: "renderActivities",
    value: function renderActivities() {
      try {
        var activities = [];
        return this.props.activities.map(function (activity, index) {
          var splitStartDate = activity.startTime.split(':');
          var startHour = parseInt(splitStartDate[0], 10);
          var startMinute = parseInt(splitStartDate[1], 10);
          var splitFinishDate = activity.finishTime.split(':');
          var finishHour = parseInt(splitFinishDate[0], 10);
          var finishMinute = parseInt(splitFinishDate[1], 10);
          var offset = 1 + startHour;
          var duration = finishHour - startHour;

          if (finishMinute > 0) {
            duration = duration + 1;
          }

          if (finishHour == 0) {
            duration = 24 - startHour;
          }

          var style = {
            "gridRowStart": offset,
            "gridRowEnd": "span ".concat(duration),
            "backgroundColor": "#DCEDC8"
          };

          if (activity.active) {
            style.backgroundColor = "#ffdd57";
          }

          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            key: index,
            style: style
          }, "".concat(activity.title, " ").concat(activity.startTime, "-").concat(activity.finishTime));
        });
      } catch (ex) {
        return "";
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: this.activitiesGridStyle
      }, this.renderActivities());
    }
  }]);

  return ActivitiesGrid;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.31fe9551d0e3b6b5a938.hot-update.js.map