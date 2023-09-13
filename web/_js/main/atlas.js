/*!
 * The 2022 r/place Catalog
 * Copyright (c) 2017 Roland Rytz <roland@draemm.li>
 * Copyright (c) 2022 Place Atlas contributors
 * Copyright (c) 2022 Hans5958
 * Licensed under AGPL-3.0 (https://hans5958.github.io/place-catalog-2022/license.txt)
 */

window.addEventListener("error", e => {
	console.error(e)
	let errorMessage = "<h4 class=\"mb-3\">An error has occurred:</h4>"
	errorMessage += "<p class=\"text-danger\">" + e.message + "</p>"
	errorMessage += "<p class=\"text-danger\">on line " + e.lineno + "</p>"
	errorMessage += "<p>If this keeps happening, feel free to tell us on <a href=\"https://discord.gg/pJkm23b2nA\">our Discord server</a>.</p>"
	document.getElementById("loadingContent").innerHTML = errorMessage
})
