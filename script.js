const correctOrder = [
  'draggable1',
  'draggable2',
  'draggable3',
  'draggable4',
  'draggable5',
  'draggable6',
  'draggable7',
  'draggable8',
  'draggable9',
  'draggable10',
  'draggable11',
  'draggable12',
  'draggable13'
]

function dragStart(event) {
  event.dataTransfer.setData('text/plain', event.target.id)
}

function onDrop(event) {
  event.preventDefault()
  const id = event.dataTransfer.getData('text')
  const draggableElement = document.getElementById(id)
  const dropzone = event.target
  
  if(dropzone.classList.contains('dropzone')) {
    draggableElement.style.margin = '-4px'
    dropzone.appendChild(draggableElement)
  }

  event.dataTransfer.clearData()
}

function checkOrder() {
  const dropzone = document.getElementById('dropzone')
  const children = Array.from(dropzone.children)
  const ids = children.map(child => child.id)

  if (JSON.stringify(ids) === JSON.stringify(correctOrder)) {
    alert("ORDEM CORRETA!")
  } else {
    alert("ORDEM INCORRETA!")
  }
}
  
function reloadPage() { location.reload() }
function dragOver(event) { event.preventDefault() }

function getRandomPosition(element) {
  const slider = document.querySelector('body')
  const sliderHeight = slider.clientHeight
  const elementHeight = element.clientHeight
  const randomY = Math.floor(Math.random() * (sliderHeight - elementHeight))

  console.log('Altura do contêiner:', sliderHeight)

  return { top: Math.max(0, randomY) }
}

function moveImageRandomly() {
    const image = document.querySelector('.python')
    const newPosition = getRandomPosition(image)

    image.style.top = `${newPosition.top}px`
}

setInterval(moveImageRandomly, 4000)
moveImageRandomly()
console.log('Slider dimensions:', document.querySelector('body').getBoundingClientRect())