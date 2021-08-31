require('dotenv').config();

const withImages = require('next-images');
const withCSS = require('@zeit/next-css');
const { styles } = require('@ckeditor/ckeditor5-dev-utils');

const config = {
  env: {
    API: process.env.API,
    STATIC: process.env.STATIC,
  },
  webpack: (config) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty',
    };

    config.module.rules = [
      ...config.module.rules,
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
      },
    ];

    return config;
  },
  ...withCSS(
    withImages({
      webpack(config, options) {
        config.module.rules.forEach(function (rule, index, array) {
          const test = (rule.test && rule.test.toString()) || '';
          if (test.includes('css')) {
            array[index] = {
              ...rule,
              exclude: /ckeditor5-[^/]+\/theme\/[\w-/]+\.css$/,
            };
          } else if (test.includes('svg')) {
            array[index] = {
              ...rule,
              exclude: /ckeditor5-[^/]+\/theme\/icons\/.+\.svg$/,
            };
          }
        });

        config.module.rules.push({
          test: /ckeditor5-[^/]+\/theme\/[\w-/]+\.css$/,
          use: [
            {
              loader: 'style-loader',
              options: {
                injectType: 'singletonStyleTag',
              },
            },
            {
              loader: 'postcss-loader',
              options: styles.getPostCssConfig({
                themeImporter: {
                  themePath: require.resolve('@ckeditor/ckeditor5-theme-lark'),
                },
                minify: true,
              }),
            },
          ],
        });

        config.module.rules.push({
          test: /ckeditor5-[^/]+\/theme\/icons\/.+\.svg$/,
          use: ['raw-loader'],
        });

        return config;
      },
    }),
  ),
};

module.exports = config;
