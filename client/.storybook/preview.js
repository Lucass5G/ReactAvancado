import { addDecorator } from '@storybook/react'

import withGlosbalStyles from "./withGlobalStyles";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}


addDecorator(withGlosbalStyles)