"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _types = require("../types");

var _default = function _default(state, action) {
  switch (action.type) {
    case _types.SET_ALERT:
      return action.payload;

    case _types.REMOVE_ALERT:
      return null;

    default:
      return state;
  }
};

exports["default"] = _default;