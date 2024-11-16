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
  document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);
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
let bool = false;

function change()
{
  if(!bool)
  {faceLeft.style.zIndex = 1; bool = true;}
  else{faceLeft.style.zIndex = 0;bool = false;}
}

// Swipe detection function
function onSignificantSwipe(container, callback, threshold = 50) {
  let touchStartX = 0;
  let touchStartY = 0;
  let touchEndX = 0;
  let touchEndY = 0;

  container.addEventListener('touchstart', (event) => {
    event.preventDefault()
      touchStartX = event.changedTouches[0].clientX;
      touchStartY = event.changedTouches[0].clientY;
  });

  container.addEventListener('touchend', (event) => {
      touchEndX = event.changedTouches[0].clientX;
      touchEndY = event.changedTouches[0].clientY;

      handleSwipe();
  });

  function handleSwipe() {
      const deltaX = touchEndX - touchStartX;
      const deltaY = touchEndY - touchStartY;

      if (Math.abs(deltaX) > threshold || Math.abs(deltaY) > threshold) {
          if (Math.abs(deltaX) > Math.abs(deltaY)) {
              // Horizontal swipe
              if (deltaX > 0) {
                  callback('right'); // Swipe to the right
              } else {
                  callback('left'); // Swipe to the left
              }
          } else {
              // Vertical swipe
              if (deltaY > 0) {
                  callback('down'); // Swipe down
              } else {
                  callback('up'); // Swipe up
              }
          }
      }
  }
}

// Adding swipe detection to the container
const container = document.querySelector(".container")

// Call the swipe detection function and define custom logic for each direction
onSignificantSwipe(container, (direction) => {
  switch (direction) {
      case 'left':
        if(!bool)
          {faceLeft.style.zIndex = 1; bool = true;}
          else{faceLeft.style.zIndex = 0;bool = false;}
          break;
        case 'right':
          if(!bool)
            {faceLeft.style.zIndex = 1; bool = true;}
            else{faceLeft.style.zIndex = 0;bool = false;}
            break;
  }
});
