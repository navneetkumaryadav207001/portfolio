function redirectTo(url) {
    window.location.href = url;
  }
  const faceLeft = document.querySelector('.face-left');
const faceRight = document.querySelector('.face-right');
const thunder = document.querySelector('.thunder');
const personal = document.querySelector("#personal")


const hoverSound = new Audio('finger-snap1.mp3');
hoverSound.volume = 0.15;
hoverSound.playbackRate = 0.85;
faceLeft.addEventListener('mouseenter', () => {
  thunder.style.boxShadow = '-10px 0px 25px 5px yellow';
  hoverSound.currentTime = 0; // Rewind to the start
    hoverSound.play();
});

faceRight.addEventListener('mouseenter', () => {
  thunder.style.boxShadow = '10px 0px 25px 5px yellow';
  hoverSound.currentTime = 0; // Rewind to the start
    hoverSound.play();
});

[faceLeft, faceRight].forEach(face => {
  face.addEventListener('mouseleave', () => {
    thunder.style.boxShadow = '0 0px 5px 5px yellow';
  });
});


function start(){
  document.getElementById("start").remove();
}
