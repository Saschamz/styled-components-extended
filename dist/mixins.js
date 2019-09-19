"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const styled_components_1 = require("styled-components");
exports.centered = styled_components_1.css `
  justify-content: center;
  align-items: center;
`;
exports.screenHeight = styled_components_1.css `
  height: ${react_native_1.Dimensions.get('screen').height};
`;
exports.screenWidth = styled_components_1.css `
  height: ${react_native_1.Dimensions.get('screen').width};
`;
exports.screenSize = styled_components_1.css `
  ${exports.screenHeight};
  ${exports.screenWidth};
`;
exports.topAbsolute = styled_components_1.css `
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;
exports.bottomAbsolute = styled_components_1.css `
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;
