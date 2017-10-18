'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require('react'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _classnames = _interopRequireDefault(require('classnames'));

require('./index.scss');

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _jsxFileName = 'src/index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (_typeof(call) === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass)); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * Created by David Feng<sublime3@163.com>.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * ComponentName Toast
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * Desc toast 提示
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * GroupName water-wheel
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  */

var DEFAULT_DURATION = 3000;
var NOOP = function NOOP(args) {
    return args;
};

/**
 * @class Toast
 * @extends React.Component
 * @desc Toast Component for mobile
 */

var Toast = function (_Component) {
    _inherits(Toast, _Component);

    /**
     * @constructor
     */
    function Toast(props) {
        _classCallCheck(this, Toast);

        var _this = _possibleConstructorReturn(this, (Toast.__proto__ || Object.getPrototypeOf(Toast)).call(this, props));

        _this.openTimer = undefined;
        return _this;
    }

    _createClass(Toast, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.open && this.setHideTimer();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            this.props.open && this.setHideTimer();
        }
    }, {
        key: 'setHideTimer',
        value: function setHideTimer() {
            var _props = this.props,
                duration = _props.duration,
                onRequestClose = _props.onRequestClose;


            this.openTimer && clearTimeout(this.openTimer);
            this.openTimer = setTimeout(onRequestClose, duration);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.openTimer && clearTimeout(this.openTimer);
        }
    }, {
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                open = _props2.open,
                content = _props2.content,
                styles = _props2.styles;


            var modelClass = open ? "lm-ui-model" : "lm-ui-model hide-model";

            return _react.default.createElement(
                'div',
                _defineProperty({ className: modelClass, style: styles || {}, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 87
                    },
                    __self: this
                }, '__self', this),
                open ? _react.default.createElement(
                    'div',
                    _defineProperty({ className: 'lm-ui-toast toast-text-content', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 91
                        },
                        __self: this
                    }, '__self', this),
                    _react.default.createElement(
                        'p',
                        _defineProperty({
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 92
                            },
                            __self: this
                        }, '__self', this),
                        content
                    )
                ) : null
            );
        }
    }]);

    return Toast;
}(_react.Component);

Toast.propTypes = {
    /**
     * 开关
     */
    open: _propTypes.default.bool.isRequired,
    /**
     * 主内容
     */
    content: _propTypes.default.string.isRequired,
    /**
     * 请求关闭回调
     */
    onRequestClose: _propTypes.default.func.isRequired,
    /**
     * 展示时间
     */
    duration: _propTypes.default.number,
    /**
    * 自定义属性
    */
    styles: _propTypes.default.object
};
Toast.defaultProps = {
    duration: DEFAULT_DURATION,
    onRequestClose: NOOP,
    styles: {}
};
var _default = Toast;
exports.default = _default;
module.exports = exports['default'];