webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bulma_css_bulma_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bulma/css/bulma.css */ "./node_modules/bulma/css/bulma.css");
/* harmony import */ var bulma_css_bulma_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bulma_css_bulma_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_leftPanel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/leftPanel */ "./components/leftPanel.js");
/* harmony import */ var _components_activeActivities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/activeActivities */ "./components/activeActivities.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__);



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var Index =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Index, _React$Component);

  _createClass(Index, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var res, day, res2, config;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default()("http://localhost:3000/day");

              case 2:
                res = _context.sent;
                _context.next = 5;
                return res.json();

              case 5:
                day = _context.sent;
                _context.next = 8;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default()("http://localhost:3000/config");

              case 8:
                res2 = _context.sent;
                _context.next = 11;
                return res2.json();

              case 11:
                config = _context.sent;
                return _context.abrupt("return", {
                  day: day,
                  config: config
                });

              case 13:
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

  function Index(props) {
    var _this;

    _classCallCheck(this, Index);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Index).call(this, props));
    _this.nextActivities = [];
    _this.state = {
      width: 0,
      height: 0
    };
    _this.active = [];
    _this.day = {};
    _this.config = {};
    _this.timeout = null;
    return _this;
  }

  _createClass(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      window.addEventListener('resize', function () {
        _this2.setState({
          width: window.innerWidth,
          height: window.innerHeight
        });
      });
    }
  }, {
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
        var startMinute = parseInt(splitStartDate[1], 10);
        var splitFinishDate = activity.finishTime.split(':');
        var finishHour = parseInt(splitFinishDate[0], 10);
        var finishMinute = parseInt(splitFinishDate[1], 10);

        if (startHour < date.getHours() || startHour == date.getHours() && startMinute <= date.getMinutes()) {
          activity.active = finishHour > date.getHours() || activity.finishTime === "00:00" || finishHour == date.getHours() && finishMinute > date.getMinutes(); //set if active is good or bad
        } else {
          activity.active = false;
        }
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

        if (startHour >= date.getHours() && !activity.active && next.length < 3) {
          next.push(activity);
        }
      });
      this.nextActivities = next;
    }
  }, {
    key: "setTimeout",
    value: function (_setTimeout) {
      function setTimeout() {
        return _setTimeout.apply(this, arguments);
      }

      setTimeout.toString = function () {
        return _setTimeout.toString();
      };

      return setTimeout;
    }(function () {
      var _this3 = this;

      var minTime = -1;
      var date = new Date();

      for (var i = 0; i < this.active.length; i++) {
        var activity = this.active[i];
        var splitFinishDate = activity.finishTime.split(':');
        var finishHour = parseInt(splitFinishDate[0], 10);
        var finishMinutes = parseInt(splitFinishDate[1], 10);
        var secondsLeft = 60 - date.getSeconds() + 1;
        var minutes = finishMinutes != 0 ? finishMinutes - date.getMinutes() - 1 : 60 - date.getMinutes() - 1;
        var hours = finishHour != 0 ? finishHour - date.getHours() - 1 : 24 - date.getHours() - 1;

        if (hours < 0) {
          hours = 0;
        }

        if (minutes < 0) {
          minutes = 0;
        }

        var timeleft = 3600 * 1000 * hours + 60 * 1000 * minutes + secondsLeft * 1000;

        if (minTime == -1 || timeleft < minTime) {
          minTime = timeleft;
        }
      }

      for (var _i = 0; _i < this.nextActivities.length; _i++) {
        var _activity = this.nextActivities[_i];

        var splitStartDate = _activity.startTime.split(':');

        var startHour = parseInt(splitStartDate[0], 10);
        var startMinute = parseInt(splitStartDate[1], 10);

        var _secondsLeft = 60 - date.getSeconds() + 1;

        var _minutes = startMinute != 0 ? startMinute - date.getMinutes() - 1 : 60 - date.getMinutes() - 1;

        var _hours = startHour != 0 ? startHour - date.getHours() - 1 : 24 - date.getHours() - 1;

        if (_hours < 0) {
          _hours = 0;
        }

        if (_minutes < 0) {
          _minutes = 0;
        }

        var _timeleft = 3600 * 1000 * _hours + 60 * 1000 * _minutes + _secondsLeft * 1000;

        if (minTime == -1 || _timeleft < minTime) {
          minTime = _timeleft;
        }
      }

      try {
        clearTimeout(this.timeout);
      } catch (ex) {}

      if (minTime != -1) {
        this.timeout = setTimeout(function () {
          return _this3.setState({
            time: Date.now()
          });
        }, minTime);
      }
    })
  }, {
    key: "render",
    value: function render() {
      this.props.day.activities = this.orderActivities(this.props.day);
      this.setActive();
      this.getNext(this.props.day.activities);
      this.setTimeout();

      if (this.props.config.layout.background) {
        this.style = {
          body: {
            background: this.props.config.layout.background
          }
        };
      } else {
        this.style = {};
      }

      console.log(this.style);
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2236394638", [this.props.config.layout.background]]]) + " " + "container"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        styleId: "2236394638",
        css: "body:{background:".concat(this.props.config.layout.background, ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxkb2N1bWVudG9zXFxwcm9ncmFtYWNpb25cXEFTRGF5c1xccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdLaUIsQUFJb0Isd0NBQUMiLCJmaWxlIjoiRDpcXGRvY3VtZW50b3NcXHByb2dyYW1hY2lvblxcQVNEYXlzXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgJ2J1bG1hL2Nzcy9idWxtYS5jc3MnO1xyXG5pbXBvcnQgTGVmdFBhbmVsIGZyb20gJy4uL2NvbXBvbmVudHMvbGVmdFBhbmVsJztcclxuaW1wb3J0IEFjdGl2ZUFjdGl2aXRpZXMgZnJvbSAnLi4vY29tcG9uZW50cy9hY3RpdmVBY3Rpdml0aWVzJ1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkgeyAvL2Nob29zZSBiZWV0d2VlbiBwcm9kdWN0aW9uIGhvc3Qgb3IgZGV2ZWxvcG1lbnQgaG9zdFxyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvZGF5YCk7XHJcbiAgICAgICAgbGV0IGRheSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgICAgY29uc3QgcmVzMiA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvY29uZmlnYCk7XHJcbiAgICAgICAgY29uc3QgY29uZmlnID0gYXdhaXQgcmVzMi5qc29uKCk7XHJcbiAgICAgICAgLy9kYXkuYWN0aXZpdGllcz0gZGF5LmFjdGl2aXRpZXMuZmlsdGVyKGRheXM9PmRheXMuc3RhcnRUaW1lPmAke2NvbmZpZy5zdGFydFRpbWUudmFsdWV9OjAwYCk7XHJcbiAgICAgICAgLy9kYXkuYWN0aXZpdGllcyA9IGRheS5hY3Rpdml0aWVzLmZpbHRlcihkYXlzID0+IGRheXMuc3RhcnRUaW1lIDwgYCR7Y29uZmlnLmZpbmlzaFRpbWUudmFsdWV9OjAwYCk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZGF5LGNvbmZpZ1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICAgICAgdGhpcy5uZXh0QWN0aXZpdGllcz1bXTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICB3aWR0aDogMCxcclxuICAgICAgICAgICAgaGVpZ2h0OiAwXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYWN0aXZlPVtdXHJcbiAgICAgICAgdGhpcy5kYXk9e1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb25maWc9e1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50aW1lb3V0PW51bGw7XHJcbiAgICB9XHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgb3JkZXJBY3Rpdml0aWVzKGRheSl7XHJcbiAgICAgICAgbGV0IGFjdGl2aXRpZXM9W107XHJcbiAgICAgICAgY29uc3QgbGVuZ3RoPWRheS5hY3Rpdml0aWVzLmxlbmd0aDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICBsZXQgbWluSSA9IDA7XHJcbiAgICAgICAgICAgIGxldCBtaW5TdGFydFRpbWUgPSBkYXkuYWN0aXZpdGllc1swXS5zdGFydFRpbWU7XHJcbiAgICAgICAgICAgIGxldCBtaW5GaW5pc2hUaW1lID0gZGF5LmFjdGl2aXRpZXNbMF0uZmluaXNoVGltZTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDE7IGogPCBkYXkuYWN0aXZpdGllcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRheS5hY3Rpdml0aWVzW2pdLnN0YXJ0VGltZTxtaW5TdGFydFRpbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBtaW5JPWo7XHJcbiAgICAgICAgICAgICAgICAgICAgbWluU3RhcnRUaW1lID0gZGF5LmFjdGl2aXRpZXNbal0uc3RhcnRUaW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbkZpbmlzaFRpbWUgPSBkYXkuYWN0aXZpdGllc1tqXS5maW5pc2hUaW1lO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkYXkuYWN0aXZpdGllc1tqXS5zdGFydFRpbWUgPT0gbWluU3RhcnRUaW1lICYmIGRheS5hY3Rpdml0aWVzW2pdLmZpbmlzaFRpbWUgPCBtaW5GaW5pc2hUaW1lKXtcclxuICAgICAgICAgICAgICAgICAgICAgbWluSSA9IGo7XHJcbiAgICAgICAgICAgICAgICAgICAgIG1pblN0YXJ0VGltZSA9IGRheS5hY3Rpdml0aWVzW2pdLnN0YXJ0VGltZTtcclxuICAgICAgICAgICAgICAgICAgICAgbWluRmluaXNoVGltZSA9IGRheS5hY3Rpdml0aWVzW2pdLmZpbmlzaFRpbWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYWN0aXZpdGllcy5wdXNoKGRheS5hY3Rpdml0aWVzW21pbkldKTtcclxuICAgICAgICAgICAgZGF5LmFjdGl2aXRpZXMuc3BsaWNlKG1pbkksMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhY3Rpdml0aWVzO1xyXG4gICAgfVxyXG4gICAgc2V0QWN0aXZlKCkge1xyXG4gICAgICAgIGxldCBkYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgICB0aGlzLnByb3BzLmRheS5hY3Rpdml0aWVzLmZvckVhY2goYWN0aXZpdHkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgc3BsaXRTdGFydERhdGUgPSBhY3Rpdml0eS5zdGFydFRpbWUuc3BsaXQoJzonKTtcclxuICAgICAgICAgICAgbGV0IHN0YXJ0SG91ciA9IHBhcnNlSW50KHNwbGl0U3RhcnREYXRlWzBdLCAxMCk7XHJcbiAgICAgICAgICAgIGxldCBzdGFydE1pbnV0ZSA9IHBhcnNlSW50KHNwbGl0U3RhcnREYXRlWzFdLCAxMCk7XHJcbiAgICAgICAgICAgIGxldCBzcGxpdEZpbmlzaERhdGUgPSBhY3Rpdml0eS5maW5pc2hUaW1lLnNwbGl0KCc6Jyk7XHJcbiAgICAgICAgICAgIGxldCBmaW5pc2hIb3VyID0gcGFyc2VJbnQoc3BsaXRGaW5pc2hEYXRlWzBdLCAxMCk7XHJcbiAgICAgICAgICAgIGxldCBmaW5pc2hNaW51dGUgPSBwYXJzZUludChzcGxpdEZpbmlzaERhdGVbMV0sIDEwKTtcclxuICAgICAgICAgICAgaWYgKChzdGFydEhvdXIgPCBkYXRlLmdldEhvdXJzKCkpIHx8IChzdGFydEhvdXIgPT0gZGF0ZS5nZXRIb3VycygpICYmIHN0YXJ0TWludXRlIDw9IGRhdGUuZ2V0TWludXRlcygpKSl7XHJcbiAgICAgICAgICAgICAgICBhY3Rpdml0eS5hY3RpdmUgPShmaW5pc2hIb3VyID4gZGF0ZS5nZXRIb3VycygpIHx8IGFjdGl2aXR5LmZpbmlzaFRpbWUgPT09IFwiMDA6MDBcIiB8fCAoZmluaXNoSG91cj09ZGF0ZS5nZXRIb3VycygpICYmIGZpbmlzaE1pbnV0ZT5kYXRlLmdldE1pbnV0ZXMoKSkpOyAvL3NldCBpZiBhY3RpdmUgaXMgZ29vZCBvciBiYWRcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBhY3Rpdml0eS5hY3RpdmU9ZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmFjdGl2ZSA9IHRoaXMucHJvcHMuZGF5LmFjdGl2aXRpZXMuZmlsdGVyKGFjdGl2aXR5ID0+IGFjdGl2aXR5LmFjdGl2ZSA9PSB0cnVlKTtcclxuICAgIH1cclxuICAgIGdldE5leHQoYWN0aXZpdGllcyl7XHJcbiAgICAgICAgbGV0IG5leHQ9IFtdO1xyXG4gICAgICAgIGxldCBkYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgICBhY3Rpdml0aWVzLm1hcCgoYWN0aXZpdHkpPT57XHJcbiAgICAgICAgICAgIGxldCBzcGxpdFN0YXJ0RGF0ZSA9IGFjdGl2aXR5LnN0YXJ0VGltZS5zcGxpdCgnOicpO1xyXG4gICAgICAgICAgICBsZXQgc3RhcnRIb3VyID0gcGFyc2VJbnQoc3BsaXRTdGFydERhdGVbMF0sIDEwKTtcclxuICAgICAgICAgICAgaWYoc3RhcnRIb3VyPj1kYXRlLmdldEhvdXJzKCkgJiYgIWFjdGl2aXR5LmFjdGl2ZSAmJiBuZXh0Lmxlbmd0aDwzKXtcclxuICAgICAgICAgICAgICAgIG5leHQucHVzaChhY3Rpdml0eSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5uZXh0QWN0aXZpdGllcz1uZXh0O1xyXG4gICAgfVxyXG4gICAgc2V0VGltZW91dCgpe1xyXG4gICAgICAgIGxldCBtaW5UaW1lPSAtMTtcclxuICAgICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFjdGl2ZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgYWN0aXZpdHk9dGhpcy5hY3RpdmVbaV07XHJcbiAgICAgICAgICAgIGxldCBzcGxpdEZpbmlzaERhdGUgPSBhY3Rpdml0eS5maW5pc2hUaW1lLnNwbGl0KCc6Jyk7XHJcbiAgICAgICAgICAgIGxldCBmaW5pc2hIb3VyID0gcGFyc2VJbnQoc3BsaXRGaW5pc2hEYXRlWzBdLCAxMCk7XHJcbiAgICAgICAgICAgIGxldCBmaW5pc2hNaW51dGVzID0gcGFyc2VJbnQoc3BsaXRGaW5pc2hEYXRlWzFdLCAxMCk7XHJcbiAgICAgICAgICAgIGxldCBzZWNvbmRzTGVmdD0gNjAtZGF0ZS5nZXRTZWNvbmRzKCkrMTtcclxuICAgICAgICAgICAgbGV0IG1pbnV0ZXMgPSAoZmluaXNoTWludXRlcyAhPSAwID8gZmluaXNoTWludXRlcyAtIGRhdGUuZ2V0TWludXRlcygpLTEgOiA2MCAtIGRhdGUuZ2V0TWludXRlcygpLTEpO1xyXG4gICAgICAgICAgICBsZXQgaG91cnMgPSAoZmluaXNoSG91ciE9MD9maW5pc2hIb3VyLWRhdGUuZ2V0SG91cnMoKS0xOjI0LWRhdGUuZ2V0SG91cnMoKS0xKTtcclxuICAgICAgICAgICAgaWYoaG91cnM8MCl7XHJcbiAgICAgICAgICAgICAgICBob3Vycz0wO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKG1pbnV0ZXM8MCl7XHJcbiAgICAgICAgICAgICAgICBtaW51dGVzPTA7ICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgdGltZWxlZnQgPSAoMzYwMCoxMDAwKmhvdXJzKSsoNjAqMTAwMCptaW51dGVzKSsoc2Vjb25kc0xlZnQqMTAwMCk7XHJcbiAgICAgICAgICAgIGlmKG1pblRpbWU9PS0xIHx8IHRpbWVsZWZ0PG1pblRpbWUpe1xyXG4gICAgICAgICAgICAgICAgbWluVGltZT10aW1lbGVmdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IobGV0IGk9MDtpPHRoaXMubmV4dEFjdGl2aXRpZXMubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIGxldCBhY3Rpdml0eT10aGlzLm5leHRBY3Rpdml0aWVzW2ldO1xyXG4gICAgICAgICAgICBsZXQgc3BsaXRTdGFydERhdGUgPSBhY3Rpdml0eS5zdGFydFRpbWUuc3BsaXQoJzonKTtcclxuICAgICAgICAgICAgbGV0IHN0YXJ0SG91ciA9IHBhcnNlSW50KHNwbGl0U3RhcnREYXRlWzBdLCAxMCk7XHJcbiAgICAgICAgICAgIGxldCBzdGFydE1pbnV0ZSA9IHBhcnNlSW50KHNwbGl0U3RhcnREYXRlWzFdLCAxMCk7XHJcbiAgICAgICAgICAgIGxldCBzZWNvbmRzTGVmdCA9IDYwIC0gZGF0ZS5nZXRTZWNvbmRzKCkgKyAxO1xyXG4gICAgICAgICAgICBsZXQgbWludXRlcyA9IChzdGFydE1pbnV0ZSAhPSAwID8gc3RhcnRNaW51dGUgLSBkYXRlLmdldE1pbnV0ZXMoKSAtIDEgOiA2MCAtIGRhdGUuZ2V0TWludXRlcygpIC0gMSk7XHJcbiAgICAgICAgICAgIGxldCBob3VycyA9IChzdGFydEhvdXIgIT0gMCA/IHN0YXJ0SG91ciAtIGRhdGUuZ2V0SG91cnMoKSAtIDEgOiAyNCAtIGRhdGUuZ2V0SG91cnMoKSAtIDEpO1xyXG4gICAgICAgICAgICBpZiAoaG91cnMgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICBob3VycyA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG1pbnV0ZXMgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICBtaW51dGVzID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgdGltZWxlZnQgPSAoMzYwMCAqIDEwMDAgKiBob3VycykgKyAoNjAgKiAxMDAwICogbWludXRlcykgKyAoc2Vjb25kc0xlZnQgKiAxMDAwKTtcclxuICAgICAgICAgICAgaWYgKG1pblRpbWUgPT0gLTEgfHwgdGltZWxlZnQgPCBtaW5UaW1lKSB7XHJcbiAgICAgICAgICAgICAgICBtaW5UaW1lID0gdGltZWxlZnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dClcclxuICAgICAgICB9IGNhdGNoIChleCkge1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYobWluVGltZSE9LTEpe1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgdGltZTogRGF0ZS5ub3coKVxyXG4gICAgICAgICAgICB9KSwgbWluVGltZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHRoaXMucHJvcHMuZGF5LmFjdGl2aXRpZXMgPSB0aGlzLm9yZGVyQWN0aXZpdGllcyh0aGlzLnByb3BzLmRheSk7XHJcbiAgICAgICAgdGhpcy5zZXRBY3RpdmUoKTtcclxuICAgICAgICB0aGlzLmdldE5leHQodGhpcy5wcm9wcy5kYXkuYWN0aXZpdGllcyk7XHJcbiAgICAgICAgdGhpcy5zZXRUaW1lb3V0KCk7XHJcbiAgICAgICAgaWYodGhpcy5wcm9wcy5jb25maWcubGF5b3V0LmJhY2tncm91bmQpe1xyXG4gICAgICAgICAgICB0aGlzLnN0eWxlID0ge2JvZHk6e2JhY2tncm91bmQ6dGhpcy5wcm9wcy5jb25maWcubGF5b3V0LmJhY2tncm91bmR9fVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLnN0eWxlID0ge31cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdHlsZSk7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiR7dGhpcy5wcm9wcy5jb25maWcubGF5b3V0LmJhY2tncm91bmR9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+RGF5IFBhbmVsPC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Cb3R0b206XCI1dmhcIix0ZXh0QWxpZ246XCJjZW50ZXJcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZSBpcy0xXCI+U2NoZWR1bGU8L2gxPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImNvbHVtbiBpcy1vbmUtdGhpcmRcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMZWZ0UGFuZWwgY29uZmlnPXt0aGlzLnByb3BzLmNvbmZpZ30gYWN0aXZpdGllcz17dGhpcy5wcm9wcy5kYXkuYWN0aXZpdGllcz90aGlzLnByb3BzLmRheS5hY3Rpdml0aWVzOlwiXCJ9PjwvTGVmdFBhbmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJjb2x1bW4gaXMtdHdvLXRoaXJkc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt0aGlzLnN0YXRlLndpZHRoPjgwMD97cG9zaXRpb246XCJmaXhlZFwiLHdpZHRoOlwiNjB2d1wifTp7fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWN0aXZlQWN0aXZpdGllcyBjb25maWc9e3RoaXMucHJvcHMuY29uZmlnfSBhY3RpdmU9e3RoaXMuYWN0aXZlfSBuZXh0PXt0aGlzLm5leHRBY3Rpdml0aWVzfT48L0FjdGl2ZUFjdGl2aXRpZXM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufSJdfQ== */\n/*@ sourceURL=D:\\documentos\\programacion\\ASDays\\pages\\index.js */"),
        dynamic: [this.props.config.layout.background]
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("title", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2236394638", [this.props.config.layout.background]]])
      }, "Day Panel"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: {
          marginBottom: "5vh",
          textAlign: "center"
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2236394638", [this.props.config.layout.background]]])
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2236394638", [this.props.config.layout.background]]]) + " " + "title is-1"
      }, "Schedule")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2236394638", [this.props.config.layout.background]]]) + " " + "columns"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2236394638", [this.props.config.layout.background]]]) + " " + "column is-one-third"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_leftPanel__WEBPACK_IMPORTED_MODULE_4__["default"], {
        config: this.props.config,
        activities: this.props.day.activities ? this.props.day.activities : ""
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2236394638", [this.props.config.layout.background]]]) + " " + "column is-two-thirds"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: this.state.width > 800 ? {
          position: "fixed",
          width: "60vw"
        } : {},
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2236394638", [this.props.config.layout.background]]])
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_activeActivities__WEBPACK_IMPORTED_MODULE_5__["default"], {
        config: this.props.config,
        active: this.active,
        next: this.nextActivities
      })))));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);


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
//# sourceMappingURL=index.js.caa70dea124da9f0e3fd.hot-update.js.map