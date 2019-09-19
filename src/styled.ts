import styled from 'styled-components/native'

import * as mixins from './mixins'
import {
  TextKitProps,
  ViewKitProps,
  FlexRowProps,
  CircleViewProps
} from './types'

export let Text = styled.Text`
  ${(props: TextKitProps) => props.centered && `text-align: center`}
  ${(props: TextKitProps) => props.capitalize && `text-transform: capitalize`}
  ${(props: TextKitProps) => props.uppercase && `text-transform: uppercase`}
  ${(props: TextKitProps) => props.lowercase && `text-transform: lowercase`}
  ${(props: TextKitProps) =>
    props.verticalMargin && `margin: ${props.verticalMargin}px 0`}
  ${(props: TextKitProps) =>
    props.fontWeight && `font-weight: ${props.fontWeight}`}
  ${(props: TextKitProps) => props.fontSize && `font-size: ${props.fontSize}`}
`

export function addBaseCssToText(css: any) {
  Text = styled(Text)`
    ${css}
  `
}

export let View = styled.View`
  ${(props: ViewKitProps) =>
    props.verticalMargin && `margin: ${props.verticalMargin}px 0`}
  ${(props: ViewKitProps) =>
    props.horizontalMargin && `margin: 0 ${props.verticalMargin}px`}
  ${(props: ViewKitProps) =>
    props.marginTop && `margin-top: ${props.marginTop}`}
  ${(props: ViewKitProps) =>
    props.marginBottom && `margin-bottom: ${props.marginBottom}`}
  ${(props: ViewKitProps) =>
    props.marginLeft && `margin-left: ${props.marginLeft}`}
  ${(props: ViewKitProps) =>
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

export const Whitespace = styled(View)`
  height: ${(props: WhitespaceProps) => props.space || 0};
`

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
