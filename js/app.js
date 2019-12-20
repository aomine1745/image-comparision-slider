const slide = document.getElementById('slide')
window.onmousemove = e => {
	const x = e.clientX
	slide.style.left = `${x}px` 
}