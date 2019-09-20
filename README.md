# styled-native-kit

This is a base kit for styled-components that provides

- Property shortcuts for styling
- Commonly used layout components
- Commonly used layout mixins

## Installation

1. If you don't have styled-components installed run `npm i styled-components`

   or `npm i styled-components && npm i -D @types/styled-components` if you are using typescript.

2. `npm i styled-native-kit`

---

## Components

`<Text />`

**SEE PROPS**

`<View />`

**SEE PROPS**

`<CenteredView />`

```css
justify-content: center;
align-items: center;
```

`<CenteredFillView />`

```css
flex: 1;
justify-content: center;
align-items: center;
```

`<FlexRow />`

```css
flex-direction: row;
justify-content: center;
```

`<AlignEndView />`

```css
align-items: flex-end;
```

`<Whitespace />`

**SEE PROPS**

`<CircleView />`

**SEE PROPS**

```css
justify-content: center;
align-items: center;
```

`<BottomAbsoluteView />`

```css
position: absolute;
bottom: 0;
left: 0;
right: 0;
```

`<TopAbsoluteView />`

```css
position: absolute;
top: 0;
left: 0;
right: 0;
```

`<FillView />`

```css
flex: 1;
```

`<FullscreenView />`

```css
  height: ${Dimensions.get('screen').height};
  width: ${Dimensions.get('screen').width};
```

`<OverlayView />`

```css
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
```

## Props

`ViewKitProps` are available to all View components

`TextKitProps` are available to all Text components

```typescript
type TextKitProps = {
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

type ViewKitProps = {
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

type FlexRowProps = {
  spaceBetween?: boolean
  spaceAround?: boolean
  spaceEvenly?: boolean
  centered?: boolean
}

type CircleViewProps = {
  size: number
  color?: string
}

type WhitespaceProps = {
  space: number
}
```

# Mixins

```typescript
const centered = css`
  justify-content: center;
  align-items: center;
`

const screenHeight = css`
  height: ${Dimensions.get('screen').height};
`

const screenWidth = css`
  height: ${Dimensions.get('screen').width};
`

const screenSize = css`
  ${screenHeight};
  ${screenWidth};
`

const topAbsolute = css`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`

const bottomAbsolute = css`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`

const overlay = css`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`
```
