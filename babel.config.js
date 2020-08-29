module.exports = function (api) {
  api.cache(true);

  const presets = [
    '@babel/preset-env',
    // 'minify'
  ];
  const plugins = [
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-optional-chaining'
  ];
  const ignore = [
    '**/*.test.js'
  ]

  return {
    presets,
    plugins,
    // ignore
  };
}
