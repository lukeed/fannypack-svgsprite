# fannypack-iconfont
Official Fannypack task for generating an Icon Font from SVG files.

## Installation
`npm install fannypack-iconfont --save-dev`

## Usage
```javascript
// gulpfile.js

var Fannypack = require('fannypack')

require('fannypack-iconfont')

Fannypack.Config.svgSprite = {
  // Config.root.src + 'src' dir
  // Where to place your SVG files
  src: 'img/sprites',
  // Config.root.dest + 'dest' dir
  dest: 'assets/img',
  // Auto-run this task in dev mode?
  watchTask: true,
  assetTask: true,
  // File extensions to watch
  extensions: ['svg']
}

Fannypack.init()
```

## SVG Files
All files should be the same size, and it is recommended that they be **at least** 250x250 pixels.
