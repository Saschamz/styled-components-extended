import styled from 'styled-components/native'

import * as mixins from './mixins'
import {
  TextKitProps,
  FlexRowProps,
  WhitespaceProps,
  CircleViewProps,
  ViewKitProps,
  SpacingProps
} from './types'

export const Text = styled.Text`
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

export const View = styled.View`
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
`

export const SafeAreaView = styled.SafeAreaView`
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
`

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

export const Spacing = styled(View)`
  ${(props: SpacingProps) => `
    margin: ${(props.multiplier || 1) * (props.base || 8)}px 0;
  `}
  ${(props: SpacingProps) =>
    props.horizontal &&
    `
    margin: 0 ${(props.multiplier || 1) * (props.base || 8)}px;
  `}
`

export const CircleView = styled(View)`
  height: ${(props: CircleViewProps) => props.size || 0};
  width: ${(props: CircleViewProps) => props.size || 0};
  border-radius: ${(props: CircleViewProps) => props.size / 2 || 0};

  ${mixins.centered};
`

export const BottomAbsoluteView = styled(View)`
  ${mixins.bottomAbsolute};
`

export const TopAbsoluteView = styled(View)`
  ${mixins.topAbsolute};
`

export const FillView = styled(View)`
  flex: 1;
`

export const FullScreenView = styled(View)`
  ${mixins.screenSize};
`

export const OverlayView = styled(View)`
  ${mixins.overlay};
`
