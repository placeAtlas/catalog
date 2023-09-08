/*!
 * The 2022 r/place Catalog
 * Copyright (c) 2017 Roland Rytz <roland@draemm.li>
 * Copyright (c) 2022 Place Atlas contributors
 * Copyright (c) 2022 Hans5958
 * Licensed under AGPL-3.0 (https://hans5958.github.io/place-catalog/license.txt)
 */

let previousScaleZoomOrigin
let previousZoom

const backgroundCanvas = document.createElement("canvas")
backgroundCanvas.width = canvasSize.x
backgroundCanvas.height = canvasSize.y
const backgroundContext = backgroundCanvas.getContext("2d")

const wrapper = document.getElementById("wrapper")
const bottomBar = document.getElementById("bottomBar")

const showListButton = document.getElementById("showListButton")
const offcanvasList = document.getElementById("offcanvasList")
const bsOffcanvasList = new bootstrap.Offcanvas(offcanvasList)

const entriesList = document.getElementById("entriesList")
let entriesListShown = false

let lastPos = [0, 0]

let fixed = false; // Fix hovered items in place, so that clicking on links is possible

offcanvasList.addEventListener('show.bs.offcanvas', () => {
	wrapper.classList.remove('listHidden')
	wrapper.classList.add('listTransitioning')
	applyView()
})

offcanvasList.addEventListener('shown.bs.offcanvas', e => {
	entriesListShown = true
	wrapper.classList.remove('listTransitioning')
	updateHovering(e)
	applyView()
})

offcanvasList.addEventListener('hide.bs.offcanvas', () => {
	wrapper.classList.add('listHidden')
	wrapper.classList.add('listTransitioning')
	applyView()
})

offcanvasList.addEventListener('hidden.bs.offcanvas', e => {
	entriesListShown = false
	wrapper.classList.remove('listTransitioning')
	updateHovering(e)
	applyView()
})

bottomBar.addEventListener("mouseover", () => {
	if (!fixed) clearObjectsList()
})

function clearObjectsList() {
	fixed = false
	document.title = pageTitle
	entriesList.classList.remove("disableHover")
	updateHash(false)
}

function toggleFixed(e, tapped) {
	if (!fixed) {
		entriesList.classList.remove("disableHover")
		return
	}
	fixed = !fixed
	if (!fixed) {
		updateHovering(e, tapped)
	}
	entriesList.classList.add("disableHover")
}

window.addEventListener("resize", () => {
	applyView()

})

function updateAtlas() {
	resetEntriesList()
}

async function resetEntriesList() {

	const variationConfig = variationsConfig[currentVariation]

	const entry = {
		name: variationConfig.name,
		links: {},
		// id,
		...variationConfig.info
	}
	const element = createInfoBlock(entry)
	entriesList.replaceChildren(element)

}

function updateCoordsDisplay(e) {
	const pos = [
		(e.clientX - (container.clientWidth / 2 - innerContainer.clientWidth / 2 + zoomOrigin[0] + container.offsetLeft)) / zoom + canvasOffset.x,
		(e.clientY - (container.clientHeight / 2 - innerContainer.clientHeight / 2 + zoomOrigin[1] + container.offsetTop)) / zoom + canvasOffset.y
	]
	const coordsEl = document.getElementById("coords_p")

	// Displays coordinates as zero instead of NaN
	if (isNaN(pos[0])) {
		coordsEl.textContent = "0, 0"
	} else {
		coordsEl.textContent = Math.floor(pos[0]) + ", " + Math.floor(pos[1])
	}

	return pos
}

function updateHovering(e, tapped) {

	if (dragging || (fixed && !tapped)) return
	updateCoordsDisplay(e)

}

window.addEventListener("hashchange", updateViewFromHash)

async function updateViewFromHash() {

	const hash = window.location.hash.substring(1); //Remove hash prefix
	let [hashPeriod, hashX, hashY, hashZoom] = hash.split('/')

	let targetPeriod, targetVariation

	if (hashPeriod) {
		[targetPeriod, , targetVariation] = parsePeriod(hashPeriod)
	} else {
		targetPeriod = defaultPeriod
		targetVariation = defaultVariation
	}
	await updateTime(targetPeriod, targetVariation)

	setView(
		(isNaN(hashX) || hashX === '') ? undefined : Number(hashX), 
		(isNaN(hashY) || hashY === '') ? undefined : Number(hashY), 
		(isNaN(hashZoom) || hashZoom === '') ? undefined : Number(hashZoom)
	)

}

function initExplore() {
	updateAtlas()

	document.addEventListener('timeupdate', () => {
		updateAtlas()
	})

	window.updateHovering = updateHovering

	function updateHovering(e, tapped) {
		if (dragging || (fixed && !tapped)) return
		updateCoordsDisplay(e)
	}

	applyView()

}

function initGlobal() {
	container.addEventListener("mousemove", e => {
		if (e.sourceCapabilities) {
			if (!e.sourceCapabilities.firesTouchEvents) {
				updateHovering(e)
			}
		} else {
			updateHovering(e)
		}
	})

	document.addEventListener('timeupdate', event => {
		updateHash()
	})
}

function initViewGlobal() {
	container.addEventListener("mousedown", e => {
		lastPos = [
			e.clientX,
			e.clientY
		]
	})

	container.addEventListener("touchstart", e => {
		if (e.touches.length === 1) {
			lastPos = [
				e.touches[0].clientX,
				e.touches[0].clientY
			]
		}
	}, { passive: true })

	container.addEventListener("mouseup", e => {
		if (Math.abs(lastPos[0] - e.clientX) + Math.abs(lastPos[1] - e.clientY) <= 4) {
			toggleFixed(e)
		}
	})

	container.addEventListener("touchend", e => {
		e.preventDefault()

		if (e.changedTouches.length !== 1) return

		e = e.changedTouches[0]

		if (Math.sqrt(Math.pow(lastPos[0] - e.clientX, 2) + Math.pow(lastPos[1] - e.clientY, 2)) < 10)
			setTimeout(() => updateHovering(e, true), 0)

		dragging = false
		fixed = false
	})

	if (window.location.hash) { // both "/" and just "/#" will be an empty hash string
		updateViewFromHash()
	}
}
