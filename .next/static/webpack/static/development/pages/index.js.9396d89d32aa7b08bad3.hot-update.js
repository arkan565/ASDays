webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/activeActivities.js":
/*!****************************************!*\
  !*** ./components/activeActivities.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ActiveActivities; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _activeActivitiesCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./activeActivitiesCard */ "./components/activeActivitiesCard.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var ActiveActivities =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ActiveActivities, _React$Component);

  function ActiveActivities(props) {
    _classCallCheck(this, ActiveActivities);

    return _possibleConstructorReturn(this, _getPrototypeOf(ActiveActivities).call(this, props));
  }

  _createClass(ActiveActivities, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "columns"
      }, this.props.active.map(function (activeActivity) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_activeActivitiesCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
          key: activeActivity,
          activity: activeActivity
        });
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "columns"
      }, this.props.next.map(function (activeActivity) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_activeActivitiesCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
          key: activeActivity,
          activity: activeActivity
        });
      })));
    }
  }]);

  return ActiveActivities;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.9396d89d32aa7b08bad3.hot-update.js.map