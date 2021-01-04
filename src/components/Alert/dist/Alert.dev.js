"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Alert = function Alert(_ref) {
  var alert = _ref.alert;
  return alert == null && setTimeout(function () {
    alert = null;
  }, 3000);
};

var _default = Alert;
exports["default"] = _default;