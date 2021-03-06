var escape = exports.escape = function (str) {
    return str && str.replace( /[\0\x08\x09\x1a\n\r"'\\\%]/g, function (ch) {
        switch (ch) {
            case "\0":
                return "\\0";
            case "\x08":
                return "\\b";
            case "\x09":
                return "\\t";
            case "\x1a":
                return "\\z";
            case "\n":
                return "\\n";
            case "\r":
                return "\\r";
            case "\"":
            case "'":
            case "\\":
            case "%":
                return "\\"+ch; // prepends a backslash to backslash, percent,
                                  // and double/single quotes
        }
    });
};
exports.str = function(str){
	return str ? "'"+escape(str)+"'" : null
}
