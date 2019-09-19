import styled from 'styled-components/native'

import * as mixins from './mixins'

type TextProps = {
  centered?: boolean
  capitalize?: boolean
  uppercase?: boolean
  lowercase?: boolean
  verticalMargin?: number
  fontWeight?: number
  fontSize?: number
}

export let Text = styled.Text`
  ${(props: TextProps) => props.centered && `text-align: center`}
  ${(props: TextProps) => props.capitalize && `text-transform: capitalize`}
  ${(props: TextProps) => props.uppercase && `text-transform: uppercase`}
  ${(props: TextProps) => props.lowercase && `text-transform: lowercase`}
  ${(props: TextProps) =>
    props.verticalMargin && `margin: ${props.verticalMargin}px 0`}
  ${(props: TextProps) =>
    props.fontWeight && `font-weight: ${props.fontWeight}`}
  ${(props: TextProps) => props.fontSize && `font-size: ${props.fontSize}`}
`

export function addBaseCssToText(css: any) {
  Text = styled(Text)`
    ${css}
  `
}

type ViewProps = {
  verticalMargin?: number
  horizontalMargin?: number
  marginTop?: number
  marginBottom?: number
  marginLeft?: number
  marginRight?: number
}

export let View = styled.View`
  ${(props: ViewProps) =>
    props.verticalMargin && `margin: ${props.verticalMargin}px 0`}
  ${(props: ViewProps) =>
    props.horizontalMargin && `margin: 0 ${props.verticalMargin}px`}
  ${(props: ViewProps) => props.marginTop && `margin-top: ${props.marginTop}`}
  ${(props: ViewProps) =>
    props.marginBottom && `margin-bottom: ${props.marginBottom}`}
  ${(props: ViewProps) =>
    props.marginLeft && `margin-left: ${props.marginLeft}`}
  ${(props: ViewProps) =>
    props.marginRight && `margin-left: ${props.marginRight}`}
`

export function addBaseCssToView(css: any) {
  View = styled(View)`
    ${css}
  `
}

export const CenteredView = styled(View)`
  ${mixins.centered};
`

export const CenteredFillView = styled(View)`
  flex: 1;
  ${mixins.centered};
`

type FlexRowProps = {
  spaceBetween?: boolean
  spaceAround?: boolean
  spaceEvenly?: boolean
  centered?: boolean
}

export const FlexRow = styled(View)`
  flex-direction: row;
  align-items: center;
  ${(props: FlexRowProps) =>
    props.spaceBetween && 'justify-content: space-between'}
  ${(props: FlexRowProps) =>
    props.spaceAround && 'justify-content: space-around'}
  ${(props: FlexRowProps) =>
    props.spaceEvenly && 'justify-content: space-evenly'}
  ${(props: FlexRowProps) => props.centered && 'justify-content: center'}
`

export const AlignEndView = styled.View`
  align-items: flex-end;
`

type WhitespaceProps = {
  space: number
}

export const Whitespace = styled(View)`
  height: ${(props: WhitespaceProps) => props.space || 0};
`

type CircleViewProps = {
  size: number
  color?: string
}

export const CircleView = styled(View)`
  height: ${(props: CircleViewProps) => props.size || 0};
  width: ${(props: CircleViewProps) => props.size || 0};
  border-radius: ${(props: CircleViewProps) => props.size / 2 || 0};
  ${mixins.centered};
  ${(props: CircleViewProps) =>
    props.color && `background-color: ${props.color};`}
`

export const BottomAbsoluteContainer = styled(View)`
  ${mixins.bottomAbsolute};
`

export const TopAbsoluteContainer = styled(View)`
  ${mixins.topAbsolute};
`

export const FillView = styled(View)`
  flex: 1;
`

export const FullScreenView = styled(View)`
  ${mixins.screenSize};
`
