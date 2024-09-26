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

let draggedElement = null

function dragStart(event) {
  draggedElement = event.target

  if (event.type === 'touchstart') {
    const touch = event.touches[0]

    event.target.style.position = 'absolute'
    event.target.style.left = `${touch.clientX - event.target.offsetWidth / 2}px`
    event.target.style.top = `${touch.clientY - event.target.offsetHeight / 2}px`
  } else {
    event.dataTransfer.setData('text/plain', event.target.id)
  }
}

function touchMove(event) {
  const touch = event.touches[0]
  draggedElement.style.left = `${touch.clientX - draggedElement.offsetWidth / 2}px`
  draggedElement.style.top = `${touch.clientY - draggedElement.offsetHeight / 2}px`

  const element = document.elementFromPoint(touch.clientX, touch.clientY)
  
  if (element && element.classList.contains('dropzone')) {
    event.preventDefault()
  }
}

function onDrop(event) {
  event.preventDefault()
  const dropzone = event.target

  if (dropzone.classList.contains('dropzone')) {
    draggedElement.style.position = 'static'
    draggedElement.style.margin = '-4px'
    dropzone.appendChild(draggedElement)
  }

  draggedElement = null
}

function dragOver(event) { event.preventDefault() }

function touchEnd(event) {
  const touch = event.changedTouches[0]
  const element = document.elementFromPoint(touch.clientX, touch.clientY)
  
  if (element && element.classList.contains('dropzone')) {
    draggedElement.style.margin = '-4px'
    element.appendChild(draggedElement)
  }

  draggedElement.style.position = 'static'
  draggedElement = null
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

document.querySelectorAll('.draggable').forEach(item => {
  item.addEventListener('dragstart', dragStart)
  item.addEventListener('touchstart', dragStart)
  item.addEventListener('touchmove', touchMove)
  item.addEventListener('touchend', touchEnd)
})

const dropzone = document.getElementById('dropzone')
dropzone.addEventListener('dragover', dragOver)
dropzone.addEventListener('drop', onDrop)
dropzone.addEventListener('touchmove', touchMove)
dropzone.addEventListener('touchend', touchEnd)