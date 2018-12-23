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

      if (this.props.config.layout && this.props.config.layout.background) {
        this.background = this.props.config.layout.background;
      } else {
        this.background = "";
      }

      if (this.props.config.layout && this.props.config.layout.text) {
        this.color = this.props.config.layout.text;
      } else {
        this.color = "#4a4a4a";
      }

      if (this.props.config.layout && this.props.config.layout.title) {
        this.title = this.props.config.layout.title;
      } else {
        this.title = "#363636";
      }

      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-3487739007" + " " + "container"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        styleId: "3487739007",
        css: "body{background:".concat(this.background, ";color:").concat(this.color, ";}h1{color:").concat(this.color, ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxkb2N1bWVudG9zXFxwcm9ncmFtYWNpb25cXEFTRGF5c1xccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBLaUIsQUFHaUUsQUFJTCxtQ0FDdkMsS0FKdUMsbUNBQ3ZDIiwiZmlsZSI6IkQ6XFxkb2N1bWVudG9zXFxwcm9ncmFtYWNpb25cXEFTRGF5c1xccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICdidWxtYS9jc3MvYnVsbWEuY3NzJztcclxuaW1wb3J0IExlZnRQYW5lbCBmcm9tICcuLi9jb21wb25lbnRzL2xlZnRQYW5lbCc7XHJcbmltcG9ydCBBY3RpdmVBY3Rpdml0aWVzIGZyb20gJy4uL2NvbXBvbmVudHMvYWN0aXZlQWN0aXZpdGllcydcclxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHsgLy9jaG9vc2UgYmVldHdlZW4gcHJvZHVjdGlvbiBob3N0IG9yIGRldmVsb3BtZW50IGhvc3RcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2RheWApO1xyXG4gICAgICAgIGxldCBkYXkgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICAgIGNvbnN0IHJlczIgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2NvbmZpZ2ApO1xyXG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IGF3YWl0IHJlczIuanNvbigpO1xyXG4gICAgICAgIC8vZGF5LmFjdGl2aXRpZXM9IGRheS5hY3Rpdml0aWVzLmZpbHRlcihkYXlzPT5kYXlzLnN0YXJ0VGltZT5gJHtjb25maWcuc3RhcnRUaW1lLnZhbHVlfTowMGApO1xyXG4gICAgICAgIC8vZGF5LmFjdGl2aXRpZXMgPSBkYXkuYWN0aXZpdGllcy5maWx0ZXIoZGF5cyA9PiBkYXlzLnN0YXJ0VGltZSA8IGAke2NvbmZpZy5maW5pc2hUaW1lLnZhbHVlfTowMGApO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGRheSxjb25maWdcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgICAgIHRoaXMubmV4dEFjdGl2aXRpZXM9W107XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgd2lkdGg6IDAsXHJcbiAgICAgICAgICAgIGhlaWdodDogMFxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmFjdGl2ZT1bXVxyXG4gICAgICAgIHRoaXMuZGF5PXtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29uZmlnPXtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudGltZW91dD1udWxsO1xyXG4gICAgfVxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogd2luZG93LmlubmVyV2lkdGgsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIG9yZGVyQWN0aXZpdGllcyhkYXkpe1xyXG4gICAgICAgIGxldCBhY3Rpdml0aWVzPVtdO1xyXG4gICAgICAgIGNvbnN0IGxlbmd0aD1kYXkuYWN0aXZpdGllcy5sZW5ndGg7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgbGV0IG1pbkkgPSAwO1xyXG4gICAgICAgICAgICBsZXQgbWluU3RhcnRUaW1lID0gZGF5LmFjdGl2aXRpZXNbMF0uc3RhcnRUaW1lO1xyXG4gICAgICAgICAgICBsZXQgbWluRmluaXNoVGltZSA9IGRheS5hY3Rpdml0aWVzWzBdLmZpbmlzaFRpbWU7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAxOyBqIDwgZGF5LmFjdGl2aXRpZXMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChkYXkuYWN0aXZpdGllc1tqXS5zdGFydFRpbWU8bWluU3RhcnRUaW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWluST1qO1xyXG4gICAgICAgICAgICAgICAgICAgIG1pblN0YXJ0VGltZSA9IGRheS5hY3Rpdml0aWVzW2pdLnN0YXJ0VGltZTtcclxuICAgICAgICAgICAgICAgICAgICBtaW5GaW5pc2hUaW1lID0gZGF5LmFjdGl2aXRpZXNbal0uZmluaXNoVGltZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF5LmFjdGl2aXRpZXNbal0uc3RhcnRUaW1lID09IG1pblN0YXJ0VGltZSAmJiBkYXkuYWN0aXZpdGllc1tqXS5maW5pc2hUaW1lIDwgbWluRmluaXNoVGltZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgIG1pbkkgPSBqO1xyXG4gICAgICAgICAgICAgICAgICAgICBtaW5TdGFydFRpbWUgPSBkYXkuYWN0aXZpdGllc1tqXS5zdGFydFRpbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgIG1pbkZpbmlzaFRpbWUgPSBkYXkuYWN0aXZpdGllc1tqXS5maW5pc2hUaW1lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGFjdGl2aXRpZXMucHVzaChkYXkuYWN0aXZpdGllc1ttaW5JXSk7XHJcbiAgICAgICAgICAgIGRheS5hY3Rpdml0aWVzLnNwbGljZShtaW5JLDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYWN0aXZpdGllcztcclxuICAgIH1cclxuICAgIHNldEFjdGl2ZSgpIHtcclxuICAgICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5kYXkuYWN0aXZpdGllcy5mb3JFYWNoKGFjdGl2aXR5ID0+IHtcclxuICAgICAgICAgICAgbGV0IHNwbGl0U3RhcnREYXRlID0gYWN0aXZpdHkuc3RhcnRUaW1lLnNwbGl0KCc6Jyk7XHJcbiAgICAgICAgICAgIGxldCBzdGFydEhvdXIgPSBwYXJzZUludChzcGxpdFN0YXJ0RGF0ZVswXSwgMTApO1xyXG4gICAgICAgICAgICBsZXQgc3RhcnRNaW51dGUgPSBwYXJzZUludChzcGxpdFN0YXJ0RGF0ZVsxXSwgMTApO1xyXG4gICAgICAgICAgICBsZXQgc3BsaXRGaW5pc2hEYXRlID0gYWN0aXZpdHkuZmluaXNoVGltZS5zcGxpdCgnOicpO1xyXG4gICAgICAgICAgICBsZXQgZmluaXNoSG91ciA9IHBhcnNlSW50KHNwbGl0RmluaXNoRGF0ZVswXSwgMTApO1xyXG4gICAgICAgICAgICBsZXQgZmluaXNoTWludXRlID0gcGFyc2VJbnQoc3BsaXRGaW5pc2hEYXRlWzFdLCAxMCk7XHJcbiAgICAgICAgICAgIGlmICgoc3RhcnRIb3VyIDwgZGF0ZS5nZXRIb3VycygpKSB8fCAoc3RhcnRIb3VyID09IGRhdGUuZ2V0SG91cnMoKSAmJiBzdGFydE1pbnV0ZSA8PSBkYXRlLmdldE1pbnV0ZXMoKSkpe1xyXG4gICAgICAgICAgICAgICAgYWN0aXZpdHkuYWN0aXZlID0oZmluaXNoSG91ciA+IGRhdGUuZ2V0SG91cnMoKSB8fCBhY3Rpdml0eS5maW5pc2hUaW1lID09PSBcIjAwOjAwXCIgfHwgKGZpbmlzaEhvdXI9PWRhdGUuZ2V0SG91cnMoKSAmJiBmaW5pc2hNaW51dGU+ZGF0ZS5nZXRNaW51dGVzKCkpKTsgLy9zZXQgaWYgYWN0aXZlIGlzIGdvb2Qgb3IgYmFkXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgYWN0aXZpdHkuYWN0aXZlPWZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSB0aGlzLnByb3BzLmRheS5hY3Rpdml0aWVzLmZpbHRlcihhY3Rpdml0eSA9PiBhY3Rpdml0eS5hY3RpdmUgPT0gdHJ1ZSk7XHJcbiAgICB9XHJcbiAgICBnZXROZXh0KGFjdGl2aXRpZXMpe1xyXG4gICAgICAgIGxldCBuZXh0PSBbXTtcclxuICAgICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgYWN0aXZpdGllcy5tYXAoKGFjdGl2aXR5KT0+e1xyXG4gICAgICAgICAgICBsZXQgc3BsaXRTdGFydERhdGUgPSBhY3Rpdml0eS5zdGFydFRpbWUuc3BsaXQoJzonKTtcclxuICAgICAgICAgICAgbGV0IHN0YXJ0SG91ciA9IHBhcnNlSW50KHNwbGl0U3RhcnREYXRlWzBdLCAxMCk7XHJcbiAgICAgICAgICAgIGlmKHN0YXJ0SG91cj49ZGF0ZS5nZXRIb3VycygpICYmICFhY3Rpdml0eS5hY3RpdmUgJiYgbmV4dC5sZW5ndGg8Myl7XHJcbiAgICAgICAgICAgICAgICBuZXh0LnB1c2goYWN0aXZpdHkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMubmV4dEFjdGl2aXRpZXM9bmV4dDtcclxuICAgIH1cclxuICAgIHNldFRpbWVvdXQoKXtcclxuICAgICAgICBsZXQgbWluVGltZT0gLTE7XHJcbiAgICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hY3RpdmUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGFjdGl2aXR5PXRoaXMuYWN0aXZlW2ldO1xyXG4gICAgICAgICAgICBsZXQgc3BsaXRGaW5pc2hEYXRlID0gYWN0aXZpdHkuZmluaXNoVGltZS5zcGxpdCgnOicpO1xyXG4gICAgICAgICAgICBsZXQgZmluaXNoSG91ciA9IHBhcnNlSW50KHNwbGl0RmluaXNoRGF0ZVswXSwgMTApO1xyXG4gICAgICAgICAgICBsZXQgZmluaXNoTWludXRlcyA9IHBhcnNlSW50KHNwbGl0RmluaXNoRGF0ZVsxXSwgMTApO1xyXG4gICAgICAgICAgICBsZXQgc2Vjb25kc0xlZnQ9IDYwLWRhdGUuZ2V0U2Vjb25kcygpKzE7XHJcbiAgICAgICAgICAgIGxldCBtaW51dGVzID0gKGZpbmlzaE1pbnV0ZXMgIT0gMCA/IGZpbmlzaE1pbnV0ZXMgLSBkYXRlLmdldE1pbnV0ZXMoKS0xIDogNjAgLSBkYXRlLmdldE1pbnV0ZXMoKS0xKTtcclxuICAgICAgICAgICAgbGV0IGhvdXJzID0gKGZpbmlzaEhvdXIhPTA/ZmluaXNoSG91ci1kYXRlLmdldEhvdXJzKCktMToyNC1kYXRlLmdldEhvdXJzKCktMSk7XHJcbiAgICAgICAgICAgIGlmKGhvdXJzPDApe1xyXG4gICAgICAgICAgICAgICAgaG91cnM9MDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihtaW51dGVzPDApe1xyXG4gICAgICAgICAgICAgICAgbWludXRlcz0wOyAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IHRpbWVsZWZ0ID0gKDM2MDAqMTAwMCpob3VycykrKDYwKjEwMDAqbWludXRlcykrKHNlY29uZHNMZWZ0KjEwMDApO1xyXG4gICAgICAgICAgICBpZihtaW5UaW1lPT0tMSB8fCB0aW1lbGVmdDxtaW5UaW1lKXtcclxuICAgICAgICAgICAgICAgIG1pblRpbWU9dGltZWxlZnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKGxldCBpPTA7aTx0aGlzLm5leHRBY3Rpdml0aWVzLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICBsZXQgYWN0aXZpdHk9dGhpcy5uZXh0QWN0aXZpdGllc1tpXTtcclxuICAgICAgICAgICAgbGV0IHNwbGl0U3RhcnREYXRlID0gYWN0aXZpdHkuc3RhcnRUaW1lLnNwbGl0KCc6Jyk7XHJcbiAgICAgICAgICAgIGxldCBzdGFydEhvdXIgPSBwYXJzZUludChzcGxpdFN0YXJ0RGF0ZVswXSwgMTApO1xyXG4gICAgICAgICAgICBsZXQgc3RhcnRNaW51dGUgPSBwYXJzZUludChzcGxpdFN0YXJ0RGF0ZVsxXSwgMTApO1xyXG4gICAgICAgICAgICBsZXQgc2Vjb25kc0xlZnQgPSA2MCAtIGRhdGUuZ2V0U2Vjb25kcygpICsgMTtcclxuICAgICAgICAgICAgbGV0IG1pbnV0ZXMgPSAoc3RhcnRNaW51dGUgIT0gMCA/IHN0YXJ0TWludXRlIC0gZGF0ZS5nZXRNaW51dGVzKCkgLSAxIDogNjAgLSBkYXRlLmdldE1pbnV0ZXMoKSAtIDEpO1xyXG4gICAgICAgICAgICBsZXQgaG91cnMgPSAoc3RhcnRIb3VyICE9IDAgPyBzdGFydEhvdXIgLSBkYXRlLmdldEhvdXJzKCkgLSAxIDogMjQgLSBkYXRlLmdldEhvdXJzKCkgLSAxKTtcclxuICAgICAgICAgICAgaWYgKGhvdXJzIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgaG91cnMgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChtaW51dGVzIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgbWludXRlcyA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IHRpbWVsZWZ0ID0gKDM2MDAgKiAxMDAwICogaG91cnMpICsgKDYwICogMTAwMCAqIG1pbnV0ZXMpICsgKHNlY29uZHNMZWZ0ICogMTAwMCk7XHJcbiAgICAgICAgICAgIGlmIChtaW5UaW1lID09IC0xIHx8IHRpbWVsZWZ0IDwgbWluVGltZSkge1xyXG4gICAgICAgICAgICAgICAgbWluVGltZSA9IHRpbWVsZWZ0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpXHJcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKG1pblRpbWUhPS0xKXtcclxuICAgICAgICAgICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHRpbWU6IERhdGUubm93KClcclxuICAgICAgICAgICAgfSksIG1pblRpbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICB0aGlzLnByb3BzLmRheS5hY3Rpdml0aWVzID0gdGhpcy5vcmRlckFjdGl2aXRpZXModGhpcy5wcm9wcy5kYXkpO1xyXG4gICAgICAgIHRoaXMuc2V0QWN0aXZlKCk7XHJcbiAgICAgICAgdGhpcy5nZXROZXh0KHRoaXMucHJvcHMuZGF5LmFjdGl2aXRpZXMpO1xyXG4gICAgICAgIHRoaXMuc2V0VGltZW91dCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHRoaXMucHJvcHMuY29uZmlnLmxheW91dCAmJiB0aGlzLnByb3BzLmNvbmZpZy5sYXlvdXQuYmFja2dyb3VuZCl7XHJcbiAgICAgICAgICAgIHRoaXMuYmFja2dyb3VuZCA9IHRoaXMucHJvcHMuY29uZmlnLmxheW91dC5iYWNrZ3JvdW5kO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLmJhY2tncm91bmQgPSBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLnByb3BzLmNvbmZpZy5sYXlvdXQgJiYgdGhpcy5wcm9wcy5jb25maWcubGF5b3V0LnRleHQpe1xyXG4gICAgICAgICAgICB0aGlzLmNvbG9yID0gdGhpcy5wcm9wcy5jb25maWcubGF5b3V0LnRleHQ7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuY29sb3IgPSBcIiM0YTRhNGFcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5wcm9wcy5jb25maWcubGF5b3V0ICYmIHRoaXMucHJvcHMuY29uZmlnLmxheW91dC50aXRsZSl7XHJcbiAgICAgICAgICAgIHRoaXMudGl0bGUgPSB0aGlzLnByb3BzLmNvbmZpZy5sYXlvdXQudGl0bGVcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy50aXRsZSA9IFwiIzM2MzYzNlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgYm9keSB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAke3RoaXMuYmFja2dyb3VuZH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAke3RoaXMuY29sb3J9O1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgaDEgeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR7dGhpcy5jb2xvcn07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+RGF5IFBhbmVsPC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Cb3R0b206XCI1dmhcIix0ZXh0QWxpZ246XCJjZW50ZXJcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZSBpcy0xXCI+U2NoZWR1bGU8L2gxPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImNvbHVtbiBpcy1vbmUtdGhpcmRcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMZWZ0UGFuZWwgY29uZmlnPXt0aGlzLnByb3BzLmNvbmZpZ30gYWN0aXZpdGllcz17dGhpcy5wcm9wcy5kYXkuYWN0aXZpdGllcz90aGlzLnByb3BzLmRheS5hY3Rpdml0aWVzOlwiXCJ9PjwvTGVmdFBhbmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJjb2x1bW4gaXMtdHdvLXRoaXJkc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt0aGlzLnN0YXRlLndpZHRoPjgwMD97cG9zaXRpb246XCJmaXhlZFwiLHdpZHRoOlwiNjB2d1wifTp7fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWN0aXZlQWN0aXZpdGllcyBjb25maWc9e3RoaXMucHJvcHMuY29uZmlnfSBhY3RpdmU9e3RoaXMuYWN0aXZlfSBuZXh0PXt0aGlzLm5leHRBY3Rpdml0aWVzfT48L0FjdGl2ZUFjdGl2aXRpZXM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufSJdfQ== */\n/*@ sourceURL=D:\\documentos\\programacion\\ASDays\\pages\\index.js */")
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("title", {
        className: "jsx-3487739007"
      }, "Day Panel"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: {
          marginBottom: "5vh",
          textAlign: "center"
        },
        className: "jsx-3487739007"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
        className: "jsx-3487739007" + " " + "title is-1"
      }, "Schedule")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-3487739007" + " " + "columns"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-3487739007" + " " + "column is-one-third"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_leftPanel__WEBPACK_IMPORTED_MODULE_4__["default"], {
        config: this.props.config,
        activities: this.props.day.activities ? this.props.day.activities : ""
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-3487739007" + " " + "column is-two-thirds"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: this.state.width > 800 ? {
          position: "fixed",
          width: "60vw"
        } : {},
        className: "jsx-3487739007"
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
//# sourceMappingURL=index.js.63e40521aadd29b6ea7f.hot-update.js.map