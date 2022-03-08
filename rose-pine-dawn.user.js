// ==UserScript==
// @name        rose-pine-dawn DuckDuckGo Theme
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
		'1=-1', 'at=-1', 'ao=-1', 'aq=-1', 'ak=-1', 'ax=-1', 'av=1', 'ap=-1', 'au=-1', 'ay=b', 'ae=-1', '18=1',
    '7=faf4ed', 'j=faf4ed', '9=d7827e', 'x=286983', 'aa=907aa9', '8=1f1d2e', '21=faf4ed',
	];

	for (const item of theme) {
		document.cookie = `${item}; max-age=126144000; samesite=lax; secure`;
	}
})();
