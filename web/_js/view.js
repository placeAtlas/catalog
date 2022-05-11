/*
	========================================================================
	The 2022 /r/place Atlas

	An atlas of Reddit's 2022 /r/place, with information to each
	artwork	of the canvas provided by the community.

	Copyright (c) 2017 Roland Rytz <roland@draemm.li>
	Copyright (c) 2022 Place Atlas contributors

	Licensed under the GNU Affero General Public License Version 3
	https://place-atlas.stefanocoding.me/license.txt
	========================================================================
*/

let hovered = []

const backgroundCanvas = document.createElement("canvas")
backgroundCanvas.width = 2000
backgroundCanvas.height = 2000
const backgroundContext = backgroundCanvas.getContext("2d")

const wrapper = document.getElementById("wrapper")

const offcanvasList = document.getElementById("offcanvasList")

const objectsListOverflowNotice = document.getElementById("objectsListOverflowNotice")

const entriesList = document.getElementById("entriesList")

let lastPos = [0, 0]

let fixed = false; // Fix hovered items in place, so that clicking on links is possible

offcanvasList.addEventListener('show.bs.offcanvas', function (e) {
	wrapper.classList.remove('listHidden')
	wrapper.classList.add('listTransitioning')
	applyView()
})

offcanvasList.addEventListener('shown.bs.offcanvas', function (e) {
	entriesListShown = true
	wrapper.classList.remove('listTransitioning')
	updateHovering(e)
	applyView()
	render()
})

offcanvasList.addEventListener('hide.bs.offcanvas', function () {
	wrapper.classList.add('listHidden')
	wrapper.classList.add('listTransitioning')
	applyView()
})

offcanvasList.addEventListener('hidden.bs.offcanvas', function (e) {
	entriesListShown = false
	wrapper.classList.remove('listTransitioning')
	updateHovering(e)
	applyView()
	render()
})

function toggleFixed(e, tapped) {
	if (!fixed && hovered.length == 0) {
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

window.addEventListener("resize", function (e) {
	//console.log(document.documentElement.clientWidth, document.documentElement.clientHeight)

	// Legacy code
	let viewportWidth = document.documentElement.clientWidth

	if (document.documentElement.clientWidth > 2000 && viewportWidth <= 2000) {
		entriesListShown = true
		wrapper.classList.remove("listHidden")
	}

	if (document.documentElement.clientWidth < 2000 && viewportWidth >= 2000) {
		entriesListShown = false
		wrapper.classList.add("listHidden")
	}
	updateHovering(e)

	viewportWidth = document.documentElement.clientWidth

	applyView()
	render()

})

function renderBackground(atlas) {

	backgroundContext.clearRect(0, 0, canvas.width, canvas.height)

	//backgroundCanvas.width = 1000 * zoom
	//backgroundCanvas.height = 1000 * zoom

	//backgroundContext.lineWidth = zoom

	backgroundContext.fillStyle = "rgba(0, 0, 0, 0.6)"
	backgroundContext.fillRect(0, 0, backgroundCanvas.width, backgroundCanvas.height)

	for (let i = 0; i < atlas.length; i++) {

		const path = atlas[i].path

		backgroundContext.beginPath()

		if (path[0]) {
			//backgroundContext.moveTo(path[0][0]*zoom, path[0][1]*zoom)
			backgroundContext.moveTo(path[0][0], path[0][1])
		}

		for (let p = 1; p < path.length; p++) {
			//backgroundContext.lineTo(path[p][0]*zoom, path[p][1]*zoom)
			backgroundContext.lineTo(path[p][0], path[p][1])
		}

		backgroundContext.closePath()

		let bgStrokeStyle
		switch (atlas[i].diff) {
			case "add":
				bgStrokeStyle = "rgba(0, 255, 0, 1)"
				backgroundContext.lineWidth = 2
				break
			case "edit":
				bgStrokeStyle = "rgba(255, 255, 0, 1)"
				backgroundContext.lineWidth = 2
				break
			case "delete":
				bgStrokeStyle = "rgba(255, 0, 0, 1)"
				backgroundContext.lineWidth = 2
				break
			default:
				bgStrokeStyle = "rgba(255, 255, 255, 0.8)"
				break
		}
		backgroundContext.strokeStyle = bgStrokeStyle
		backgroundContext.stroke()
		backgroundContext.lineWidth = 1
	}
}

async function render() {

	context.clearRect(0, 0, canvas.width, canvas.height)

	//canvas.width = 1000*zoom
	//canvas.height = 1000*zoom

	context.globalCompositeOperation = "source-over"
	context.clearRect(0, 0, canvas.width, canvas.height)

	if (hovered.length > 0) {
		container.style.cursor = "pointer"
	} else {
		container.style.cursor = "default"
	}


	for (let i = 0; i < hovered.length; i++) {


		const path = hovered[i].path

		context.beginPath()

		if (path[0]) {
			//context.moveTo(path[0][0]*zoom, path[0][1]*zoom)
			context.moveTo(path[0][0], path[0][1])
		}

		for (let p = 1; p < path.length; p++) {
			//context.lineTo(path[p][0]*zoom, path[p][1]*zoom)
			context.lineTo(path[p][0], path[p][1])
		}

		context.closePath()

		context.globalCompositeOperation = "source-over"

		context.fillStyle = "rgba(0, 0, 0, 1)"
		context.fill()
	}

	context.globalCompositeOperation = "source-out"
	context.drawImage(backgroundCanvas, 0, 0)

	if (hovered.length === 1 && hovered[0].path.length && hovered[0].overrideImage) {
		const undisputableHovered = hovered[0]
		// Find the left-topmost point of all the paths
		const entryPosition = getPositionOfEntry(undisputableHovered)
		if (entryPosition) {
			const [startX, startY] = entryPosition
			const overrideImage = new Image()
			const loadingPromise = new Promise((res, rej) => {
				overrideImage.onerror = rej
				overrideImage.onload = res
			})
			overrideImage.src = "imageOverrides/" + undisputableHovered.overrideImage
			try {
				await loadingPromise
				context.globalCompositeOperation = "source-over"
				context.drawImage(overrideImage, startX, startY)
			} catch (ex) {
				console.error("Cannot override image.", ex)
			}
		}
	}

	for (let i = 0; i < hovered.length; i++) {

		const path = hovered[i].path

		context.beginPath()

		if (path[0]) {
			//context.moveTo(path[0][0]*zoom, path[0][1]*zoom)
			context.moveTo(path[0][0], path[0][1])
		}

		for (let p = 1; p < path.length; p++) {
			//context.lineTo(path[p][0]*zoom, path[p][1]*zoom)
			context.lineTo(path[p][0], path[p][1])
		}

		context.closePath()

		context.globalCompositeOperation = "source-over"

		let hoverStrokeStyle
		switch (hovered[i].diff) {
			case "add":
				hoverStrokeStyle = "rgba(0, 155, 0, 1)"
				break
			case "edit":
				hoverStrokeStyle = "rgba(155, 155, 0, 1)"
				break
			default:
				hoverStrokeStyle = "rgba(0, 0, 0, 1)"
				break
		}
		context.strokeStyle = hoverStrokeStyle
		//context.lineWidth = zoom
		context.stroke()
	}

}

window.addEventListener("hashchange", highlightEntryFromUrl)

function highlightEntryFromUrl() {

	const hash = window.location.hash.substring(1); //Remove hash prefix
	let [id, period] = hash.split('/')

	if (id && !period) period = id
	
	if (!period) return

	if (period) {
		const [, targetPeriod, targetVariation] = parsePeriod(period)
		updateTime(targetPeriod, targetVariation, true)
	} else {
		updateTime(defaultPeriod, defaultVariation, true)
	}

}

function initExplore() {

	window.updateHovering = updateHovering
	window.render = function () { }

	function updateHovering(e, tapped) {
		if (!dragging && (!fixed || tapped)) {
			const pos = [
				(e.clientX - (container.clientWidth / 2 - innerContainer.clientWidth / 2 + zoomOrigin[0] + container.offsetLeft)) / zoom
				, (e.clientY - (container.clientHeight / 2 - innerContainer.clientHeight / 2 + zoomOrigin[1] + container.offsetTop)) / zoom
			]
			const coords_p = document.getElementById("coords_p")
			// Displays coordinates as zero instead of NaN
			if (isNaN(pos[0]) == true) {
				coords_p.textContent = "0, 0"
			} else {
				coords_p.textContent = Math.ceil(pos[0]) + ", " + Math.ceil(pos[1])
			}
		}
	}

	renderBackground(atlas)

	applyView()

}

function initGlobal() {
	container.addEventListener("mousemove", function (e) {
		if (e.sourceCapabilities) {
			if (!e.sourceCapabilities.firesTouchEvents) {
				updateHovering(e)
			}
		} else {
			updateHovering(e)
		}
	})
}

function initViewGlobal() {
	container.addEventListener("mousedown", function (e) {
		lastPos = [
			e.clientX
			, e.clientY
		]
	})

	container.addEventListener("touchstart", function (e) {
		if (e.touches.length == 1) {
			lastPos = [
				e.touches[0].clientX
				, e.touches[0].clientY
			]
		}
	}, { passive: true })

	container.addEventListener("mouseup", function (e) {
		if (Math.abs(lastPos[0] - e.clientX) + Math.abs(lastPos[1] - e.clientY) <= 4) {
			toggleFixed(e)
		}
	})

	container.addEventListener("touchend", function (e) {
		e.preventDefault()

		//console.log(e)
		//console.log(e.changedTouches[0].clientX)
		if (e.changedTouches.length == 1) {
			e = e.changedTouches[0]
			//console.log(lastPos[0] - e.clientX)
			if (Math.abs(lastPos[0] - e.clientX) + Math.abs(lastPos[1] - e.clientY) <= 4) {
				//console.log("Foo!!")
				dragging = false
				fixed = false
				setTimeout(
					function () {
						updateHovering(e, true)
					}
					, 10)
			}
		}
	})
}
