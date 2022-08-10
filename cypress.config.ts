import * as cypress from 'cypress';
// import { defineConfig } from 'cypress'
const { defineConfig } = require('cypress');

const { initPlugin } = require('cypress-plugin-snapshots/plugin');

export default defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
//report mochawesome
reporter: 'cypress-mochawesome-reporter',
  video: true,
  retries: 2,
  projectId: "xqsjqg",

  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);//report plugin of mochawesome
      initPlugin(on, config);
      return config;
    },
    
    baseUrl: 'http://localhost:4200',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}', // ofr using another format: spec data js
    excludeSpecPattern: ['**/1-getting-started/*','**/2-advanced-examples/*','**/__snapshots__/*', '**/__image_snapshots__/*','**/__visualTesting__/*','**/__apiJsonObject__/*'] // hide from the runner to ececute those folders
    // snapshots, image_snapshots - cypress-plugin-snapshots

  }
})
