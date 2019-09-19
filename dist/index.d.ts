import * as cssKit from './mixins'
import {
  AlignEndView,
  BottomAbsoluteContainer,
  CenteredFillView,
  CenteredView,
  CircleView,
  CircleViewProps,
  FillView,
  FlexRow,
  FlexRowProps,
  FullScreenView,
  Text,
  TextKitProps,
  TopAbsoluteContainer,
  View,
  ViewKitProps,
  Whitespace,
  WhitespaceProps,
  addBaseCssToText,
  addBaseCssToView
} from './styled'

declare module 'styled-native-kit' {
  export {
    cssKit,
    AlignEndView,
    BottomAbsoluteContainer,
    CenteredFillView,
    CenteredView,
    CircleView,
    CircleViewProps,
    FillView,
    FlexRow,
    FlexRowProps,
    FullScreenView,
    Text,
    TextKitProps,
    TopAbsoluteContainer,
    View,
    ViewKitProps,
    Whitespace,
    WhitespaceProps,
    addBaseCssToText,
    addBaseCssToView
  }
}
