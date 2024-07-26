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
