"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _types = require("../types");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var githubRedcuer = function githubRedcuer(props) {};

var _default = function _default(state, action) {
  switch (action.type) {
    case _types.SET_LOADING:
      return _objectSpread({}, state, {
        loading: true
      });

    case _types.CLEAR_USERS:
      return _objectSpread({}, state, {
        users: [],
        loading: false
      });

    case _types.GET_USER:
      return _objectSpread({}, state, {
        user: action.payload,
        loading: false
      });

    case _types.SEARCH_USERS:
      return _objectSpread({}, state, {
        users: action.payload,
        loading: false
      });

    default:
      return state;
  }
};

exports["default"] = _default;