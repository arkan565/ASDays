webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./node_modules/string-hash/index.js":
/*!*******************************************!*\
  !*** ./node_modules/string-hash/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!********************************************************!*\
  !*** ./node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/

var isProd = process.env && "development" === 'production';
var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet = function () {
  function StyleSheet() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$name = _ref.name,
        name = _ref$name === undefined ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === undefined ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === undefined ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheet);

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = '#' + name + '-deleted-rule____{}';

    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;

    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;

    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  _createClass(StyleSheet, [{
    key: 'setOptimizeForSpeed',
    value: function setOptimizeForSpeed(bool) {
      invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');

      invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
      this.flush();
      this._optimizeForSpeed = bool;
      this.inject();
    }
  }, {
    key: 'isOptimizeForSpeed',
    value: function isOptimizeForSpeed() {
      return this._optimizeForSpeed;
    }
  }, {
    key: 'inject',
    value: function inject() {
      var _this = this;

      invariant(!this._injected, 'sheet already injected');
      this._injected = true;
      if (this._isBrowser && this._optimizeForSpeed) {
        this._tags[0] = this.makeStyleTag(this._name);
        this._optimizeForSpeed = 'insertRule' in this.getSheet();
        if (!this._optimizeForSpeed) {
          if (!isProd) {
            console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.'); // eslint-disable-line no-console
          }
          this.flush();
          this._injected = true;
        }
        return;
      }

      this._serverSheet = {
        cssRules: [],
        insertRule: function insertRule(rule, index) {
          if (typeof index === 'number') {
            _this._serverSheet.cssRules[index] = { cssText: rule };
          } else {
            _this._serverSheet.cssRules.push({ cssText: rule });
          }
          return index;
        },
        deleteRule: function deleteRule(index) {
          _this._serverSheet.cssRules[index] = null;
        }
      };
    }
  }, {
    key: 'getSheetForTag',
    value: function getSheetForTag(tag) {
      if (tag.sheet) {
        return tag.sheet;
      }

      // this weirdness brought to you by firefox
      for (var i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].ownerNode === tag) {
          return document.styleSheets[i];
        }
      }
    }
  }, {
    key: 'getSheet',
    value: function getSheet() {
      return this.getSheetForTag(this._tags[this._tags.length - 1]);
    }
  }, {
    key: 'insertRule',
    value: function insertRule(rule, index) {
      invariant(isString(rule), '`insertRule` accepts only strings');

      if (!this._isBrowser) {
        if (typeof index !== 'number') {
          index = this._serverSheet.cssRules.length;
        }
        this._serverSheet.insertRule(rule, index);
        return this._rulesCount++;
      }

      if (this._optimizeForSpeed) {
        var sheet = this.getSheet();
        if (typeof index !== 'number') {
          index = sheet.cssRules.length;
        }
        // this weirdness for perf, and chrome's weird bug
        // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule
        try {
          sheet.insertRule(rule, index);
        } catch (err) {
          if (!isProd) {
            console.warn('StyleSheet: illegal rule: \n\n' + rule + '\n\nSee https://stackoverflow.com/q/20007992 for more info'); // eslint-disable-line no-console
          }
          return -1;
        }
      } else {
        var insertionPoint = this._tags[index];
        this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
      }

      return this._rulesCount++;
    }
  }, {
    key: 'replaceRule',
    value: function replaceRule(index, rule) {
      if (this._optimizeForSpeed || !this._isBrowser) {
        var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;
        if (!rule.trim()) {
          rule = this._deletedRulePlaceholder;
        }

        if (!sheet.cssRules[index]) {
          // @TBD Should we throw an error?
          return index;
        }

        sheet.deleteRule(index);

        try {
          sheet.insertRule(rule, index);
        } catch (err) {
          if (!isProd) {
            console.warn('StyleSheet: illegal rule: \n\n' + rule + '\n\nSee https://stackoverflow.com/q/20007992 for more info'); // eslint-disable-line no-console
          }
          // In order to preserve the indices we insert a deleteRulePlaceholder
          sheet.insertRule(this._deletedRulePlaceholder, index);
        }
      } else {
        var tag = this._tags[index];
        invariant(tag, 'old rule at index `' + index + '` not found');
        tag.textContent = rule;
      }
      return index;
    }
  }, {
    key: 'deleteRule',
    value: function deleteRule(index) {
      if (!this._isBrowser) {
        this._serverSheet.deleteRule(index);
        return;
      }

      if (this._optimizeForSpeed) {
        this.replaceRule(index, '');
      } else {
        var tag = this._tags[index];
        invariant(tag, 'rule at index `' + index + '` not found');
        tag.parentNode.removeChild(tag);
        this._tags[index] = null;
      }
    }
  }, {
    key: 'flush',
    value: function flush() {
      this._injected = false;
      this._rulesCount = 0;
      if (this._isBrowser) {
        this._tags.forEach(function (tag) {
          return tag && tag.parentNode.removeChild(tag);
        });
        this._tags = [];
      } else {
        // simpler on server
        this._serverSheet.cssRules = [];
      }
    }
  }, {
    key: 'cssRules',
    value: function cssRules() {
      var _this2 = this;

      if (!this._isBrowser) {
        return this._serverSheet.cssRules;
      }
      return this._tags.reduce(function (rules, tag) {
        if (tag) {
          rules = rules.concat(_this2.getSheetForTag(tag).cssRules.map(function (rule) {
            return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
          }));
        } else {
          rules.push(null);
        }
        return rules;
      }, []);
    }
  }, {
    key: 'makeStyleTag',
    value: function makeStyleTag(name, cssString, relativeToTag) {
      if (cssString) {
        invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
      }
      var tag = document.createElement('style');
      if (this._nonce) tag.setAttribute('nonce', this._nonce);
      tag.type = 'text/css';
      tag.setAttribute('data-' + name, '');
      if (cssString) {
        tag.appendChild(document.createTextNode(cssString));
      }
      var head = document.head || document.getElementsByTagName('head')[0];
      if (relativeToTag) {
        head.insertBefore(tag, relativeToTag);
      } else {
        head.appendChild(tag);
      }
      return tag;
    }
  }, {
    key: 'length',
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports.default = StyleSheet;


function invariant(condition, message) {
  if (!condition) {
    throw new Error('StyleSheet: ' + message + '.');
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/*!***********************************************!*\
  !*** ./node_modules/styled-jsx/dist/style.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.flush = flush;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _stylesheetRegistry = __webpack_require__(/*! ./stylesheet-registry */ "./node_modules/styled-jsx/dist/stylesheet-registry.js");

var _stylesheetRegistry2 = _interopRequireDefault(_stylesheetRegistry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styleSheetRegistry = new _stylesheetRegistry2.default();

var JSXStyle = function (_Component) {
  _inherits(JSXStyle, _Component);

  function JSXStyle(props) {
    _classCallCheck(this, JSXStyle);

    var _this = _possibleConstructorReturn(this, (JSXStyle.__proto__ || Object.getPrototypeOf(JSXStyle)).call(this, props));

    _this.prevProps = {};
    return _this;
  }

  _createClass(JSXStyle, [{
    key: 'shouldComponentUpdate',


    // probably faster than PureComponent (shallowEqual)
    value: function shouldComponentUpdate(otherProps) {
      return this.props.styleId !== otherProps.styleId ||
      // We do this check because `dynamic` is an array of strings or undefined.
      // These are the computed values for dynamic styles.
      String(this.props.dynamic) !== String(otherProps.dynamic);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      styleSheetRegistry.remove(this.props);
    }
  }, {
    key: 'render',
    value: function render() {
      // This is a workaround to make the side effect async safe in the "render" phase.
      // See https://github.com/zeit/styled-jsx/pull/484
      if (this.shouldComponentUpdate(this.prevProps)) {
        // Updates
        if (this.prevProps.styleId) {
          styleSheetRegistry.remove(this.prevProps);
        }
        styleSheetRegistry.add(this.props);
        this.prevProps = this.props;
      }
      return null;
    }
  }], [{
    key: 'dynamic',
    value: function dynamic(info) {
      return info.map(function (tagInfo) {
        var baseId = tagInfo[0];
        var props = tagInfo[1];
        return styleSheetRegistry.computeId(baseId, props);
      }).join(' ');
    }
  }]);

  return JSXStyle;
}(_react.Component);

exports.default = JSXStyle;
function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!*************************************************************!*\
  !*** ./node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _stringHash = __webpack_require__(/*! string-hash */ "./node_modules/string-hash/index.js");

var _stringHash2 = _interopRequireDefault(_stringHash);

var _stylesheet = __webpack_require__(/*! ./lib/stylesheet */ "./node_modules/styled-jsx/dist/lib/stylesheet.js");

var _stylesheet2 = _interopRequireDefault(_stylesheet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry = function () {
  function StyleSheetRegistry() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === undefined ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === undefined ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === undefined ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheetRegistry);

    this._sheet = styleSheet || new _stylesheet2.default({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();
    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);
      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;

    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};

    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  _createClass(StyleSheetRegistry, [{
    key: 'add',
    value: function add(props) {
      var _this = this;

      if (undefined === this._optimizeForSpeed) {
        this._optimizeForSpeed = Array.isArray(props.css);
        this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);
        this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
      }

      if (this._isBrowser && !this._fromServer) {
        this._fromServer = this.selectFromServer();
        this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
          acc[tagName] = 0;
          return acc;
        }, {});
      }

      var _getIdAndRules = this.getIdAndRules(props),
          styleId = _getIdAndRules.styleId,
          rules = _getIdAndRules.rules;

      // Deduping: just increase the instances count.


      if (styleId in this._instancesCounts) {
        this._instancesCounts[styleId] += 1;
        return;
      }

      var indices = rules.map(function (rule) {
        return _this._sheet.insertRule(rule);
      })
      // Filter out invalid rules
      .filter(function (index) {
        return index !== -1;
      });

      this._indices[styleId] = indices;
      this._instancesCounts[styleId] = 1;
    }
  }, {
    key: 'remove',
    value: function remove(props) {
      var _this2 = this;

      var _getIdAndRules2 = this.getIdAndRules(props),
          styleId = _getIdAndRules2.styleId;

      invariant(styleId in this._instancesCounts, 'styleId: `' + styleId + '` not found');
      this._instancesCounts[styleId] -= 1;

      if (this._instancesCounts[styleId] < 1) {
        var tagFromServer = this._fromServer && this._fromServer[styleId];
        if (tagFromServer) {
          tagFromServer.parentNode.removeChild(tagFromServer);
          delete this._fromServer[styleId];
        } else {
          this._indices[styleId].forEach(function (index) {
            return _this2._sheet.deleteRule(index);
          });
          delete this._indices[styleId];
        }
        delete this._instancesCounts[styleId];
      }
    }
  }, {
    key: 'update',
    value: function update(props, nextProps) {
      this.add(nextProps);
      this.remove(props);
    }
  }, {
    key: 'flush',
    value: function flush() {
      this._sheet.flush();
      this._sheet.inject();
      this._fromServer = undefined;
      this._indices = {};
      this._instancesCounts = {};

      this.computeId = this.createComputeId();
      this.computeSelector = this.createComputeSelector();
    }
  }, {
    key: 'cssRules',
    value: function cssRules() {
      var _this3 = this;

      var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
        return [styleId, _this3._fromServer[styleId]];
      }) : [];
      var cssRules = this._sheet.cssRules();

      return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
        return [styleId, _this3._indices[styleId].map(function (index) {
          return cssRules[index].cssText;
        }).join('\n')];
      })
      // filter out empty rules
      .filter(function (rule) {
        return Boolean(rule[1]);
      }));
    }

    /**
     * createComputeId
     *
     * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
     */

  }, {
    key: 'createComputeId',
    value: function createComputeId() {
      var cache = {};
      return function (baseId, props) {
        if (!props) {
          return 'jsx-' + baseId;
        }
        var propsToString = String(props);
        var key = baseId + propsToString;
        // return `jsx-${hashString(`${baseId}-${propsToString}`)}`
        if (!cache[key]) {
          cache[key] = 'jsx-' + (0, _stringHash2.default)(baseId + '-' + propsToString);
        }
        return cache[key];
      };
    }

    /**
     * createComputeSelector
     *
     * Creates a function to compute and memoize dynamic selectors.
     */

  }, {
    key: 'createComputeSelector',
    value: function createComputeSelector() {
      var selectoPlaceholderRegexp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /__jsx-style-dynamic-selector/g;

      var cache = {};
      return function (id, css) {
        // Sanitize SSR-ed CSS.
        // Client side code doesn't need to be sanitized since we use
        // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
        if (!this._isBrowser) {
          css = sanitize(css);
        }
        var idcss = id + css;
        if (!cache[idcss]) {
          cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
        }
        return cache[idcss];
      };
    }
  }, {
    key: 'getIdAndRules',
    value: function getIdAndRules(props) {
      var _this4 = this;

      if (props.dynamic) {
        var styleId = this.computeId(props.styleId, props.dynamic);
        return {
          styleId: styleId,
          rules: Array.isArray(props.css) ? props.css.map(function (rule) {
            return _this4.computeSelector(styleId, rule);
          }) : [this.computeSelector(styleId, props.css)]
        };
      }

      return {
        styleId: this.computeId(props.styleId),
        rules: Array.isArray(props.css) ? props.css : [props.css]
      };
    }

    /**
     * selectFromServer
     *
     * Collects style tags from the document with id __jsx-XXX
     */

  }, {
    key: 'selectFromServer',
    value: function selectFromServer() {
      var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));

      return elements.reduce(function (acc, element) {
        var id = element.id.slice(2);
        acc[id] = element;
        return acc;
      }, {});
    }
  }]);

  return StyleSheetRegistry;
}();

exports.default = StyleSheetRegistry;


function invariant(condition, message) {
  if (!condition) {
    throw new Error('StyleSheetRegistry: ' + message + '.');
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/*!******************************************!*\
  !*** ./node_modules/styled-jsx/style.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/style */ "./node_modules/styled-jsx/dist/style.js")


/***/ }),

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

      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-2482502158" + " " + "container"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        styleId: "2482502158",
        css: "{-webkit-this.style;-ms-flex-this.style;this.style;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxkb2N1bWVudG9zXFxwcm9ncmFtYWNpb25cXEFTRGF5c1xccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStKaUIsQUFHZ0Isa0RBQUMiLCJmaWxlIjoiRDpcXGRvY3VtZW50b3NcXHByb2dyYW1hY2lvblxcQVNEYXlzXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgJ2J1bG1hL2Nzcy9idWxtYS5jc3MnO1xyXG5pbXBvcnQgTGVmdFBhbmVsIGZyb20gJy4uL2NvbXBvbmVudHMvbGVmdFBhbmVsJztcclxuaW1wb3J0IEFjdGl2ZUFjdGl2aXRpZXMgZnJvbSAnLi4vY29tcG9uZW50cy9hY3RpdmVBY3Rpdml0aWVzJ1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkgeyAvL2Nob29zZSBiZWV0d2VlbiBwcm9kdWN0aW9uIGhvc3Qgb3IgZGV2ZWxvcG1lbnQgaG9zdFxyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvZGF5YCk7XHJcbiAgICAgICAgbGV0IGRheSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgICAgY29uc3QgcmVzMiA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvY29uZmlnYCk7XHJcbiAgICAgICAgY29uc3QgY29uZmlnID0gYXdhaXQgcmVzMi5qc29uKCk7XHJcbiAgICAgICAgLy9kYXkuYWN0aXZpdGllcz0gZGF5LmFjdGl2aXRpZXMuZmlsdGVyKGRheXM9PmRheXMuc3RhcnRUaW1lPmAke2NvbmZpZy5zdGFydFRpbWUudmFsdWV9OjAwYCk7XHJcbiAgICAgICAgLy9kYXkuYWN0aXZpdGllcyA9IGRheS5hY3Rpdml0aWVzLmZpbHRlcihkYXlzID0+IGRheXMuc3RhcnRUaW1lIDwgYCR7Y29uZmlnLmZpbmlzaFRpbWUudmFsdWV9OjAwYCk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZGF5LGNvbmZpZ1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICAgICAgdGhpcy5uZXh0QWN0aXZpdGllcz1bXTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICB3aWR0aDogMCxcclxuICAgICAgICAgICAgaGVpZ2h0OiAwXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYWN0aXZlPVtdXHJcbiAgICAgICAgdGhpcy5kYXk9e1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb25maWc9e1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50aW1lb3V0PW51bGw7XHJcbiAgICB9XHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgb3JkZXJBY3Rpdml0aWVzKGRheSl7XHJcbiAgICAgICAgbGV0IGFjdGl2aXRpZXM9W107XHJcbiAgICAgICAgY29uc3QgbGVuZ3RoPWRheS5hY3Rpdml0aWVzLmxlbmd0aDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICBsZXQgbWluSSA9IDA7XHJcbiAgICAgICAgICAgIGxldCBtaW5TdGFydFRpbWUgPSBkYXkuYWN0aXZpdGllc1swXS5zdGFydFRpbWU7XHJcbiAgICAgICAgICAgIGxldCBtaW5GaW5pc2hUaW1lID0gZGF5LmFjdGl2aXRpZXNbMF0uZmluaXNoVGltZTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDE7IGogPCBkYXkuYWN0aXZpdGllcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRheS5hY3Rpdml0aWVzW2pdLnN0YXJ0VGltZTxtaW5TdGFydFRpbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBtaW5JPWo7XHJcbiAgICAgICAgICAgICAgICAgICAgbWluU3RhcnRUaW1lID0gZGF5LmFjdGl2aXRpZXNbal0uc3RhcnRUaW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbkZpbmlzaFRpbWUgPSBkYXkuYWN0aXZpdGllc1tqXS5maW5pc2hUaW1lO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkYXkuYWN0aXZpdGllc1tqXS5zdGFydFRpbWUgPT0gbWluU3RhcnRUaW1lICYmIGRheS5hY3Rpdml0aWVzW2pdLmZpbmlzaFRpbWUgPCBtaW5GaW5pc2hUaW1lKXtcclxuICAgICAgICAgICAgICAgICAgICAgbWluSSA9IGo7XHJcbiAgICAgICAgICAgICAgICAgICAgIG1pblN0YXJ0VGltZSA9IGRheS5hY3Rpdml0aWVzW2pdLnN0YXJ0VGltZTtcclxuICAgICAgICAgICAgICAgICAgICAgbWluRmluaXNoVGltZSA9IGRheS5hY3Rpdml0aWVzW2pdLmZpbmlzaFRpbWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYWN0aXZpdGllcy5wdXNoKGRheS5hY3Rpdml0aWVzW21pbkldKTtcclxuICAgICAgICAgICAgZGF5LmFjdGl2aXRpZXMuc3BsaWNlKG1pbkksMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhY3Rpdml0aWVzO1xyXG4gICAgfVxyXG4gICAgc2V0QWN0aXZlKCkge1xyXG4gICAgICAgIGxldCBkYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgICB0aGlzLnByb3BzLmRheS5hY3Rpdml0aWVzLmZvckVhY2goYWN0aXZpdHkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgc3BsaXRTdGFydERhdGUgPSBhY3Rpdml0eS5zdGFydFRpbWUuc3BsaXQoJzonKTtcclxuICAgICAgICAgICAgbGV0IHN0YXJ0SG91ciA9IHBhcnNlSW50KHNwbGl0U3RhcnREYXRlWzBdLCAxMCk7XHJcbiAgICAgICAgICAgIGxldCBzdGFydE1pbnV0ZSA9IHBhcnNlSW50KHNwbGl0U3RhcnREYXRlWzFdLCAxMCk7XHJcbiAgICAgICAgICAgIGxldCBzcGxpdEZpbmlzaERhdGUgPSBhY3Rpdml0eS5maW5pc2hUaW1lLnNwbGl0KCc6Jyk7XHJcbiAgICAgICAgICAgIGxldCBmaW5pc2hIb3VyID0gcGFyc2VJbnQoc3BsaXRGaW5pc2hEYXRlWzBdLCAxMCk7XHJcbiAgICAgICAgICAgIGxldCBmaW5pc2hNaW51dGUgPSBwYXJzZUludChzcGxpdEZpbmlzaERhdGVbMV0sIDEwKTtcclxuICAgICAgICAgICAgaWYgKChzdGFydEhvdXIgPCBkYXRlLmdldEhvdXJzKCkpIHx8IChzdGFydEhvdXIgPT0gZGF0ZS5nZXRIb3VycygpICYmIHN0YXJ0TWludXRlIDw9IGRhdGUuZ2V0TWludXRlcygpKSl7XHJcbiAgICAgICAgICAgICAgICBhY3Rpdml0eS5hY3RpdmUgPShmaW5pc2hIb3VyID4gZGF0ZS5nZXRIb3VycygpIHx8IGFjdGl2aXR5LmZpbmlzaFRpbWUgPT09IFwiMDA6MDBcIiB8fCAoZmluaXNoSG91cj09ZGF0ZS5nZXRIb3VycygpICYmIGZpbmlzaE1pbnV0ZT5kYXRlLmdldE1pbnV0ZXMoKSkpOyAvL3NldCBpZiBhY3RpdmUgaXMgZ29vZCBvciBiYWRcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBhY3Rpdml0eS5hY3RpdmU9ZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmFjdGl2ZSA9IHRoaXMucHJvcHMuZGF5LmFjdGl2aXRpZXMuZmlsdGVyKGFjdGl2aXR5ID0+IGFjdGl2aXR5LmFjdGl2ZSA9PSB0cnVlKTtcclxuICAgIH1cclxuICAgIGdldE5leHQoYWN0aXZpdGllcyl7XHJcbiAgICAgICAgbGV0IG5leHQ9IFtdO1xyXG4gICAgICAgIGxldCBkYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgICBhY3Rpdml0aWVzLm1hcCgoYWN0aXZpdHkpPT57XHJcbiAgICAgICAgICAgIGxldCBzcGxpdFN0YXJ0RGF0ZSA9IGFjdGl2aXR5LnN0YXJ0VGltZS5zcGxpdCgnOicpO1xyXG4gICAgICAgICAgICBsZXQgc3RhcnRIb3VyID0gcGFyc2VJbnQoc3BsaXRTdGFydERhdGVbMF0sIDEwKTtcclxuICAgICAgICAgICAgaWYoc3RhcnRIb3VyPj1kYXRlLmdldEhvdXJzKCkgJiYgIWFjdGl2aXR5LmFjdGl2ZSAmJiBuZXh0Lmxlbmd0aDwzKXtcclxuICAgICAgICAgICAgICAgIG5leHQucHVzaChhY3Rpdml0eSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5uZXh0QWN0aXZpdGllcz1uZXh0O1xyXG4gICAgfVxyXG4gICAgc2V0VGltZW91dCgpe1xyXG4gICAgICAgIGxldCBtaW5UaW1lPSAtMTtcclxuICAgICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFjdGl2ZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgYWN0aXZpdHk9dGhpcy5hY3RpdmVbaV07XHJcbiAgICAgICAgICAgIGxldCBzcGxpdEZpbmlzaERhdGUgPSBhY3Rpdml0eS5maW5pc2hUaW1lLnNwbGl0KCc6Jyk7XHJcbiAgICAgICAgICAgIGxldCBmaW5pc2hIb3VyID0gcGFyc2VJbnQoc3BsaXRGaW5pc2hEYXRlWzBdLCAxMCk7XHJcbiAgICAgICAgICAgIGxldCBmaW5pc2hNaW51dGVzID0gcGFyc2VJbnQoc3BsaXRGaW5pc2hEYXRlWzFdLCAxMCk7XHJcbiAgICAgICAgICAgIGxldCBzZWNvbmRzTGVmdD0gNjAtZGF0ZS5nZXRTZWNvbmRzKCkrMTtcclxuICAgICAgICAgICAgbGV0IG1pbnV0ZXMgPSAoZmluaXNoTWludXRlcyAhPSAwID8gZmluaXNoTWludXRlcyAtIGRhdGUuZ2V0TWludXRlcygpLTEgOiA2MCAtIGRhdGUuZ2V0TWludXRlcygpLTEpO1xyXG4gICAgICAgICAgICBsZXQgaG91cnMgPSAoZmluaXNoSG91ciE9MD9maW5pc2hIb3VyLWRhdGUuZ2V0SG91cnMoKS0xOjI0LWRhdGUuZ2V0SG91cnMoKS0xKTtcclxuICAgICAgICAgICAgaWYoaG91cnM8MCl7XHJcbiAgICAgICAgICAgICAgICBob3Vycz0wO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKG1pbnV0ZXM8MCl7XHJcbiAgICAgICAgICAgICAgICBtaW51dGVzPTA7ICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgdGltZWxlZnQgPSAoMzYwMCoxMDAwKmhvdXJzKSsoNjAqMTAwMCptaW51dGVzKSsoc2Vjb25kc0xlZnQqMTAwMCk7XHJcbiAgICAgICAgICAgIGlmKG1pblRpbWU9PS0xIHx8IHRpbWVsZWZ0PG1pblRpbWUpe1xyXG4gICAgICAgICAgICAgICAgbWluVGltZT10aW1lbGVmdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IobGV0IGk9MDtpPHRoaXMubmV4dEFjdGl2aXRpZXMubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIGxldCBhY3Rpdml0eT10aGlzLm5leHRBY3Rpdml0aWVzW2ldO1xyXG4gICAgICAgICAgICBsZXQgc3BsaXRTdGFydERhdGUgPSBhY3Rpdml0eS5zdGFydFRpbWUuc3BsaXQoJzonKTtcclxuICAgICAgICAgICAgbGV0IHN0YXJ0SG91ciA9IHBhcnNlSW50KHNwbGl0U3RhcnREYXRlWzBdLCAxMCk7XHJcbiAgICAgICAgICAgIGxldCBzdGFydE1pbnV0ZSA9IHBhcnNlSW50KHNwbGl0U3RhcnREYXRlWzFdLCAxMCk7XHJcbiAgICAgICAgICAgIGxldCBzZWNvbmRzTGVmdCA9IDYwIC0gZGF0ZS5nZXRTZWNvbmRzKCkgKyAxO1xyXG4gICAgICAgICAgICBsZXQgbWludXRlcyA9IChzdGFydE1pbnV0ZSAhPSAwID8gc3RhcnRNaW51dGUgLSBkYXRlLmdldE1pbnV0ZXMoKSAtIDEgOiA2MCAtIGRhdGUuZ2V0TWludXRlcygpIC0gMSk7XHJcbiAgICAgICAgICAgIGxldCBob3VycyA9IChzdGFydEhvdXIgIT0gMCA/IHN0YXJ0SG91ciAtIGRhdGUuZ2V0SG91cnMoKSAtIDEgOiAyNCAtIGRhdGUuZ2V0SG91cnMoKSAtIDEpO1xyXG4gICAgICAgICAgICBpZiAoaG91cnMgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICBob3VycyA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG1pbnV0ZXMgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICBtaW51dGVzID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgdGltZWxlZnQgPSAoMzYwMCAqIDEwMDAgKiBob3VycykgKyAoNjAgKiAxMDAwICogbWludXRlcykgKyAoc2Vjb25kc0xlZnQgKiAxMDAwKTtcclxuICAgICAgICAgICAgaWYgKG1pblRpbWUgPT0gLTEgfHwgdGltZWxlZnQgPCBtaW5UaW1lKSB7XHJcbiAgICAgICAgICAgICAgICBtaW5UaW1lID0gdGltZWxlZnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dClcclxuICAgICAgICB9IGNhdGNoIChleCkge1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYobWluVGltZSE9LTEpe1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgdGltZTogRGF0ZS5ub3coKVxyXG4gICAgICAgICAgICB9KSwgbWluVGltZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHRoaXMucHJvcHMuZGF5LmFjdGl2aXRpZXMgPSB0aGlzLm9yZGVyQWN0aXZpdGllcyh0aGlzLnByb3BzLmRheSk7XHJcbiAgICAgICAgdGhpcy5zZXRBY3RpdmUoKTtcclxuICAgICAgICB0aGlzLmdldE5leHQodGhpcy5wcm9wcy5kYXkuYWN0aXZpdGllcyk7XHJcbiAgICAgICAgdGhpcy5zZXRUaW1lb3V0KCk7XHJcbiAgICAgICAgaWYodGhpcy5wcm9wcy5jb25maWcubGF5b3V0LmJhY2tncm91bmQpe1xyXG4gICAgICAgICAgICB0aGlzLnN0eWxlID0ge2JvZHk6e2JhY2tncm91bmQ6dGhpcy5wcm9wcy5jb25maWcubGF5b3V0LmJhY2tncm91bmR9fVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLnN0eWxlID0ge31cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3R5bGVcclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPkRheSBQYW5lbDwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luQm90dG9tOlwiNXZoXCIsdGV4dEFsaWduOlwiY2VudGVyXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGUgaXMtMVwiPlNjaGVkdWxlPC9oMT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJjb2x1bW4gaXMtb25lLXRoaXJkXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGVmdFBhbmVsIGNvbmZpZz17dGhpcy5wcm9wcy5jb25maWd9IGFjdGl2aXRpZXM9e3RoaXMucHJvcHMuZGF5LmFjdGl2aXRpZXM/dGhpcy5wcm9wcy5kYXkuYWN0aXZpdGllczpcIlwifT48L0xlZnRQYW5lbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiY29sdW1uIGlzLXR3by10aGlyZHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17dGhpcy5zdGF0ZS53aWR0aD44MDA/e3Bvc2l0aW9uOlwiZml4ZWRcIix3aWR0aDpcIjYwdndcIn06e319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjdGl2ZUFjdGl2aXRpZXMgY29uZmlnPXt0aGlzLnByb3BzLmNvbmZpZ30gYWN0aXZlPXt0aGlzLmFjdGl2ZX0gbmV4dD17dGhpcy5uZXh0QWN0aXZpdGllc30+PC9BY3RpdmVBY3Rpdml0aWVzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn0iXX0= */\n/*@ sourceURL=D:\\documentos\\programacion\\ASDays\\pages\\index.js */"
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("title", {
        className: "jsx-2482502158"
      }, "Day Panel"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: {
          marginBottom: "5vh",
          textAlign: "center"
        },
        className: "jsx-2482502158"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
        className: "jsx-2482502158" + " " + "title is-1"
      }, "Schedule")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-2482502158" + " " + "columns"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-2482502158" + " " + "column is-one-third"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_leftPanel__WEBPACK_IMPORTED_MODULE_4__["default"], {
        config: this.props.config,
        activities: this.props.day.activities ? this.props.day.activities : ""
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-2482502158" + " " + "column is-two-thirds"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: this.state.width > 800 ? {
          position: "fixed",
          width: "60vw"
        } : {},
        className: "jsx-2482502158"
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
//# sourceMappingURL=index.js.91cb5448d03af32307f9.hot-update.js.map