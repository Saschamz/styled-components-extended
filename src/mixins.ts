import { css } from 'styled-components'
import { Dimensions } from 'react-native'

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
