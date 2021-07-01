/** @type {import("snowpack").SnowpackUserConfig } */

module.exports = {
  mount: {
    public: '/',
    src: '/_dist_',
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    [
      '@snowpack/plugin-webpack',
      {
        htmlMinifierOptions: true,
      },
    ],
  ],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    port: 5000,
  },
  buildOptions: {
    /* ... */
  },
  routes: [
    {
      match: 'routes',
      src: '.*',
      dest: '/index.html',
    },
  ],
  alias: {
    // these seem to work fine in snowpack dev but not when making a build:
    '@material-ui/core/Avatar': '@material-ui/core/esm/Avatar',
    '@material-ui/lab/Alert': '@material-ui/lab/esm/Alert',
  },
  exclude: [
    '**/node_modules/**/*',
    '**/__tests__/*',
    '**/*.@(spec|test).@(js|mjs|jsx)',
    '**/src/server/**/*',
  ],
};
