# Splunk Search Processing Language for [highlight.js](https://highlightjs.org/)

[![npm version](https://img.shields.io/npm/v/highlightjs-spl?color=success)](https://www.npmjs.com/package/highlightjs-spl) ![license](https://img.shields.io/github/license/swsoyee/highlightjs-spl) ![jsDelivr](https://img.shields.io/jsdelivr/gh/hy/swsoyee/highlightjs-spl?color=blue&label=jsDelivr)

## Usage

Simply include the `highlight.js` library in your webpage or Node app, then load this module.

### Static website or simple usage

Simply load the module after loading `highlight.js`.  You'll use the minified version found in the `dist` directory.  This module is just a CDN build of the language, so it will register itself as the Javascript is loaded.

```html
<script type="text/javascript" src="/path/to/highlight.min.js"></script>
<script type="text/javascript" src="/path/to/spl.min.js"></script>
<script type="text/javascript">
  hljs.highlightAll();
</script>
```

### Using directly from the CDN

**jsDelivr**

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@10.7.1/build/styles/default.min.css">
<script src="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@10.7.1/build/highlight.min.js"></script>
<!-- load syntax definition for Splunk search processing language -->
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/swsoyee/highlightjs-spl/dist/spl.min.js"></script>
```

**unpkg**

```html
<link rel="stylesheet" href="https://unpkg.com/@highlightjs/cdn-assets@10.7.1/styles/default.min.css">
<script src="https://unpkg.com/@highlightjs/cdn-assets@10.7.1/highlight.min.js"></script>
<!-- load syntax definition for Splunk search processing language -->
<script type="text/javascript" src="https://unpkg.com/highlightjs-spl/dist/spl.min.js"></script>
```

- More info: <https://unpkg.com>

### With Node or another build system

If you're using Node / Webpack / Rollup / Browserify, etc, simply require the language module, then register it with Highlight.js.

```javascript
var hljs = require('highlight.js');
var hljsSpl = require('highlightjs-spl');

hljs.registerLanguage("spl", hljsSpl);
hljs.initHighlightingOnLoad();
```


## License

`highlight.js` is released under the MIT License. See [LICENSE][1] file for details.

### Author

Wei Su <swsoyee@gmail.com>

## Links

- The official site for the `highlight.js` library is <https://highlightjs.org/>.
- The `highlight.js` GitHub project: <https://github.com/highlightjs/highlight.js>
- Learn more about Splunk search processing language: <https://docs.splunk.com/Splexicon:SPL>

[1]: https://github.com/swsoyee/highlightjs-spl/blob/master/LICENSE
