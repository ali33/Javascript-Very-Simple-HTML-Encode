function htmlEncode(htmlStr) {
    function encodeChar(ch) {
        switch (ch) {
            case '"': return '&quot;';	//quotation mark
            case '\'': return '&apos;';	//apostrophe 
            case '&': return '&amp;';	//ampersand
            case '<': return '&lt;';	//less-than
            case '>': return '&gt;';	//greater-than
            case '': return '&nbsp;';	//non-breaking space
            case '¡': return '&iexcl;';	//inverted exclamation mark
            case '¢': return '&cent;';	//cent
            case '£': return '&pound;';	//pound
            case '¤': return '&curren;';	//currency
            case '¥': return '&yen;';	//yen
            case '¦': return '&brvbar;';	//broken vertical bar
            case '§': return '&sect;';	//section
            case '¨': return '&uml;';	//spacing diaeresis
            case '©': return '&copy;';	//copyright
            case 'ª': return '&ordf;';	//feminine ordinal indicator
            case '«': return '&laquo;';	//angle quotation mark (left)
            case '¬': return '&not;';	//negation
            case '­': return '&shy;';	//soft hyphen
            case '®': return '&reg;';	//registered trademark
            case '¯': return '&macr;';	//spacing macron
            case '°': return '&deg;';	//degree
            case '±': return '&plusmn;';	//plus-or-minus 
            case '²': return '&sup2;';	//superscript 2
            case '³': return '&sup3;';	//superscript 3
            case '´': return '&acute;';	//spacing acute
            case 'µ': return '&micro;';	//micro
            case '¶': return '&para;';	//paragraph
            case '·': return '&middot;';	//middle dot
            case '¸': return '&cedil;';	//spacing cedilla
            case '¹': return '&sup1;';	//superscript 1
            case 'º': return '&ordm;';	//masculine ordinal indicator
            case '»': return '&raquo;';	//angle quotation mark (right)
            case '¼': return '&frac14;';	//fraction 1/4
            case '½': return '&frac12;';	//fraction 1/2
            case '¾': return '&frac34;';	//fraction 3/4
            case '¿': return '&iquest;';	//inverted question mark
            case '×': return '&times;';	//multiplication
            case '÷': return '&divide;';	//division
            case 'À': return '&Agrave;';	//capital a, grave accent
            case 'Á': return '&Aacute;';	//capital a, acute accent
            case 'Â': return '&Acirc;';	//capital a, circumflex accent
            case 'Ã': return '&Atilde;';	//capital a, tilde
            case 'Ä': return '&Auml;';	//capital a, umlaut mark
            case 'Å': return '&Aring;';	//capital a, ring
            case 'Æ': return '&AElig;';	//capital ae
            case 'Ç': return '&Ccedil;';	//capital c, cedilla
            case 'È': return '&Egrave;';	//capital e, grave accent
            case 'É': return '&Eacute;';	//capital e, acute accent
            case 'Ê': return '&Ecirc;';	//capital e, circumflex accent
            case 'Ë': return '&Euml;';	//capital e, umlaut mark
            case 'Ì': return '&Igrave;';	//capital i, grave accent
            case 'Í': return '&Iacute;';	//capital i, acute accent
            case 'Î': return '&Icirc;';	//capital i, circumflex accent
            case 'Ï': return '&Iuml;';	//capital i, umlaut mark
            case 'Ð': return '&ETH;';	//capital eth, Icelandic
            case 'Ñ': return '&Ntilde;';	//capital n, tilde
            case 'Ò': return '&Ograve;';	//capital o, grave accent
            case 'Ó': return '&Oacute;';	//capital o, acute accent
            case 'Ô': return '&Ocirc;';	//capital o, circumflex accent
            case 'Õ': return '&Otilde;';	//capital o, tilde
            case 'Ö': return '&Ouml;';	//capital o, umlaut mark
            case 'Ø': return '&Oslash;';	//capital o, slash
            case 'Ù': return '&Ugrave;';	//capital u, grave accent
            case 'Ú': return '&Uacute;';	//capital u, acute accent
            case 'Û': return '&Ucirc;';	//capital u, circumflex accent
            case 'Ü': return '&Uuml;';	//capital u, umlaut mark
            case 'Ý': return '&Yacute;';	//capital y, acute accent
            case 'Þ': return '&THORN;';	//capital THORN, Icelandic
            case 'ß': return '&szlig;';	//small sharp s, German
            case 'à': return '&agrave;';	//small a, grave accent
            case 'á': return '&aacute;';	//small a, acute accent
            case 'â': return '&acirc;';	//small a, circumflex accent
            case 'ã': return '&atilde;';	//small a, tilde
            case 'ä': return '&auml;';	//small a, umlaut mark
            case 'å': return '&aring;';	//small a, ring
            case 'æ': return '&aelig;';	//small ae
            case 'ç': return '&ccedil;';	//small c, cedilla
            case 'è': return '&egrave;';	//small e, grave accent
            case 'é': return '&eacute;';	//small e, acute accent
            case 'ê': return '&ecirc;';	//small e, circumflex accent
            case 'ë': return '&euml;';	//small e, umlaut mark
            case 'ì': return '&igrave;';	//small i, grave accent
            case 'í': return '&iacute;';	//small i, acute accent
            case 'î': return '&icirc;';	//small i, circumflex accent
            case 'ï': return '&iuml;';	//small i, umlaut mark
            case 'ð': return '&eth;';	    //small eth, Icelandic
            case 'ñ': return '&ntilde;';	//small n, tilde
            case 'ò': return '&ograve;';	//small o, grave accent
            case 'ó': return '&oacute;';	//small o, acute accent
            case 'ô': return '&ocirc;';	//small o, circumflex accent
            case 'õ': return '&otilde;';	//small o, tilde
            case 'ö': return '&ouml;';	//small o, umlaut mark
            case 'ø': return '&oslash;';	//small o, slash
            case 'ù': return '&ugrave;';	//small u, grave accent
            case 'ú': return '&uacute;';	//small u, acute accent
            case 'û': return '&ucirc;';	//small u, circumflex accent
            case 'ü': return '&uuml;';	//small u, umlaut mark
            case 'ý': return '&yacute;';	//small y, acute accent
            case 'þ': return '&thorn;';	//small thorn, Icelandic
            case 'ÿ': return '&yuml;';	//small y, umlaut mark
            default:
                return ch;
        }
    }
    var encodedStr = '';
    for (var i = 0; i < htmlStr.length; i++) {
        encodedStr += encodeChar(htmlStr.charAt(i));
    }
    return encodedStr;
}