/*!
 * The 2022 r/place Catalog
 * Copyright (c) 2017 Roland Rytz <roland@draemm.li>
 * Copyright (c) 2022 Place Atlas contributors
 * Copyright (c) 2022 Hans5958
 * Licensed under AGPL-3.0 (https://hans5958.github.io/place-catalog/license.txt)
 */

const backgroundCanvas = document.createElement("canvas")
backgroundCanvas.width = canvasSize.x
backgroundCanvas.height = canvasSize.y
const backgroundContext = backgroundCanvas.getContext("2d")

const wrapper = document.getElementById("wrapper")
const bottomBar = document.getElementById("bottomBar")

const offcanvasList = document.getElementById("offcanvasList")

const objectsContainer = document.getElementById("objectsList")
const closeObjectsListButton = document.getElementById("closeObjectsListButton")
const objectsListOverflowNotice = document.getElementById("objectsListOverflowNotice")

const entriesList = document.getElementById("entriesList")

const objectEditNav = document.createElement("a")
objectEditNav.className = "btn btn-outline-primary"
objectEditNav.id = "objectEditNav"
objectEditNav.textContent = "Edit"

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
	render()
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
	render()
})

closeObjectsListButton.addEventListener("click", clearObjectsList)

bottomBar.addEventListener("mouseover", () => {
	if (!fixed) clearObjectsList()
})

function clearObjectsList() {
	closeObjectsListButton.classList.add("d-none")
	objectsListOverflowNotice.classList.add("d-none")
	entriesList.classList.remove("disableHover")
	objectsContainer.replaceChildren()
	fixed = false
	render()
	objectEditNav.remove()
	document.title = pageTitle
}

function toggleFixed(e, tapped) {
	if (!fixed) {
		entriesList.classList.remove("disableHover")
		return 0
	}
	fixed = !fixed
	if (!fixed) {
		updateHovering(e, tapped)
		render()
	}
	entriesList.classList.add("disableHover")
	objectsListOverflowNotice.classList.add("d-none")
}

window.addEventListener("resize", () => {

	applyView()
	render()

})

function renderBackground() {

	backgroundContext.clearRect(0, 0, highlightCanvas.width, highlightCanvas.height)

	//backgroundCanvas.width = 1000 * zoom
	//backgroundCanvas.height = 1000 * zoom

	//backgroundContext.lineWidth = zoom

	backgroundContext.fillStyle = "rgba(0, 0, 0, 0.6)"
	backgroundContext.fillRect(0, 0, backgroundCanvas.width, backgroundCanvas.height)

}

async function render() {

	highlightContext.clearRect(0, 0, highlightCanvas.width, highlightCanvas.height)

	//canvas.width = 1000*zoom
	//canvas.height = 1000*zoom

	highlightContext.globalCompositeOperation = "source-over"
	highlightContext.clearRect(0, 0, highlightCanvas.width, highlightCanvas.height)


	highlightContext.globalCompositeOperation = "source-out"
	highlightContext.drawImage(backgroundCanvas, 0, 0)

}

window.addEventListener("hashchange", highlightEntryFromUrl)

function highlightEntryFromUrl() {

	const hash = window.location.hash.substring(1); //Remove hash prefix
	let [period] = hash.split('/')

	let targetPeriod, targetVariation

	if (period) {
		[targetPeriod, , targetVariation] = parsePeriod(period)
	} else {
		targetPeriod = defaultPeriod
		targetVariation = defaultVariation
	}
	updateTime(targetPeriod, targetVariation, true)

}

function initExplore() {

	window.updateHovering = updateHovering
	window.render = () => { }

	function updateHovering(e, tapped) {
		if (dragging || (fixed && !tapped)) return
		const pos = [
			(e.clientX - (container.clientWidth / 2 - innerContainer.clientWidth / 2 + zoomOrigin[0] + container.offsetLeft)) / zoom,
			(e.clientY - (container.clientHeight / 2 - innerContainer.clientHeight / 2 + zoomOrigin[1] + container.offsetTop)) / zoom
		]
		const coordsEl = document.getElementById("coords_p")
		// Displays coordinates as zero instead of NaN
		if (isNaN(pos[0])) {
			coordsEl.textContent = "0, 0"
		} else {
			coordsEl.textContent = Math.ceil(pos[0]) + ", " + Math.ceil(pos[1])
		}
	}

	renderBackground()

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
		let hashData = window.location.hash.substring(1).split('/')
		const newLocation = new URL(window.location)
		newLocation.hash = formatHash(hashData[0], event.detail.period, event.detail.period, event.detail.variation)
		if (location.hash !== newLocation.hash) history.replaceState({}, "", newLocation)
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

		//console.log(e)
		//console.log(e.changedTouches[0].clientX)
		if (e.changedTouches.length !== 1) return

		e = e.changedTouches[0]
		//console.log(lastPos[0] - e.clientX)

		if (Math.abs(lastPos[0] - e.clientX) + Math.abs(lastPos[1] - e.clientY) > 4)

		//console.log("Foo!!")
		dragging = false
		fixed = false
		setTimeout(() => updateHovering(e, true), 0)
	})

	if (window.location.hash) { // both "/" and just "/#" will be an empty hash string
		highlightEntryFromUrl()
	}
}
