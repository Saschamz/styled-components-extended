"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var native_1 = require("styled-components/native");
var mixins = require("./mixins");
exports.Text = native_1.default.Text(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  ", "\n  ", "\n  ", "\n  ", "\n  ",
    "\n  ",
    "\n  ", "\n"])), function (props) { return props.centered && "text-align: center"; }, function (props) { return props.capitalize && "text-transform: capitalize"; }, function (props) { return props.uppercase && "text-transform: uppercase"; }, function (props) { return props.lowercase && "text-transform: lowercase"; }, function (props) {
    return props.verticalMargin && "margin: " + props.verticalMargin + "px 0";
}, function (props) {
    return props.fontWeight && "font-weight: " + props.fontWeight;
}, function (props) { return props.fontSize && "font-size: " + props.fontSize; });
function addBaseCssToText(css) {
    exports.Text = native_1.default(exports.Text)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    ", "\n  "], ["\n    ", "\n  "])), css);
}
exports.addBaseCssToText = addBaseCssToText;
exports.View = native_1.default.View(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  ",
    "\n  ",
    "\n  ",
    "\n  ",
    "\n  ",
    "\n  ",
    "\n"])), function (props) {
    return props.verticalMargin && "margin: " + props.verticalMargin + "px 0";
}, function (props) {
    return props.horizontalMargin && "margin: 0 " + props.verticalMargin + "px";
}, function (props) {
    return props.marginTop && "margin-top: " + props.marginTop;
}, function (props) {
    return props.marginBottom && "margin-bottom: " + props.marginBottom;
}, function (props) {
    return props.marginLeft && "margin-left: " + props.marginLeft;
}, function (props) {
    return props.marginRight && "margin-left: " + props.marginRight;
});
function addBaseCssToView(css) {
    exports.View = native_1.default(exports.View)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    ", "\n  "], ["\n    ", "\n  "])), css);
}
exports.addBaseCssToView = addBaseCssToView;
exports.CenteredView = native_1.default(exports.View)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  ", ";\n"], ["\n  ", ";\n"])), mixins.centered);
exports.CenteredFillView = native_1.default(exports.View)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  flex: 1;\n  ", ";\n"], ["\n  flex: 1;\n  ", ";\n"])), mixins.centered);
exports.FlexRow = native_1.default(exports.View)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  flex-direction: row;\n  align-items: center;\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  flex-direction: row;\n  align-items: center;\n  ",
    "\n  ",
    "\n  ",
    "\n  ", "\n"])), function (props) {
    return props.spaceBetween && 'justify-content: space-between';
}, function (props) {
    return props.spaceAround && 'justify-content: space-around';
}, function (props) {
    return props.spaceEvenly && 'justify-content: space-evenly';
}, function (props) { return props.centered && 'justify-content: center'; });
exports.AlignEndView = native_1.default.View(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  align-items: flex-end;\n"], ["\n  align-items: flex-end;\n"])));
exports.Whitespace = native_1.default(exports.View)(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  height: ", ";\n"], ["\n  height: ", ";\n"])), function (props) { return props.space || 0; });
exports.CircleView = native_1.default(exports.View)(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  height: ", ";\n  width: ", ";\n  border-radius: ", ";\n  ", ";\n  ", "\n"], ["\n  height: ", ";\n  width: ", ";\n  border-radius: ", ";\n  ", ";\n  ",
    "\n"])), function (props) { return props.size || 0; }, function (props) { return props.size || 0; }, function (props) { return props.size / 2 || 0; }, mixins.centered, function (props) {
    return props.color && "background-color: " + props.color + ";";
});
exports.BottomAbsoluteContainer = native_1.default(exports.View)(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  ", ";\n"], ["\n  ", ";\n"])), mixins.bottomAbsolute);
exports.TopAbsoluteContainer = native_1.default(exports.View)(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  ", ";\n"], ["\n  ", ";\n"])), mixins.topAbsolute);
exports.FillView = native_1.default(exports.View)(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n  flex: 1;\n"], ["\n  flex: 1;\n"])));
exports.default = FullScreenView = native_1.default(exports.View)(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n  ", ";\n"], ["\n  ", ";\n"])), mixins.screenSize);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14;
