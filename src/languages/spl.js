/*
Language: SPL
Author: Wei Su <swsoyee@gmail.com>
Description: language definition for Splunk search processing language (SPL)
Category: enterprise
*/

// === Start ===
// Functions from highlight.js/lib/regex.js
// Source: https://github.com/highlightjs/highlight.js/blob/main/src/lib/regex.js
/**
 * @param {RegExp | string } re
 * @returns {string}
 */
function source(re) {
  if (!re) return null;
  if (typeof re === "string") return re;

  return re.source;
}

/**
 * @param {...(RegExp | string) } args
 * @returns {string}
 */
function concat(...args) {
  const joined = args.map((x) => source(x)).join("");
  return joined;
}

/**
 * Any of the passed expresssions may match
 *
 * Creates a huge this | this | that | that match
 * @param {(RegExp | string)[] } args
 * @returns {string}
 */
function either(...args) {
  const joined = '(' + args.map((x) => source(x)).join("|") + ")";
  return joined;
}
// === End ===

/** @type LanguageFn */
export default function(hljs) {
  const HASH_COMMENT_MODE = hljs.COMMENT('//', /$/);

  const EVAL_FUNCTIONS = [
    "abs",
    "acos",
    "acosh",
    "asin",
    "asinh",
    "atan",
    "atan2",
    "atanh",
    "case",
    "cidrmatch",
    "ceiling",
    "coalesce",
    "commands",
    "cos",
    "cosh",
    "exact",
    "exp",
    "floor",
    "hypot",
    "if",
    "in",
    "isbool",
    "isint",
    "isnotnull",
    "isnull",
    "isnum",
    "isstr",
    "len",
    "like",
    "ln",
    "log",
    "lower",
    "ltrim",
    "match",
    "max",
    "md5",
    "min",
    "mvappend",
    "mvcount",
    "mvdedup",
    "mvfilter",
    "mvfind",
    "mvindex",
    "mvjoin",
    "mvrange",
    "mvsort",
    "mvzip",
    "now",
    "null",
    "nullif",
    "pi",
    "pow",
    "printf",
    "random",
    "relative_time",
    "replace",
    "round",
    "rtrim",
    "searchmatch",
    "sha1",
    "sha256",
    "sha512",
    "sigfig",
    "sin",
    "sinh",
    "spath",
    "split",
    "sqrt",
    "strftime",
    "strptime",
    "substr",
    "tan",
    "tanh",
    "time",
    "tonumber",
    "tostring",
    "trim",
    "typeof",
    "upper",
    "urldecode",
    "validate"
  ];

  const TRANSFORMING_FUNCTIONS = [
    "avg",
    "count",
    "distinct_count",
    "estdc",
    "estdc_error",
    "eval",
    "max",
    "mean",
    "median",
    "min",
    "mode",
    "percentile",
    "range",
    "stdev",
    "stdevp",
    "sum",
    "sumsq",
    "var",
    "varp",
    "first",
    "last",
    "list",
    "values",
    "earliest",
    "earliest_time",
    "latest",
    "latest_time",
    "per_day",
    "per_hour",
    "per_minute",
    "per_second",
    "rate"
  ];

  const FUNCTIONS = [
    ...EVAL_FUNCTIONS,
    ...TRANSFORMING_FUNCTIONS
  ];

  const FUNCTION_CALL = {
    className: 'function',
    begin: concat(/\b/, either(...FUNCTIONS), /\s*\(/),
    keywords: {
      keyword: FUNCTIONS
    }
  };

  // https://docs.splunk.com/Documentation/SplunkLight/7.3.6/References/Listofsearchcommands
  const BUILT_IN = [
    "abstract",
    "accum",
    "addcoltotals",
    "addinfo",
    "addtotals",
    "analyzefields",
    "anomalies",
    "anomalousvalue",
    "append",
    "appendcols",
    "appendpipe",
    "arules",
    "associate",
    "audit",
    "autoregress",
    "bucket",
    "bucketdir",
    "chart",
    "cluster",
    "collect",
    "concurrency",
    "contingency",
    "convert",
    "correlate",
    "crawl",
    "datamodel",
    "dbinspect",
    "dbxquery",
    "dbxlookup",
    "dedup",
    "delete",
    "delta",
    "diff",
    "dispatch",
    "erex",
    "eval",
    "eventcount",
    "eventstats",
    "extract",
    "fieldformat",
    "fields",
    "fieldsummary",
    "file",
    "filldown",
    "fillnull",
    "findtypes",
    "folderize",
    "foreach",
    "format",
    "from",
    "gauge",
    "gentimes",
    "geostats",
    "head",
    "highlight",
    "history",
    "input",
    "inputcsv",
    "inputlookup",
    "iplocation",
    "join",
    "kmeans",
    "kvform",
    "loadjob",
    "localize",
    "localop",
    "lookup",
    "makecontinuous",
    "makemv",
    "makeresults",
    "map",
    "metadata",
    "metasearch",
    "multikv",
    "multisearch",
    "mvcombine",
    "mvexpand",
    "nomv",
    "outlier",
    "outputcsv",
    "outputlookup",
    "outputtext",
    "overlap",
    "pivot",
    "predict",
    "rangemap",
    "rare",
    "regex",
    "relevancy",
    "reltime",
    "rename",
    "replace",
    "rest",
    "return",
    "reverse",
    "rex",
    "rtorder",
    "run",
    "savedsearch",
    "script",
    "scrub",
    "search",
    "searchtxn",
    "selfjoin",
    "sendemail",
    "set",
    "setfields",
    "sichart",
    "sirare",
    "sistats",
    "sitimechart",
    "sitop",
    "sort",
    "spath",
    "stats",
    "strcat",
    "streamstats",
    "table",
    "tags",
    "tail",
    "timechart",
    "top",
    "transaction",
    "transpose",
    "trendline",
    "tscollect",
    "tstats",
    "typeahead",
    "typelearner",
    "typer",
    "uniq",
    "untable",
    "where",
    "x11",
    "xmlkv",
    "xmlunescape",
    "xpath",
    "xyseries"
  ];

  const LITERALS = [
    "NOT",
    "true",
    "false"
  ];

  const KEYWORDS = [
    "as",
    "by",
    "or",
    "and",
    "over",
    "where",
    "output",
    "outputnew"
  ];

  const OPERATOR = {
    className: "operator",
    match: /\|/
  };

  const QUOTE_STRING = {
    className: 'string',
    begin: /"/,
    end: /"/,
    contains: [ hljs.BACKSLASH_ESCAPE ]
  };

  return {
    name: 'SPL',
    aliases: [
      'spl',
      'splunk'
    ],
    case_insensitive: true,
    keywords: {
      $pattern: /\b[\w\.]+\b/,
      keyword: KEYWORDS,
      built_in: BUILT_IN,
      literal: LITERALS
    },
    contains: [
      HASH_COMMENT_MODE,
      hljs.NUMBER_MODE,
      OPERATOR,
      FUNCTION_CALL,
      QUOTE_STRING
    ],
    illegal: /[{}]|<\//
  };
}
