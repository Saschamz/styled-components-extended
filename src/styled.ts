import styled from 'styled-components/native'

import * as mixins from './mixins'
import { FlexRowProps, WhitespaceProps, SpacingProps } from './types'

export const Text = styled.Text`
  ${mixins.textBase}
`

export const View = styled.View`
  ${mixins.viewBase}
`

export const SafeAreaView = styled.SafeAreaView`
  ${mixins.viewBase}
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
  ${mixins.circle}
  ${mixins.centered};
`

export const CircleMask = styled(CircleView)`
  overflow: hidden;
`

export const BottomAbsoluteView = styled(View)`
  ${mixins.bottomAbsolute};
`

export const BottomAbsoluteContainer = BottomAbsoluteView

export const TopAbsoluteView = styled(View)`
  ${mixins.topAbsolute};
`

export const TopAbsoluteContainer = TopAbsoluteView

export const FillView = styled(View)`
  flex: 1;
`

export const FullScreenView = styled(View)`
  ${mixins.screenSize};
`

export const OverlayView = styled(View)`
  ${mixins.overlay};
`
