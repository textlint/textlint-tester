// MIT © 2017 azu
"use strict";
import {TextLintCore} from "textlint";
import testEmptyString from "./empty-string-test.js"
import testEmptyAlt from "./empty-img-alt-test.js"
export default function testCommonCases({
    describe,
    it,
    ruleName,
    rule
}) {
    const textlint = new TextLintCore();
    textlint.setupRules({
        [ruleName]: rule
    });
    describe("Common Test Cases", function() {
        it("should be pass empty string test case", function() {
            return testEmptyString(textlint);
        });
    });
    describe("Common Markdown Test Cases", function() {
        it("should be pass empty alt string test case", function() {
            return testEmptyAlt(textlint);
        });
    });
}