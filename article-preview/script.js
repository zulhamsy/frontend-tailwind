const share = document.getElementById('share')
const body = document.querySelector('body')
const control = document.getElementById('control')
const shareIcon = document.getElementById('shareicon')
const shareControl = document.getElementById('share-control')

// toggle share tooltip
share.addEventListener('click', function() {
	share.classList.toggle('bg-des_blue')
	shareIcon.classList.toggle('fill-white')
	shareControl.classList.toggle('opacity-100')
	shareControl.classList.toggle('top-0')
})

// prevent untoggling from control
control.addEventListener('click', function(e) {
	e.stopPropagation()
})

// un-toggle share tooltip from outer
body.addEventListener('click', function() {
	share.classList.remove('bg-des_blue')
	shareIcon.classList.remove('fill-white')
	shareControl.classList.remove('opacity-100')
	shareControl.classList.remove('top-0')
})