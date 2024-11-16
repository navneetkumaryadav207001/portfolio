function redirectTo(url) {
    console.log("happy");
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


const cursorInner = document.createElement("div");
cursorInner.classList.add("cursor-inner");

document.body.appendChild(cursorInner);


// Function to move the cursor elements
document.addEventListener("mousemove", function (e) {
  cursorInner.style.zIndex = 3;
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  

  cursorInner.style.left = `${mouseX}px`;
  cursorInner.style.top = `${mouseY}px`;
});

const hoverableObject = document.querySelector(".clickable");

// Increase cursor size on hover over the object
hoverableObject.addEventListener("mouseenter", () => {
  growCursor();
});
hoverableObject.addEventListener("mouseleave", () => {
  resetCursor();
});
hoverableObject.addEventListener("click", () => {
  resetCursor();
});

function growCursor()
{
  cursorInner.style.width = "20px"; // Increase inner cursor size
  cursorInner.style.height = "20px";
  cursorInner.style.backgroundColor = "black";
  cursorInner.style.border = "1px solid white";
}
function resetCursor()
{
  cursorInner.style.width = "16px"; // Reset inner cursor size
  cursorInner.style.height = "16px";
  cursorInner.style.backgroundColor = "white";
  cursorInner.style.border = "1px solid black";
}
