import React, { ReactChild, ComponentType } from 'react'
import { defaultTheme as basicTheme, BulmaTheme } from '@hungry/bulma-theme'
import { normalizeCSS } from '@hungry/bulma-normalize'
import baseStyled, { ThemeProvider as StyledThemeProvider, ThemedStyledInterface } from 'styled-components'

// @ts-ignore
const attachNormalize = normalizeCSS

export const ThemeProvider =
  ({ theme, children }: { theme?: BulmaTheme, children: ComponentType<unknown> | JSX.Element }) =>
    <StyledThemeProvider theme={(theme || basicTheme)} >
      {children as ReactChild}
    </StyledThemeProvider>

export class Theme {
  public static Provider = ThemeProvider
}

export { withTheme } from 'styled-components'
export type BulmaStyledTheme<K> = ThemedStyledInterface<BulmaTheme & K>
export const styled = baseStyled as BulmaStyledTheme<{}>