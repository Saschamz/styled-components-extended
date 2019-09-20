import { TextProps } from "react-native"

export type TextKitProps = {
  centered?: boolean
  capitalize?: boolean
  alignLeft?: boolean
  alignRight?: boolean
  uppercase?: boolean
  lowercase?: boolean
  verticalMargin?: number
  fontWeight?: number
  fontSize?: number
  color?: string
  zIndex?: number
  marginTop?: number
  marginBottom?: number
} 

export type ViewKitProps = {
  verticalMargin?: number
  horizontalMargin?: number
  width?: number
  height?: number
  padding?: number
  margin?: number
  marginTop?: number
  marginBottom?: number
  marginLeft?: number
  marginRight?: number
  color?: string
  zIndex?: number
}

export type FlexRowProps = {
  spaceBetween?: boolean
  spaceAround?: boolean
  spaceEvenly?: boolean
  centered?: boolean
}

export type CircleViewProps = {
  size: number
  color?: string
}

export type WhitespaceProps = {
  space: number
}
