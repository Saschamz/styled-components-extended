"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const native_1 = __importDefault(require("styled-components/native"));
const mixins = __importStar(require("./mixins"));
exports.Text = native_1.default.Text `
  ${(props) => props.centered && `text-align: center`}
  ${(props) => props.capitalize && `text-transform: capitalize`}
  ${(props) => props.uppercase && `text-transform: uppercase`}
  ${(props) => props.lowercase && `text-transform: lowercase`}
  ${(props) => props.verticalMargin && `margin: ${props.verticalMargin}px 0`}
  ${(props) => props.fontWeight && `font-weight: ${props.fontWeight}`}
  ${(props) => props.fontSize && `font-size: ${props.fontSize}`}
`;
function addBaseCssToText(css) {
    exports.Text = native_1.default(exports.Text) `
    ${css}
  `;
}
exports.addBaseCssToText = addBaseCssToText;
exports.View = native_1.default.View `
  ${(props) => props.verticalMargin && `margin: ${props.verticalMargin}px 0`}
  ${(props) => props.horizontalMargin && `margin: 0 ${props.verticalMargin}px`}
  ${(props) => props.marginTop && `margin-top: ${props.marginTop}`}
  ${(props) => props.marginBottom && `margin-bottom: ${props.marginBottom}`}
  ${(props) => props.marginLeft && `margin-left: ${props.marginLeft}`}
  ${(props) => props.marginRight && `margin-left: ${props.marginRight}`}
`;
function addBaseCssToView(css) {
    exports.View = native_1.default(exports.View) `
    ${css}
  `;
}
exports.addBaseCssToView = addBaseCssToView;
exports.CenteredView = native_1.default(exports.View) `
  ${mixins.centered};
`;
exports.CenteredFillView = native_1.default(exports.View) `
  flex: 1;
  ${mixins.centered};
`;
exports.FlexRow = native_1.default(exports.View) `
  flex-direction: row;
  align-items: center;
  ${(props) => props.spaceBetween && 'justify-content: space-between'}
  ${(props) => props.spaceAround && 'justify-content: space-around'}
  ${(props) => props.spaceEvenly && 'justify-content: space-evenly'}
  ${(props) => props.centered && 'justify-content: center'}
`;
exports.AlignEndView = native_1.default.View `
  align-items: flex-end;
`;
exports.Whitespace = native_1.default(exports.View) `
  height: ${(props) => props.space || 0};
`;
exports.CircleView = native_1.default(exports.View) `
  height: ${(props) => props.size || 0};
  width: ${(props) => props.size || 0};
  border-radius: ${(props) => props.size / 2 || 0};
  ${mixins.centered};
  ${(props) => props.color && `background-color: ${props.color};`}
`;
exports.BottomAbsoluteContainer = native_1.default(exports.View) `
  ${mixins.bottomAbsolute};
`;
exports.TopAbsoluteContainer = native_1.default(exports.View) `
  ${mixins.topAbsolute};
`;
exports.FillView = native_1.default(exports.View) `
  flex: 1;
`;
exports.FullScreenView = native_1.default(exports.View) `
  ${mixins.screenSize};
`;
