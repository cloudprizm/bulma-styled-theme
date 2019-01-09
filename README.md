`bulma-styled-theme`
====

`styled-components` [theme provider](https://www.styled-components.com/docs/advanced#theming) with embedded `@hungry/bulma-theme`.

### Real usage scenario
* [@hungry/bulma-element](https://github.com/hungry-consulting/bulma-element)

### Example
#### without any theme alteration

```tsx
import { Theme } from '@hungry/bulma-styled-theme'
import { Button } from '@hungry/bulma-element'

<Theme.Provider>
  <Button />
<Theme.Provider>
```

#### more explicit
```tsx
import { Theme } from '@hungry/bulma-styled-theme'
import { Button } from '@hungry/bulma-element'
import { defaultTheme } from '@hungry/bulma-theme'

<Theme.Provider theme={defaultTheme}>
  <Button />
<Theme.Provider>
```