import React, { FunctionComponent } from 'react'
import { defaultTheme as basicTheme, BulmaTheme } from '@hungry/bulma-theme'
import { normalizeCSS } from '@hungry/bulma-normalize'
import baseStyled, {
  ThemeProvider as StyledThemeProvider,
  ThemeProviderProps,
  ThemedStyledInterface
} from 'styled-components'

// @ts-ignore
const attachNormalize = normalizeCSS

export type StyledBulmaTheme = ThemeProviderProps<BulmaTheme>

export const ThemeProvider: FunctionComponent<StyledBulmaTheme> =
  ({ theme, children }) =>
    <StyledThemeProvider theme={(theme || basicTheme)} >
      {children}
    </StyledThemeProvider>

export class Theme {
  public static Provider = ThemeProvider
}

export { withTheme } from 'styled-components'
export type BulmaStyledTheme<K> = ThemedStyledInterface<BulmaTheme & K>
export const styled = baseStyled as BulmaStyledTheme<{}>