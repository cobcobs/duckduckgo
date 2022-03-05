// ==UserScript==
// @name        rose-pine DuckDuckGo Theme
// @namespace   https://duckduckgo.com/
// @version     1.0
// @description 2022-01-30
// @author      https://github.com/cobcobs/
// @match       https://duckduckgo.com/
// @match       https://duckduckgo.com/settings
// @icon        https://github.com/rose-pine/rose-pine-theme/raw/main/assets/icon.png
// @grant       none
// ==/UserScript==

(function() {
	'use strict';

	const theme = [
		'21=FAF4ED', '7=FAF4ED', '8=575179', '9=D7827E', 'aa=907AA9',
		'ae=g', 'j=FAF4ED', 'x=286983',
	];

	for (const item of theme) {
		document.cookie = `${item}; max-age=126144000; samesite=lax; secure`;
	}
})();
