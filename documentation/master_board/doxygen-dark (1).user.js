// ==UserScript==
// @name          Doxygen Dark
// @namespace     http://userstyles.org
// @description	  Dark Theme for viewing documentation generated using <a href="http://www.doxygen.org">Doxygen</a>
// @author        abhishekchakraborty
// @homepage      https://userstyles.org/styles/128500
// @run-at        document-start
// @version       0.20160820152816
// ==/UserScript==
(function() {var css = [
	"@namespace url(http://www.w3.org/1999/xhtml);",
	"",
	"/* i really want this to be global */",
	"",
	"/* @-moz-document url-prefix(\"file:///\") { */",
	"  ",
	"body {",
	"  background-color: #333333; /** for docs **/",
	"  color: #d1d1d1;",
	"}",
	"",
	"#page-content {",
	"  background-color: #333333;",
	"  color: #bcbcbc;",
	"}",
	"",
	"pre, pre.fragment {",
	"  background-color: #282828;",
	"}",
	"",
	"/* to make keyword visible for above \'pre\' */",
	".highlight .nf {",
	"  color: #00adee;",
	"}",
	"",
	"img {",
	"  background-color: #aaa;",
	"}",
	"",
	"/** Note/Message boxes **/",
	"div.admonition, div.warning {",
	"  background-color: #474747;",
	"}",
	"",
	"div.admonition p.admonition-title, div.warning p.admonition-title {",
	"  background-color: #707070;",
	"}",
	"",
	"/**** News ***/",
	"",
	"#content-outer {",
	"  background-color: #333333;",
	"}",
	"",
	".postmeta {",
	"  background-color: #474747;",
	"  border-color: #595959;",
	"}",
	"",
	"/**** Blog ****/",
	"",
	"div.blogpost {",
	"  background-color: #333;",
	"}",
	"",
	"div.blogpost-header {",
	"  background-color: #333;",
	"}",
	"",
	"div.blogbody {",
	"  background-color: #474747;",
	"}",
	"",
	"/**** Jobs ****/",
	"",
	".dataTable tbody .even {",
	"  background-color: #474747;",
	"}",
	"",
	".dataTable thead th {",
	"  background-color: #6b6b6b;",
	"}",
	"",
	"/* Job Post Overlay */",
	"",
	"#fancybox-outer {",
	"  color: #bcbcbc;",
	"  background-color: #282828;",
	"}",
	"",
	"/***** For Docs *****/",
	"div.header {",
	"  background-color: #333333;",
	"  border-bottom-color: #001;",
	"  background-image: none;",
	"}",
	"",
	"td.memItemLeft, td.memItemRight, .mdescLeft, .mdescRight, .memdoc, .memTemplParams, .memTemplItemLeft, .memTemplItemRight {",
	"  background-color: #282828;",
	"}",
	"",
	".memproto, dl.reflist dt { /* 2nd for ToDo List */",
	"  color: #878f7e;",
	"  background-color: #333333;",
	"  text-shadow: unset;",
	"  background-image: none;",
	"}",
	"",
	".memname {",
	"  background-color: #333333;",
	"}",
	"",
	"a {",
	"  color: #adb8a1;",
	"}",
	"",
	".memdoc {",
	"  background-image: none;",
	"}",
	"",
	".memdoc, dl.reflist dd { /* 2nd for ToDo List */",
	"  background-color: #282828;",
	"}",
	"",
	".paramname {",
	"  color: #8f6262;",
	"}",
	"",
	"img.formulaInl {",
	"  filter: invert(80%) contrast(120%);",
	"}",
	"",
	"/* To make comments visible */",
	"span.comment {",
	"  color: #7b7b7b;",
	"}",
	"",
	"/* Even rows of lists */",
	".directory tr.even {",
	"  background-color: #282828;",
	"}",
	"",
	"/* Table header */",
	".fieldtable th {",
	"  background-color: #a5a7a3;",
	"  background-image: none;",
	"}",
	"",
	"div.center > img {",
	"  background-color: #cccccc;",
	"  filter: invert(100%);",
	"}",
	"",
	"/**** Source Code View ****/",
	"div.fragment {",
	"  background-color: #282828;",
	"}",
	"",
	".navpath li.navelem a {",
	"  color: #d1d1d1;",
	"  text-shadow: none;",
	"}",
	"",
	".navpath li.navelem a:hover {",
	"  color: #f1f1f1;",
	"  text-shadow: 0px 1px 1px rgba(255, 255, 255, 0.9);",
	"}",
	"",
	"span.lineno {",
	"  background-color: #333333;",
	"}",
	"",
	"span.line {",
	"  background-color: #3f3f3f;",
	"}",
	"",
	"span.lineno a {",
	"  background-color: #333333;",
	"}",
	"",
	"span.lineno a:hover {",
	"  background-color: #444444;",
	"}",
	"",
	"a.code, a.code:visited {",
	"  color: #4fa2b3;",
	"}",
	"",
	"span.keyword {",
	"  color: #00b300;",
	"}",
	"",
	"span.keywordtype {",
	"  color: #ac7339;",
	"}",
	"",
	"span.stringliteral {",
	"  color: #0140ff;",
	"}",
	"",
	"#powerTip {",
	"  background-color: #282828;",
	"}",
	"",
	"#powerTip div {",
	"  background-color: #282828;",
	"}",
	"",
	"/**** Navigation ****/",
	"#nav-tree {",
	"  background-color: #282828;",
	"}",
	"",
	"img {",
	"  background-color: #282828;",
	"  filter: invert(80%);",
	"}",
	"",
	"/**** Top Tab ****/",
	"",
	".tabs, .tabs2, .tabs3 {",
	"  background-image: none;",
	"}",
	"",
	".tablist li {",
	"  background-image: none;",
	"}",
	"",
	".tablist li.current a {",
	"  background-image: none;",
	"}",
	"",
	".tablist a {",
	"  color: #bcbcbc;",
	"  text-shadow: none;",
	"  background-image: none;",
	"}",
	"",
	".tablist a:hover {",
	"  background-color: #444444;",
	"  background-image: none;",
	"}",
	"",
	"/**** Bottom Tab ****/",
	".navpath ul {",
	"  background-image: none;",
	"}",
	"",
	"/**** Navigation Tab ****/ /* e.g. nlohmann.github.io/json */",
	"div.navtab {",
	"  background-color: #333333;",
	"}",
	"",
	"/**** Classes ****/",
	"",
	"/*** Class List, Member List ***/",
	"td.indexkey, td.indexvalue, tr.memlist {",
	"  background-color: #333333;",
	"}",
	"",
	"/* } */"
].join("\n");
if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
	PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {
	var node = document.createElement("style");
	node.type = "text/css";
	node.appendChild(document.createTextNode(css));
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		heads[0].appendChild(node);
	} else {
		// no head yet, stick it whereever
		document.documentElement.appendChild(node);
	}
}
})();
