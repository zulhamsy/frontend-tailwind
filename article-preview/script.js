const share = document.getElementById('share')
const body = document.querySelector('body')
const controlContainer = document.getElementById('control')
const shareIcon = document.getElementById('shareicon')
const shareControl = document.getElementById('share-control')

const classToggle = ['opacity-100', 'top-0']

// toggle share tooltip
share.addEventListener('click', function() {
	share.classList.toggle('bg-des_blue')
	shareIcon.classList.toggle('fill-white')
	classToggle.map((classItem) => {
		shareControl.classList.toggle(classItem)
	})
})

// prevent untoggling from control
controlContainer.addEventListener('click', function(e) {
	e.stopPropagation()
})

// un-toggle share tooltip from outer
body.addEventListener('click', function() {
	share.classList.remove('bg-des_blue')
	shareIcon.classList.remove('fill-white')
	classToggle.map((classItem) => {
		shareControl.classList.remove(classItem)
	})
})