import { Dimensions } from 'react-native'
import { css } from 'styled-components'
import { CircleViewProps } from './types'

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
