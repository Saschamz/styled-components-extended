import { Dimensions } from 'react-native'
import { css } from 'styled-components'
import { CircleViewProps, TextKitProps, ViewKitProps } from './types'

export const centered = css`
  justify-content: center;
  align-items: center;
`

export const screenHeight = css`
  height: ${Dimensions.get('screen').height};
`

export const screenWidth = css`
  height: ${Dimensions.get('screen').width};
`

export const screenSize = css`
  ${screenHeight};
  ${screenWidth};
`

export const topAbsolute = css`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`

export const bottomAbsolute = css`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`

export const overlay = css`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

export const circle = css`
  height: ${(props: CircleViewProps) => props.size || 0};
  width: ${(props: CircleViewProps) => props.size || 0};
  border-radius: ${(props: CircleViewProps) => props.size / 2 || 0};
`

export const textBase = css`
  ${(props: TextKitProps) => props.centered && 'text-align: center'}
  ${(props: TextKitProps) => props.alignRight && 'text-align: right'}
  ${(props: TextKitProps) => props.alignLeft && 'text-align: left'}
  ${(props: TextKitProps) => props.capitalize && 'text-transform: capitalize'}
  ${(props: TextKitProps) => props.uppercase && 'text-transform: uppercase'}
  ${(props: TextKitProps) => props.lowercase && 'text-transform: lowercase'}
  ${(props: TextKitProps) =>
    props.verticalMargin && `margin: ${props.verticalMargin}px 0`}
  ${(props: TextKitProps) =>
    props.marginTop && `margin-top: ${props.marginTop}`}
  ${(props: TextKitProps) =>
    props.horizontalMargin && `margin: 0 ${props.horizontalMargin}px`}
  ${(props: TextKitProps) =>
    props.marginBottom && `margin-bottom: ${props.marginBottom}`}
  ${(props: TextKitProps) =>
    props.fontWeight && `font-weight: ${props.fontWeight}`}
  ${(props: TextKitProps) => props.fontSize && `font-size: ${props.fontSize}`}
  ${(props: TextKitProps) => props.color && `color: ${props.color}`}
  ${(props: TextKitProps) => props.zIndex && `z-index: ${props.zIndex}`}
`

export const viewBase = css`
  ${(props: ViewKitProps) => props.height && `height: ${props.height}`}
  ${(props: ViewKitProps) => props.width && `width: ${props.width}`}
  ${(props: ViewKitProps) => props.color && `background-color: ${props.color}`}
  ${(props: ViewKitProps) => props.margin && `margin: ${props.margin}px`}
  ${(props: ViewKitProps) => props.padding && `padding: ${props.padding}px`}
  ${(props: ViewKitProps) => props.relative && `position: relative`}
  ${(props: ViewKitProps) => props.absolute && `position: absolute`}
  ${(props: ViewKitProps) =>
    props.verticalMargin && `margin: ${props.verticalMargin}px 0`}
  ${(props: ViewKitProps) =>
    props.horizontalMargin && `margin: 0 ${props.horizontalMargin}px`}
  ${(props: ViewKitProps) =>
    props.marginTop && `margin-top: ${props.marginTop}`}
  ${(props: ViewKitProps) =>
    props.marginBottom && `margin-bottom: ${props.marginBottom}`}
  ${(props: ViewKitProps) =>
    props.marginLeft && `margin-left: ${props.marginLeft}`}
  ${(props: ViewKitProps) =>
    props.marginRight && `margin-right: ${props.marginRight}`}
  ${(props: ViewKitProps) => props.zIndex && `z-index: ${props.zIndex}`}
  ${(props: ViewKitProps) => props.overflowHidden && 'overflow: hidden'}
`
