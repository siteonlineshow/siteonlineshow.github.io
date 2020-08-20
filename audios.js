window.addEventListener('load', () =>{
  const sons = document.querySelectorAll('.som')
  const pads = document.querySelectorAll('.audio div')

  pads.forEach((pad, index) => {
    pad.addEventListener('click', function() {
      sons[index].currentTime = 0;
      sons[index].play();
    })
  })
})
