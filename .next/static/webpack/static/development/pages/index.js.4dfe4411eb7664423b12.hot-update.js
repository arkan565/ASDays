webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
false,

/***/ "./node_modules/regenerator-runtime/runtime-module.js":
false,

/***/ "./node_modules/regenerator-runtime/runtime.js":
false,

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bulma_css_bulma_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bulma/css/bulma.css */ "./node_modules/bulma/css/bulma.css");
/* harmony import */ var bulma_css_bulma_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bulma_css_bulma_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_leftPanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/leftPanel */ "./components/leftPanel.js");
/* harmony import */ var _components_activeActivities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/activeActivities */ "./components/activeActivities.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var Index =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index(props) {
    var _this;

    _classCallCheck(this, Index);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Index).call(this, props));
    _this.nextActivities = [];
    _this.active = [];
    _this.day = {};
    _this.timeout = null;
    return _this;
  }

  _createClass(Index, [{
    key: "orderActivities",
    value: function orderActivities(day) {
      var activities = [];
      var length = day.activities.length;

      for (var i = 0; i < length; i++) {
        var minI = 0;
        var minStartTime = day.activities[0].startTime;
        var minFinishTime = day.activities[0].finishTime;

        for (var j = 1; j < day.activities.length; j++) {
          if (day.activities[j].startTime < minStartTime) {
            minI = j;
            minStartTime = day.activities[j].startTime;
            minFinishTime = day.activities[j].finishTime;
          } else if (day.activities[j].startTime == minStartTime && day.activities[j].finishTime < minFinishTime) {
            minI = j;
            minStartTime = day.activities[j].startTime;
            minFinishTime = day.activities[j].finishTime;
          }
        }

        activities.push(day.activities[minI]);
        day.activities.splice(minI, 1);
      }

      return activities;
    }
  }, {
    key: "setActive",
    value: function setActive() {
      var date = new Date();
      this.props.day.activities.forEach(function (activity) {
        var splitStartDate = activity.startTime.split(':');
        var startHour = parseInt(splitStartDate[0], 10);
        var splitFinishDate = activity.finishTime.split(':');
        var finishHour = parseInt(splitFinishDate[0], 10);
        activity.active = startHour <= date.getHours() && (finishHour > date.getHours() || activity.finishTime === "00:00"); //set if active is good or bad
      });
      this.active = this.props.day.activities.filter(function (activity) {
        return activity.active == true;
      });
    }
  }, {
    key: "getNext",
    value: function getNext(activities) {
      var next = [];
      var date = new Date();
      activities.map(function (activity) {
        var splitStartDate = activity.startTime.split(':');
        var startHour = parseInt(splitStartDate[0], 10);

        if (startHour > date.getHours() && next.length < 3) {
          next.push(activity);
        }
      });
      this.nextActivities = next;
    }
  }, {
    key: "setTimeout",
    value: function setTimeout() {}
  }, {
    key: "render",
    value: function render() {
      this.props.day.activities = this.orderActivities(this.props.day);
      this.setActive();
      this.getNext(this.props.day.activities);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          marginBottom: "5vh",
          textAlign: "center"
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "title is-1"
      }, "Schedule")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "columns"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "column is-one-third"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_leftPanel__WEBPACK_IMPORTED_MODULE_2__["default"], {
        activities: this.props.day.activities ? this.props.day.activities : ""
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "column is-two-thirds"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_activeActivities__WEBPACK_IMPORTED_MODULE_3__["default"], {
        active: this.active,
        next: this.nextActivities
      }))));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component); //<LeftPanel activities={this.props.day.activities?this.props.day.activities:""}></LeftPanel>
//                        <ActiveActivities active={this.active} next={this.nextActivities}></ActiveActivities>



    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.4dfe4411eb7664423b12.hot-update.js.map