const slide = document.getElementById('slide')
window.onmousemove = e => {
	const x = e.clientX
	console.log(x)
	slide.style.left = `${x}px` 
}