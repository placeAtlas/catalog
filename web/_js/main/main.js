/*!
 * The 2022 r/place Catalog
 * Copyright (c) 2017 Roland Rytz <roland@draemm.li>
 * Copyright (c) 2022 Place Atlas contributors
 * Copyright (c) 2022 Hans5958
 * Licensed under AGPL-3.0 (https://hans5958.github.io/place-catalog-2022/license.txt)
 */

const innerContainer = document.getElementById("innerContainer")
const container = document.getElementById("container")
const imageCanvas = document.getElementById('image')
const highlightContext = highlightCanvas.getContext("2d")

imageCanvas.width = canvasSize.x
imageCanvas.height = canvasSize.y

let zoom = 1

if (window.devicePixelRatio) {
	zoom = 1 / window.devicePixelRatio
}

const maxZoom = 128
const minZoom = 0.125

let zoomOrigin = [0, 0]
let scaleZoomOrigin = [canvasCenter.x, canvasCenter.y]

let dragging = false
let lastPosition = [0, 0]

const viewportSize = [0, 0]

// TODO Probably merge both functions
function applyView() {

	//console.log(zoomOrigin, scaleZoomOrigin)
	//console.log(scaleZoomOrigin[0])

	scaleZoomOrigin[0] = Math.max(-canvasCenter.x + canvasOffset.x, Math.min(canvasCenter.x - canvasOffset.x, scaleZoomOrigin[0]))
	scaleZoomOrigin[1] = Math.max(-canvasCenter.y + canvasOffset.y, Math.min(canvasCenter.y - canvasOffset.y, scaleZoomOrigin[1]))
	zoom = Math.max(minZoom, Math.min(maxZoom, zoom))

	zoomOrigin = [scaleZoomOrigin[0] * zoom, scaleZoomOrigin[1] * zoom]

	innerContainer.style.width = (~~(zoom * canvasSize.x)) + "px"
	innerContainer.style.height = (~~(zoom * canvasSize.y)) + "px"

	innerContainer.style.left = ~~(container.clientWidth / 2 - innerContainer.clientWidth / 2 + zoomOrigin[0] + container.offsetLeft) + "px"
	innerContainer.style.top = ~~(container.clientHeight / 2 - innerContainer.clientHeight / 2 + zoomOrigin[1] + container.offsetTop) + "px"

}

function setView(targetX, targetY, targetZoom) {
	
	if (isNaN(targetX)) targetX = null
	if (isNaN(targetY)) targetY = null

	zoom = targetZoom ?? zoom
	if ((targetX ?? null) !== null) scaleZoomOrigin[0] = canvasCenter.x - targetX
	if ((targetY ?? null) !== null) scaleZoomOrigin[1] = canvasCenter.y - targetY

	applyView()

}

function updateHash(...args) {
	const newLocation = new URL(window.location)
	newLocation.hash = formatHash(...args)
	if (location.hash !== newLocation.hash) history.replaceState({}, "", newLocation)
}

if (document.location.host !== prodDomain) document.body.dataset.dev = ""

init()

async function init() {

	let mode = "explore"

	const hash = window.location.hash.substring(1)
	const [hashPeriod, hashX, hashY, hashZoom] = hash.split('/')

	if (hashPeriod) {
		const [, targetPeriod, targetVariation] = parsePeriod(hashPeriod)
		await updateTime(targetPeriod, targetVariation, true)
	} else {
		await updateTime(currentPeriod, currentVariation, true)
	}

	//console.log(document.documentElement.clientWidth, document.documentElement.clientHeight)

	setView(
		(isNaN(hashX) || hashX === '') ? canvasCenter.x : Number(hashX), 
		(isNaN(hashY) || hashY === '') ? canvasCenter.y : Number(hashY), 
		(isNaN(hashZoom) || hashZoom === '') ? zoom : Number(hashZoom)
	)

	let initialPinchDistance = 0
	let initialPinchZoom = 0
	let initialPinchZoomOrigin = [0, 0]

	// let desiredZoom
	// let zoomAnimationFrame

	document.body.dataset.mode = mode

	initGlobal()
	initViewGlobal()
	initExplore()

	document.getElementById("loading").classList.add("d-none")

	document.getElementById("zoomInButton").addEventListener("click", function () {

		/*if(zoomAnimationFrame){
			window.cancelAnimationFrame(zoomAnimationFrame)
		}*/

		const x = container.clientWidth / 2
		const y = container.clientHeight / 2

		initialPinchZoomOrigin = [
			scaleZoomOrigin[0],
			scaleZoomOrigin[1]
		]

		initialPinchZoom = zoom

		lastPosition = [x, y]
		zoom *= 2
		zoom = Math.max(minZoom, Math.min(maxZoom, zoom))

		applyZoom(x, y, zoom)

	})

	document.getElementById("zoomOutButton").addEventListener("click", function () {

		/*if(zoomAnimationFrame){
			window.cancelAnimationFrame(zoomAnimationFrame)
		}*/

		const x = container.clientWidth / 2
		const y = container.clientHeight / 2

		initialPinchZoomOrigin = [
			scaleZoomOrigin[0],
			scaleZoomOrigin[1]
		]

		initialPinchZoom = zoom

		lastPosition = [x, y]
		zoom /= 2
		zoom = Math.max(minZoom, Math.min(maxZoom, zoom))

		applyZoom(x, y, zoom)
	})

	document.getElementById("zoomResetButton").addEventListener("click", function () {
		zoom = 1
		zoomOrigin = [0, 0]
		scaleZoomOrigin = [0, 0]
			applyView()
	})

	container.addEventListener("dblclick", e => {
		/*if(zoomAnimationFrame){
			window.cancelAnimationFrame(zoomAnimationFrame)
		}*/

		const x = e.clientX - container.offsetLeft
		const y = e.clientY - container.offsetTop

		initialPinchZoomOrigin = [
			scaleZoomOrigin[0],
			scaleZoomOrigin[1]
		]

		initialPinchZoom = zoom

		lastPosition = [x, y]

		if (e.ctrlKey) zoom /= 2
		else zoom *= 2

		zoom = Math.max(minZoom, Math.min(maxZoom, zoom))
		applyZoom(x, y, zoom)

		e.preventDefault()
	})


	container.addEventListener("wheel", e => {

		/*if(zoomAnimationFrame){
			window.cancelAnimationFrame(zoomAnimationFrame)
		}*/

		const x = e.clientX - container.offsetLeft
		const y = e.clientY - container.offsetTop

		initialPinchZoomOrigin = [
			scaleZoomOrigin[0],
			scaleZoomOrigin[1]
		]

		initialPinchZoom = zoom

		lastPosition = [x, y]

		// Check if we are zooming by pixels
		// https://developer.mozilla.org/en-US/docs/Web/API/WheelEvent/deltaMode
		if (e.deltaMode === 0) {
			// Scale the pixel delta by the current zoom factor
			// We want to zoom faster when closer, and slower when further
			// This creates a smoother experience
			zoom -= e.deltaY * (0.001 * zoom)
		} else {
			if (e.deltaY > 0) zoom /= 2
			else if (e.deltaY < 0) zoom *= 2
		}

		zoom = Math.max(minZoom, Math.min(maxZoom, zoom))
		applyZoom(x, y, zoom)
		updateHash()
	}, { passive: true })

	/*function setDesiredZoom(x, y, target){
		zoom = (zoom*2 + target)/3
		//console.log(zoom)
		if(Math.abs(1 - zoom/target) <= 0.01){
			zoom = target
		}
		applyZoom(x, y, zoom)
		if(zoom != target){
			zoomAnimationFrame = window.requestAnimationFrame(function(){
				setDesiredZoom(x, y, target)
			})
		}
	}*/

	container.addEventListener("mousedown", e => {
		mousedown(e.clientX, e.clientY)
		e.preventDefault()
	})

	container.addEventListener("touchstart", e => {

		if (e.touches.length === 2) {
			e.preventDefault()
		}

		touchstart(e)

	}, { passive: true })

	function mousedown(x, y) {
		lastPosition = [x, y]
		dragging = true
	}

	function touchstart(e) {

		if (e.touches.length === 1) {

			mousedown(e.touches[0].clientX, e.touches[0].clientY)

		} else if (e.touches.length === 2) {

			initialPinchDistance = Math.sqrt(
				Math.pow(e.touches[0].clientX - e.touches[1].clientX, 2)
				+ Math.pow(e.touches[0].clientY - e.touches[1].clientY, 2)
			)

			initialPinchZoom = zoom
			initialPinchZoomOrigin = [
				scaleZoomOrigin[0],
				scaleZoomOrigin[1]
			]

			mousedown(
				(e.touches[0].clientX + e.touches[1].clientX) / 2 - container.offsetLeft,
				(e.touches[0].clientY + e.touches[1].clientY) / 2 - container.offsetTop
			)

		}

	}

	window.addEventListener("mousemove", e => {
		mousemove(e.clientX, e.clientY)
		if (dragging) {
			e.preventDefault()
		}
	})

	window.addEventListener("touchmove", e => {

		if (e.touches.length === 2 || e.scale > 1) {
			e.preventDefault()
		}

		touchmove(e)

	},
		{ passive: false }
	)

	function mousemove(x, y) {
		if (!dragging) return
		container.style.cursor = "move"

		const deltaX = x - lastPosition[0]
		const deltaY = y - lastPosition[1]
		lastPosition = [x, y]

		zoomOrigin[0] += deltaX
		zoomOrigin[1] += deltaY

		scaleZoomOrigin[0] += deltaX / zoom
		scaleZoomOrigin[1] += deltaY / zoom

			applyView()
	}

	function touchmove(e) {

		if (e.touches.length === 1) {

			mousemove(e.touches[0].clientX, e.touches[0].clientY)

		} else if (e.touches.length === 2) {

			const newPinchDistance = Math.sqrt(
				Math.pow(e.touches[0].clientX - e.touches[1].clientX, 2)
				+ Math.pow(e.touches[0].clientY - e.touches[1].clientY, 2)
			)

			zoom = initialPinchZoom * newPinchDistance / initialPinchDistance

			const x = (e.touches[0].clientX + e.touches[1].clientX) / 2 - container.offsetLeft
			const y = (e.touches[0].clientY + e.touches[1].clientY) / 2 - container.offsetTop

			applyZoom(x, y, zoom)

		}

	}

	function applyZoom(x, y, zoom) {

		const deltaX = x - lastPosition[0]
		const deltaY = y - lastPosition[1]

		const pinchTranslateX = (x - container.clientWidth / 2 - deltaX)
		const pinchTranslateY = (y - container.clientHeight / 2 - deltaY)

		scaleZoomOrigin[0] = initialPinchZoomOrigin[0] + deltaX / zoom + pinchTranslateX / zoom - pinchTranslateX / initialPinchZoom
		scaleZoomOrigin[1] = initialPinchZoomOrigin[1] + deltaY / zoom + pinchTranslateY / zoom - pinchTranslateY / initialPinchZoom

		zoomOrigin[0] = scaleZoomOrigin[0] * zoom
		zoomOrigin[1] = scaleZoomOrigin[1] * zoom

		applyView()
		}

	window.addEventListener("mouseup", e => {
		container.style.cursor = "pointer"
		if (dragging) {
			e.preventDefault()
		}
		mouseup(e.clientX, e.clientY)
	})
	window.addEventListener("touchend", touchend)

	function mouseup() {
		dragging = false
		updateHash()
	}

	function touchend(e) {
		if (e.touches.length === 0) {
			mouseup()
					dragging = false

		} else if (e.touches.length === 1) {
			initialPinchZoom = zoom
			lastPosition = [e.touches[0].clientX, e.touches[0].clientY]
		}

	}

	window.addEventListener("resize", function () {
		//console.log(document.documentElement.clientWidth, document.documentElement.clientHeight)

		applyView()
	})

	document.body.dataset.initDone = ''

}

// Announcement system

const announcementEl = document.querySelector("#headerAnnouncement")
const announcementButton = announcementEl.querySelector('[role=button]')
const announcementText = announcementEl.querySelector('p').textContent.trim()

if (announcementText && announcementText !== window.localStorage.getItem('announcement-closed')) {
	announcementButton.click()
	document.querySelector('#objectsList').style.marginTop = '2.8rem'
}

announcementEl.querySelector('[role=button]').addEventListener('click', () => {
	window.localStorage.setItem('announcement-closed', announcementText)
	document.querySelector('#objectsList').style.marginTop = '0'
})
