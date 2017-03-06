// MIT © 2017 azu
"use strict";
/**
 * @param {TextlintCore} textlint
 */
export default function testEmptyImageAlt(textlint) {
    return textlint.lintText("![](http://example.com/img.png)", ".md");
}