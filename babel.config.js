// babel.config.js

const path = require('path')

/**
 * @param {string} relativeToBabelConf
 * @returns {string}
 */
function resolveAliasPath(relativeToBabelConf) {
  const resolvedPath = path.relative(
    process.cwd(),
    path.resolve(__dirname, relativeToBabelConf)
  )
  return `./${resolvedPath.replace('\\', '/')}`
}

const aliases = {
  components: resolveAliasPath('./src/components'),
  utils: resolveAliasPath('./src/utils'),
}

module.exports = function (api) {
  api.cache(true) // Cache the Babel config for faster rebuilds

  const isTestEnv = api.env('test')
  const isProdEnv = api.env('production')

  return {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: { browsers: '> 0.25%, not dead' },
          modules: isTestEnv ? 'commonjs' : false,
        },
      ],
      '@babel/preset-typescript',
      ['@babel/preset-react', { runtime: 'automatic' }],
    ],
    plugins: [
      '@babel/plugin-transform-runtime',
      isProdEnv && [
        'babel-plugin-transform-react-remove-prop-types',
        { mode: 'remove' }, // Removes prop-types in production
      ],
      isProdEnv && '@babel/plugin-transform-react-constant-elements', // Optimizes constant elements in React
      ['babel-plugin-module-resolver', { alias: aliases }], // Aliases for simplified imports
      ['transform-inline-environment-variables', { include: ['NODE_ENV'] }], // Inject environment variables
    ].filter(Boolean), // Remove any false values (like conditionally added plugins)
    env: {
      test: {
        plugins: [
          ['babel-plugin-module-resolver', { alias: aliases }], // Ensure aliases work in test environment
        ],
        sourceMaps: 'both', // Source maps for easier debugging in tests
      },
      coverage: {
        plugins: ['babel-plugin-istanbul'], // Code coverage instrumentation
      },
    },
    ignore: [/node_modules/], // Ignore node_modules to speed up builds
  }
}
