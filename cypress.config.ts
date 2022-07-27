import * as cypress from 'cypress';
import { defineConfig } from 'cypress'

const { initPlugin } = require('cypress-plugin-snapshots/plugin');

export default defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  projectId: "xqsjqg",
  e2e: {
    setupNodeEvents(on, config) {
      initPlugin(on, config);
      return config;

      
    },
    
    baseUrl: 'http://localhost:4200',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}', // ofr using another format: spec data js
    excludeSpecPattern: ['**/1-getting-started/*','**/2-advanced-examples/*','**/__snapshots__/*', '**/__image_snapshots__/*'] // hide from the runner to ececute those folders
    // snapshots, image_snapshots - cypress-plugin-snapshots
      
     
    
  }
})
