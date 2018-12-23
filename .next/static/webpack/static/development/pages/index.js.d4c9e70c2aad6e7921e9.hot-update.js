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
        className: "jsx-2948156972" + " " + "container"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        styleId: "2948156972",
        css: "body{background:#000;font:11px menlo;color:#fff;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxkb2N1bWVudG9zXFxwcm9ncmFtYWNpb25cXEFTRGF5c1xccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdLaUIsQUFHcUMsZ0JBQ0EsZ0JBQ0wsV0FDYiIsImZpbGUiOiJEOlxcZG9jdW1lbnRvc1xccHJvZ3JhbWFjaW9uXFxBU0RheXNcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAnYnVsbWEvY3NzL2J1bG1hLmNzcyc7XHJcbmltcG9ydCBMZWZ0UGFuZWwgZnJvbSAnLi4vY29tcG9uZW50cy9sZWZ0UGFuZWwnO1xyXG5pbXBvcnQgQWN0aXZlQWN0aXZpdGllcyBmcm9tICcuLi9jb21wb25lbnRzL2FjdGl2ZUFjdGl2aXRpZXMnXHJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKSB7IC8vY2hvb3NlIGJlZXR3ZWVuIHByb2R1Y3Rpb24gaG9zdCBvciBkZXZlbG9wbWVudCBob3N0XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9kYXlgKTtcclxuICAgICAgICBsZXQgZGF5ID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgICBjb25zdCByZXMyID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9jb25maWdgKTtcclxuICAgICAgICBjb25zdCBjb25maWcgPSBhd2FpdCByZXMyLmpzb24oKTtcclxuICAgICAgICAvL2RheS5hY3Rpdml0aWVzPSBkYXkuYWN0aXZpdGllcy5maWx0ZXIoZGF5cz0+ZGF5cy5zdGFydFRpbWU+YCR7Y29uZmlnLnN0YXJ0VGltZS52YWx1ZX06MDBgKTtcclxuICAgICAgICAvL2RheS5hY3Rpdml0aWVzID0gZGF5LmFjdGl2aXRpZXMuZmlsdGVyKGRheXMgPT4gZGF5cy5zdGFydFRpbWUgPCBgJHtjb25maWcuZmluaXNoVGltZS52YWx1ZX06MDBgKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBkYXksY29uZmlnXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuICAgICAgICB0aGlzLm5leHRBY3Rpdml0aWVzPVtdO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAwLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDBcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hY3RpdmU9W11cclxuICAgICAgICB0aGlzLmRheT17XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbmZpZz17XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRpbWVvdXQ9bnVsbDtcclxuICAgIH1cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHRcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBvcmRlckFjdGl2aXRpZXMoZGF5KXtcclxuICAgICAgICBsZXQgYWN0aXZpdGllcz1bXTtcclxuICAgICAgICBjb25zdCBsZW5ndGg9ZGF5LmFjdGl2aXRpZXMubGVuZ3RoO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIGxldCBtaW5JID0gMDtcclxuICAgICAgICAgICAgbGV0IG1pblN0YXJ0VGltZSA9IGRheS5hY3Rpdml0aWVzWzBdLnN0YXJ0VGltZTtcclxuICAgICAgICAgICAgbGV0IG1pbkZpbmlzaFRpbWUgPSBkYXkuYWN0aXZpdGllc1swXS5maW5pc2hUaW1lO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMTsgaiA8IGRheS5hY3Rpdml0aWVzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF5LmFjdGl2aXRpZXNbal0uc3RhcnRUaW1lPG1pblN0YXJ0VGltZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbkk9ajtcclxuICAgICAgICAgICAgICAgICAgICBtaW5TdGFydFRpbWUgPSBkYXkuYWN0aXZpdGllc1tqXS5zdGFydFRpbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWluRmluaXNoVGltZSA9IGRheS5hY3Rpdml0aWVzW2pdLmZpbmlzaFRpbWU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGRheS5hY3Rpdml0aWVzW2pdLnN0YXJ0VGltZSA9PSBtaW5TdGFydFRpbWUgJiYgZGF5LmFjdGl2aXRpZXNbal0uZmluaXNoVGltZSA8IG1pbkZpbmlzaFRpbWUpe1xyXG4gICAgICAgICAgICAgICAgICAgICBtaW5JID0gajtcclxuICAgICAgICAgICAgICAgICAgICAgbWluU3RhcnRUaW1lID0gZGF5LmFjdGl2aXRpZXNbal0uc3RhcnRUaW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICBtaW5GaW5pc2hUaW1lID0gZGF5LmFjdGl2aXRpZXNbal0uZmluaXNoVGltZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhY3Rpdml0aWVzLnB1c2goZGF5LmFjdGl2aXRpZXNbbWluSV0pO1xyXG4gICAgICAgICAgICBkYXkuYWN0aXZpdGllcy5zcGxpY2UobWluSSwxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFjdGl2aXRpZXM7XHJcbiAgICB9XHJcbiAgICBzZXRBY3RpdmUoKSB7XHJcbiAgICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIHRoaXMucHJvcHMuZGF5LmFjdGl2aXRpZXMuZm9yRWFjaChhY3Rpdml0eSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBzcGxpdFN0YXJ0RGF0ZSA9IGFjdGl2aXR5LnN0YXJ0VGltZS5zcGxpdCgnOicpO1xyXG4gICAgICAgICAgICBsZXQgc3RhcnRIb3VyID0gcGFyc2VJbnQoc3BsaXRTdGFydERhdGVbMF0sIDEwKTtcclxuICAgICAgICAgICAgbGV0IHN0YXJ0TWludXRlID0gcGFyc2VJbnQoc3BsaXRTdGFydERhdGVbMV0sIDEwKTtcclxuICAgICAgICAgICAgbGV0IHNwbGl0RmluaXNoRGF0ZSA9IGFjdGl2aXR5LmZpbmlzaFRpbWUuc3BsaXQoJzonKTtcclxuICAgICAgICAgICAgbGV0IGZpbmlzaEhvdXIgPSBwYXJzZUludChzcGxpdEZpbmlzaERhdGVbMF0sIDEwKTtcclxuICAgICAgICAgICAgbGV0IGZpbmlzaE1pbnV0ZSA9IHBhcnNlSW50KHNwbGl0RmluaXNoRGF0ZVsxXSwgMTApO1xyXG4gICAgICAgICAgICBpZiAoKHN0YXJ0SG91ciA8IGRhdGUuZ2V0SG91cnMoKSkgfHwgKHN0YXJ0SG91ciA9PSBkYXRlLmdldEhvdXJzKCkgJiYgc3RhcnRNaW51dGUgPD0gZGF0ZS5nZXRNaW51dGVzKCkpKXtcclxuICAgICAgICAgICAgICAgIGFjdGl2aXR5LmFjdGl2ZSA9KGZpbmlzaEhvdXIgPiBkYXRlLmdldEhvdXJzKCkgfHwgYWN0aXZpdHkuZmluaXNoVGltZSA9PT0gXCIwMDowMFwiIHx8IChmaW5pc2hIb3VyPT1kYXRlLmdldEhvdXJzKCkgJiYgZmluaXNoTWludXRlPmRhdGUuZ2V0TWludXRlcygpKSk7IC8vc2V0IGlmIGFjdGl2ZSBpcyBnb29kIG9yIGJhZFxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGFjdGl2aXR5LmFjdGl2ZT1mYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuYWN0aXZlID0gdGhpcy5wcm9wcy5kYXkuYWN0aXZpdGllcy5maWx0ZXIoYWN0aXZpdHkgPT4gYWN0aXZpdHkuYWN0aXZlID09IHRydWUpO1xyXG4gICAgfVxyXG4gICAgZ2V0TmV4dChhY3Rpdml0aWVzKXtcclxuICAgICAgICBsZXQgbmV4dD0gW107XHJcbiAgICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIGFjdGl2aXRpZXMubWFwKChhY3Rpdml0eSk9PntcclxuICAgICAgICAgICAgbGV0IHNwbGl0U3RhcnREYXRlID0gYWN0aXZpdHkuc3RhcnRUaW1lLnNwbGl0KCc6Jyk7XHJcbiAgICAgICAgICAgIGxldCBzdGFydEhvdXIgPSBwYXJzZUludChzcGxpdFN0YXJ0RGF0ZVswXSwgMTApO1xyXG4gICAgICAgICAgICBpZihzdGFydEhvdXI+PWRhdGUuZ2V0SG91cnMoKSAmJiAhYWN0aXZpdHkuYWN0aXZlICYmIG5leHQubGVuZ3RoPDMpe1xyXG4gICAgICAgICAgICAgICAgbmV4dC5wdXNoKGFjdGl2aXR5KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLm5leHRBY3Rpdml0aWVzPW5leHQ7XHJcbiAgICB9XHJcbiAgICBzZXRUaW1lb3V0KCl7XHJcbiAgICAgICAgbGV0IG1pblRpbWU9IC0xO1xyXG4gICAgICAgIGxldCBkYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYWN0aXZlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBhY3Rpdml0eT10aGlzLmFjdGl2ZVtpXTtcclxuICAgICAgICAgICAgbGV0IHNwbGl0RmluaXNoRGF0ZSA9IGFjdGl2aXR5LmZpbmlzaFRpbWUuc3BsaXQoJzonKTtcclxuICAgICAgICAgICAgbGV0IGZpbmlzaEhvdXIgPSBwYXJzZUludChzcGxpdEZpbmlzaERhdGVbMF0sIDEwKTtcclxuICAgICAgICAgICAgbGV0IGZpbmlzaE1pbnV0ZXMgPSBwYXJzZUludChzcGxpdEZpbmlzaERhdGVbMV0sIDEwKTtcclxuICAgICAgICAgICAgbGV0IHNlY29uZHNMZWZ0PSA2MC1kYXRlLmdldFNlY29uZHMoKSsxO1xyXG4gICAgICAgICAgICBsZXQgbWludXRlcyA9IChmaW5pc2hNaW51dGVzICE9IDAgPyBmaW5pc2hNaW51dGVzIC0gZGF0ZS5nZXRNaW51dGVzKCktMSA6IDYwIC0gZGF0ZS5nZXRNaW51dGVzKCktMSk7XHJcbiAgICAgICAgICAgIGxldCBob3VycyA9IChmaW5pc2hIb3VyIT0wP2ZpbmlzaEhvdXItZGF0ZS5nZXRIb3VycygpLTE6MjQtZGF0ZS5nZXRIb3VycygpLTEpO1xyXG4gICAgICAgICAgICBpZihob3VyczwwKXtcclxuICAgICAgICAgICAgICAgIGhvdXJzPTA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYobWludXRlczwwKXtcclxuICAgICAgICAgICAgICAgIG1pbnV0ZXM9MDsgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCB0aW1lbGVmdCA9ICgzNjAwKjEwMDAqaG91cnMpKyg2MCoxMDAwKm1pbnV0ZXMpKyhzZWNvbmRzTGVmdCoxMDAwKTtcclxuICAgICAgICAgICAgaWYobWluVGltZT09LTEgfHwgdGltZWxlZnQ8bWluVGltZSl7XHJcbiAgICAgICAgICAgICAgICBtaW5UaW1lPXRpbWVsZWZ0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcihsZXQgaT0wO2k8dGhpcy5uZXh0QWN0aXZpdGllcy5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgbGV0IGFjdGl2aXR5PXRoaXMubmV4dEFjdGl2aXRpZXNbaV07XHJcbiAgICAgICAgICAgIGxldCBzcGxpdFN0YXJ0RGF0ZSA9IGFjdGl2aXR5LnN0YXJ0VGltZS5zcGxpdCgnOicpO1xyXG4gICAgICAgICAgICBsZXQgc3RhcnRIb3VyID0gcGFyc2VJbnQoc3BsaXRTdGFydERhdGVbMF0sIDEwKTtcclxuICAgICAgICAgICAgbGV0IHN0YXJ0TWludXRlID0gcGFyc2VJbnQoc3BsaXRTdGFydERhdGVbMV0sIDEwKTtcclxuICAgICAgICAgICAgbGV0IHNlY29uZHNMZWZ0ID0gNjAgLSBkYXRlLmdldFNlY29uZHMoKSArIDE7XHJcbiAgICAgICAgICAgIGxldCBtaW51dGVzID0gKHN0YXJ0TWludXRlICE9IDAgPyBzdGFydE1pbnV0ZSAtIGRhdGUuZ2V0TWludXRlcygpIC0gMSA6IDYwIC0gZGF0ZS5nZXRNaW51dGVzKCkgLSAxKTtcclxuICAgICAgICAgICAgbGV0IGhvdXJzID0gKHN0YXJ0SG91ciAhPSAwID8gc3RhcnRIb3VyIC0gZGF0ZS5nZXRIb3VycygpIC0gMSA6IDI0IC0gZGF0ZS5nZXRIb3VycygpIC0gMSk7XHJcbiAgICAgICAgICAgIGlmIChob3VycyA8IDApIHtcclxuICAgICAgICAgICAgICAgIGhvdXJzID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAobWludXRlcyA8IDApIHtcclxuICAgICAgICAgICAgICAgIG1pbnV0ZXMgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCB0aW1lbGVmdCA9ICgzNjAwICogMTAwMCAqIGhvdXJzKSArICg2MCAqIDEwMDAgKiBtaW51dGVzKSArIChzZWNvbmRzTGVmdCAqIDEwMDApO1xyXG4gICAgICAgICAgICBpZiAobWluVGltZSA9PSAtMSB8fCB0aW1lbGVmdCA8IG1pblRpbWUpIHtcclxuICAgICAgICAgICAgICAgIG1pblRpbWUgPSB0aW1lbGVmdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KVxyXG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihtaW5UaW1lIT0tMSl7XHJcbiAgICAgICAgICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICB0aW1lOiBEYXRlLm5vdygpXHJcbiAgICAgICAgICAgIH0pLCBtaW5UaW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5kYXkuYWN0aXZpdGllcyA9IHRoaXMub3JkZXJBY3Rpdml0aWVzKHRoaXMucHJvcHMuZGF5KTtcclxuICAgICAgICB0aGlzLnNldEFjdGl2ZSgpO1xyXG4gICAgICAgIHRoaXMuZ2V0TmV4dCh0aGlzLnByb3BzLmRheS5hY3Rpdml0aWVzKTtcclxuICAgICAgICB0aGlzLnNldFRpbWVvdXQoKTtcclxuICAgICAgICBpZih0aGlzLnByb3BzLmNvbmZpZy5sYXlvdXQuYmFja2dyb3VuZCl7XHJcbiAgICAgICAgICAgIHRoaXMuc3R5bGUgPSB7Ym9keTp7YmFja2dyb3VuZDp0aGlzLnByb3BzLmNvbmZpZy5sYXlvdXQuYmFja2dyb3VuZH19XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuc3R5bGUgPSB7fVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0eWxlKTtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICBib2R5IHsgXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwMDtcclxuICAgICAgICAgICAgICAgICAgICBmb250OiAxMXB4IG1lbmxvO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5EYXkgUGFuZWw8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbkJvdHRvbTpcIjV2aFwiLHRleHRBbGlnbjpcImNlbnRlclwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlIGlzLTFcIj5TY2hlZHVsZTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiY29sdW1uIGlzLW9uZS10aGlyZFwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExlZnRQYW5lbCBjb25maWc9e3RoaXMucHJvcHMuY29uZmlnfSBhY3Rpdml0aWVzPXt0aGlzLnByb3BzLmRheS5hY3Rpdml0aWVzP3RoaXMucHJvcHMuZGF5LmFjdGl2aXRpZXM6XCJcIn0+PC9MZWZ0UGFuZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImNvbHVtbiBpcy10d28tdGhpcmRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3RoaXMuc3RhdGUud2lkdGg+ODAwP3twb3NpdGlvbjpcImZpeGVkXCIsd2lkdGg6XCI2MHZ3XCJ9Ont9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY3RpdmVBY3Rpdml0aWVzIGNvbmZpZz17dGhpcy5wcm9wcy5jb25maWd9IGFjdGl2ZT17dGhpcy5hY3RpdmV9IG5leHQ9e3RoaXMubmV4dEFjdGl2aXRpZXN9PjwvQWN0aXZlQWN0aXZpdGllcz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59Il19 */\n/*@ sourceURL=D:\\documentos\\programacion\\ASDays\\pages\\index.js */"
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("title", {
        className: "jsx-2948156972"
      }, "Day Panel"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: {
          marginBottom: "5vh",
          textAlign: "center"
        },
        className: "jsx-2948156972"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
        className: "jsx-2948156972" + " " + "title is-1"
      }, "Schedule")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-2948156972" + " " + "columns"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-2948156972" + " " + "column is-one-third"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_leftPanel__WEBPACK_IMPORTED_MODULE_4__["default"], {
        config: this.props.config,
        activities: this.props.day.activities ? this.props.day.activities : ""
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-2948156972" + " " + "column is-two-thirds"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: this.state.width > 800 ? {
          position: "fixed",
          width: "60vw"
        } : {},
        className: "jsx-2948156972"
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
//# sourceMappingURL=index.js.d4c9e70c2aad6e7921e9.hot-update.js.map