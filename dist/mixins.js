"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var react_native_1 = require("react-native");
exports.centered = styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  justify-content: center;\n  align-items: center;\n"], ["\n  justify-content: center;\n  align-items: center;\n"])));
exports.screenHeight = styled_components_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  height: ", ";\n"], ["\n  height: ", ";\n"])), react_native_1.Dimensions.get('screen').height);
exports.screenWidth = styled_components_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  height: ", ";\n"], ["\n  height: ", ";\n"])), react_native_1.Dimensions.get('screen').width);
exports.screenSize = styled_components_1.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  ", ";\n  ", ";\n"], ["\n  ", ";\n  ", ";\n"])), exports.screenHeight, exports.screenWidth);
exports.topAbsolute = styled_components_1.css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n"])));
exports.bottomAbsolute = styled_components_1.css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n"], ["\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
