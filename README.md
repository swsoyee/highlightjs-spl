# Splunk Search Processing Language for [highlight.js](https://highlightjs.org/)

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

### [WIP] Using directly from the UNPKG CDN

```html
<!-- <script type="text/javascript"
  src="https://unpkg.com/highlightjs-spl@0.1.0/dist/spl.min.js"></script> -->
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
