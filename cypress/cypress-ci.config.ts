// Libs
import { defineConfig } from 'cypress';

import baseConfig from './cypress.config';

export default defineConfig({
  ...baseConfig,
  video: false,
  screenshotOnRunFailure: false
});
