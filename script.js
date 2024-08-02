const correctOrder = ['draggable1', 'draggable2', 'draggable3', 'draggable4']
function dragStart(event) {
    event
      .dataTransfer
      .setData('text/plain', event.target.id);
 
    event
      .currentTarget
      .style
      .backgroundColor = 'yellow';
  }
  function onDrop(event) {
    const id = event
      .dataTransfer
      .getData('text');
      const draggableElement = document.getElementById(id)
      const dropzone = event.target
      dropzone.appendChild(draggableElement)
    event
    .dataTransfer
    .clearData();
  }
  function checkOrder() {
    const dropzone = document.getElementById('dropzone');
    const children = Array.from(dropzone.children);
    const ids = children.map(child => child.id);
   
    if (JSON.stringify(ids) === JSON.stringify(correctOrder)) {
      document.getElementById('result').innerText = 'Ordem correta!';
    } else {
      document.getElementById('result').innerText = 'Ordem incorreta!';
    }
  }
  function reloadPage(){
    location.reload()
  }
    function dragOver(event) {
    event.preventDefault();
  }
  function getRandomPosition(element) {
    const slider = document.querySelector('.slider');
    const sliderWidth = slider.clientWidth;
    const sliderHeight = slider.clientHeight;
    const elementWidth = element.clientWidth;
    const elementHeight = element.clientHeight;

    const randomX = Math.floor(Math.random() * (sliderWidth - elementWidth));
    const randomY = Math.floor(Math.random() * (sliderHeight - elementHeight));

    return { top: randomY, left: randomX };
}

function moveImageRandomly() {
    const image = document.querySelector('.python');
    const newPosition = getRandomPosition(image);

    image.style.top = `${newPosition.top}px`;
    image.style.left = `${newPosition.left}px`;
}

// Move the image to a random position every 2 seconds
setInterval(moveImageRandomly, 4000);

// Initial random position
moveImageRandomly();