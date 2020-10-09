module.exports = {
  target: 'serverless',
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.md/,
      use: 'raw-loader',
    })

    return config
  },
}
