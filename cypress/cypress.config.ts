// Libs
import { defineConfig } from 'cypress';

/**
 * @see - E2E Tests - https://docs.cypress.io/guides/end-to-end-testing/writing-your-first-end-to-end-test
 * @see - Angular Components Tests - https://docs.cypress.io/guides/component-testing/angular/overview
 */
export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:4200',
    experimentalRunAllSpecs: true,
    /**
     * @see https://docs.cypress.io/guides/references/cypress-studio
     */
    experimentalStudio: true
  }
});
