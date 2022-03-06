# gridsome-remark-video

Embeds video tag in your Gridsome project

This plugin uses [gatsby-remark-video](https://www.gatsbyjs.com/plugins/gatsby-remark-video/) under the hood.

## Installation

```
npm install gridsome-remark-video
```

## Usage

Based on [gatsby-remark-video](https://www.gatsbyjs.com/plugins/gatsby-remark-video/).

In your markdown

```
`video: /static/shots-demo-369bfe714a6b8981ecfc743f7e7e7008.mp4`
```

You can also add a title to the video tag by adding it in your markdown

```
`video: title: "Short demo": /static/shots-demo-369bfe714a6b8981ecfc743f7e7e7008.mp4`
```

Keep in mind that you need double quotes in order to title a video.
You can also escape a double quote the way you might expect:

```
`video: title: "Short \"demo\"": /static/shots-demo-369bfe714a6b8981ecfc743f7e7e7008.mp4`
```

Add the following in your `gridsome.config.js`

```ts
// gridsome.config.js
module.exports = {
  transformers: {
    remark: {
      plugins: [
        // ...
        [
          "gridsome-remark-video",
          // For options, see https://www.gatsbyjs.com/plugins/gatsby-remark-video
          {
            width: "800",
            height: "auto",
            preload: "auto",
            muted: true,
            autoplay: true,
            playsinline: true,
            controls: true,
            loop: true
          }
        ]
      ]
    }
  }
};
```

### Options

See [gatsby-remark-video](https://www.gatsbyjs.com/plugins/gatsby-remark-video/).

## How to Develop

The project boilerplate is based on https://github.com/zaki-yama/typescript-npm-package-template.

```zsh
$ npm install
$ npm run build # generates `lib`, `esm`, and `umd`
```
