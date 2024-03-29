﻿# Very simple and small javascript library to encode html

htmlencode.js is only 6.51Kb, and minified file is 2.61Kb

see [demo](https://codepen.io/ali-33/pen/VwwEyrv) at https://codepen.io/ali-33/pen/VwwEyrv

## How to use:

very simple to use this library.

add script tag:

```html
<script src="htmlencode.js"></script>
```
and use it:
```html
<script>
    var encodedHTML = htmlEncode(htmlStr)
</script>
```
## Reserved entities, symbols and characters in HTML
This table shows a list of reserved HTML entities with their associated character and description.

|Character|Entity name|Description|
|--- |--- |--- |
|"|&quot;|quotation mark|
|'|&apos;|apostrophe|
|&|&amp;|ampersand|
|<|&lt;|less-than|
|>|&gt;|greater-than|
||&nbsp;|non-breaking space|
|¡|&iexcl;|inverted exclamation mark|
|¢|&cent;|cent|
|£|&pound;|pound|
|¤|&curren;|currency|
|¥|&yen;|yen|
|¦|&brvbar;|broken vertical bar|
|§|&sect;|section|
|¨|&uml;|spacing diaeresis|
|©|&copy;|copyright|
|ª|&ordf;|feminine ordinal indicator|
|«|&laquo;|angle quotation mark (left)|
|¬|&not;|negation|
|­|&shy;|soft hyphen|
|®|&reg;|registered trademark|
|¯|&macr;|spacing macron|
|°|&deg;|degree|
|±|&plusmn;|plus-or-minus|
|²|&sup2;|superscript 2|
|³|&sup3;|superscript 3|
|´|&acute;|spacing acute|
|µ|&micro;|micro|
|¶|&para;|paragraph|
|·|&middot;|middle dot|
|¸|&cedil;|spacing cedilla|
|¹|&sup1;|superscript 1|
|º|&ordm;|masculine ordinal indicator|
|»|&raquo;|angle quotation mark (right)|
|¼|&frac14;|fraction 1/4|
|½|&frac12;|fraction 1/2|
|¾|&frac34;|fraction 3/4|
|¿|&iquest;|inverted question mark|
|×|&times;|multiplication|
|÷|&divide;|division|
|À|&Agrave;|capital a, grave accent|
|Á|&Aacute;|capital a, acute accent|
|Â|&Acirc;|capital a, circumflex accent|
|Ã|&Atilde;|capital a, tilde|
|Ä|&Auml;|capital a, umlaut mark|
|Å|&Aring;|capital a, ring|
|Æ|&AElig;|capital ae|
|Ç|&Ccedil;|capital c, cedilla|
|È|&Egrave;|capital e, grave accent|
|É|&Eacute;|capital e, acute accent|
|Ê|&Ecirc;|capital e, circumflex accent|
|Ë|&Euml;|capital e, umlaut mark|
|Ì|&Igrave;|capital i, grave accent|
|Í|&Iacute;|capital i, acute accent|
|Î|&Icirc;|capital i, circumflex accent|
|Ï|&Iuml;|capital i, umlaut mark|
|Ð|&ETH;|capital eth, Icelandic|
|Ñ|&Ntilde;|capital n, tilde|
|Ò|&Ograve;|capital o, grave accent|
|Ó|&Oacute;|capital o, acute accent|
|Ô|&Ocirc;|capital o, circumflex accent|
|Õ|&Otilde;|capital o, tilde|
|Ö|&Ouml;|capital o, umlaut mark|
|Ø|&Oslash;|capital o, slash|
|Ù|&Ugrave;|capital u, grave accent|
|Ú|&Uacute;|capital u, acute accent|
|Û|&Ucirc;|capital u, circumflex accent|
|Ü|&Uuml;|capital u, umlaut mark|
|Ý|&Yacute;|capital y, acute accent|
|Þ|&THORN;|capital THORN, Icelandic|
|ß|&szlig;|small sharp s, German|
|à|&agrave;|small a, grave accent|
|á|&aacute;|small a, acute accent|
|â|&acirc;|small a, circumflex accent|
|ã|&atilde;|small a, tilde|
|ä|&auml;|small a, umlaut mark|
|å|&aring;|small a, ring|
|æ|&aelig;|small ae|
|ç|&ccedil;|small c, cedilla|
|è|&egrave;|small e, grave accent|
|é|&eacute;|small e, acute accent|
|ê|&ecirc;|small e, circumflex accent|
|ë|&euml;|small e, umlaut mark|
|ì|&igrave;|small i, grave accent|
|í|&iacute;|small i, acute accent|
|î|&icirc;|small i, circumflex accent|
|ï|&iuml;|small i, umlaut mark|
|ð|&eth;|small eth, Icelandic|
|ñ|&ntilde;|small n, tilde|
|ò|&ograve;|small o, grave accent|
|ó|&oacute;|small o, acute accent|
|ô|&ocirc;|small o, circumflex accent|
|õ|&otilde;|small o, tilde|
|ö|&ouml;|small o, umlaut mark|
|ø|&oslash;|small o, slash|
|ù|&ugrave;|small u, grave accent|
|ú|&uacute;|small u, acute accent|
|û|&ucirc;|small u, circumflex accent|
|ü|&uuml;|small u, umlaut mark|
|ý|&yacute;|small y, acute accent|
|þ|&thorn;|small thorn, Icelandic|
|ÿ|&yuml;|small y, umlaut mark|
