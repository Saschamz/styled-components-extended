import { TextProps, ViewProps } from 'react-native'

export type BaseProps = {
  marginTop?: number
  marginBottom?: number
  zIndex?: number
  color?: string
  verticalMargin?: number
  horizontalMargin?: number
}

export type TextKitProps = {
  centered?: boolean
  capitalize?: boolean
  alignLeft?: boolean
  alignRight?: boolean
  uppercase?: boolean
  lowercase?: boolean
  fontWeight?: number
  fontSize?: number
} & BaseProps &
  TextProps

export type ViewKitProps = {
  width?: number
  height?: number
  padding?: number
  margin?: number
  marginLeft?: number
  marginRight?: number
  relative?: boolean
  absolute?: boolean
} & BaseProps &
  ViewProps

export type FlexRowProps = {
  spaceBetween?: boolean
  spaceAround?: boolean
  spaceEvenly?: boolean
  centered?: boolean
} & ViewKitProps

export type CircleViewProps = {
  size: number
  color: string
} & ViewKitProps

export type WhitespaceProps = {
  space: number
} & ViewKitProps

export type SpacingProps = {
  multiplier?: number
  base?: number
  horizontal?: boolean
} & ViewKitProps
