function redirect(url,bool) {
  console.log("clicked");
  if (!isMobileDevice() || bool) {
    console.log("redirecting");
    window.location.href = url;
  }
}

function PersonalGo()
{
  console.log("redirecting");
  window.location.href = "/personal.html";
}
function ProffesionalGO()
{
  console.log("redirecting");
  window.location.href = "/professional.html";
}

function isMobileDevice() {
  return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}



const faceLeft = document.querySelector('.face-left');
const faceRight = document.querySelector('.face-right');
const thunder = document.querySelector('.thunder');
const personal = document.querySelector("#personal");
const change1 = document.querySelector("#change1");
const change2 = document.querySelector("#change2")


const hoverSound = new Audio('finger-snap1.mp3');
hoverSound.volume = 0.15;
hoverSound.playbackRate = 0.85;
faceLeft.addEventListener('mouseenter', () => {
  thunder.style.boxShadow = '-10px 0px 25px 5px yellow';
  hoverSound.currentTime = 0; // Rewind to the start
    hoverSound.play();
    if(isMobileDevice() && window.innerWidth <= 600)
    {
      change1.style.display = "flex";
      change1.style.zIndex = 2;
    }
});

faceRight.addEventListener('mouseenter', () => {
  thunder.style.boxShadow = '10px 0px 25px 5px yellow';
  hoverSound.currentTime = 0; // Rewind to the start
    hoverSound.play();
    if(isMobileDevice() && window.innerWidth <= 600)
      {
        change2.style.display = "flex";
        change2.style.zIndex = 2;
      }
    
});

[faceLeft, faceRight].forEach(face => {
  face.addEventListener('mouseleave', () => {
    thunder.style.boxShadow = '0 0px 5px 5px yellow';
    if(isMobileDevice() && window.innerWidth <= 600)
      {
        change1.style.display = "none";
        change2.style.display = "none";
        change1.style.zIndex = 1;
              change2.style.zIndex = 1;
      }
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
let bool = false;

// Swipe detection function
function onSignificantSwipe(container, callback, threshold = 50) {
  let touchStartX = 0;
  let touchStartY = 0;
  let touchEndX = 0;
  let touchEndY = 0;
  let isSwipe = false;

  container.addEventListener('touchstart', (event) => {
      touchStartX = event.changedTouches[0].clientX;
      touchStartY = event.changedTouches[0].clientY;
      isSwipe = false; // Reset swipe detection
  });

  container.addEventListener('touchend', (event) => {
      touchEndX = event.changedTouches[0].clientX;
      touchEndY = event.changedTouches[0].clientY;

      const deltaX = touchEndX - touchStartX;
      const deltaY = touchEndY - touchStartY;

      // Check if it's a swipe
      if (Math.abs(deltaX) > threshold || Math.abs(deltaY) > threshold) {
          isSwipe = true;
          if (Math.abs(deltaX) > Math.abs(deltaY)) {
              callback(deltaX > 0 ? 'right' : 'left'); // Horizontal swipe
          } else {
              callback(deltaY > 0 ? 'down' : 'up'); // Vertical swipe
          }
      }
  });

  container.addEventListener('click', (event) => {
      if (isSwipe) {
          // If it was a swipe, prevent default action for the click
          event.preventDefault();
          
      }
      // If it’s a normal click, let the default action occur
  });
}


// Adding swipe detection to the container
const container = document.querySelector(".container")

// Call the swipe detection function and define custom logic for each direction
onSignificantSwipe(container, (direction) => {
  switch (direction) {
      case 'left':
        if(!bool)
          {faceLeft.style.zIndex = 1; bool = true;personal.style.opacity = 1;if(isMobileDevice())
            {
              change1.style.display = "none";
              change2.style.display = "none";
            }}
          else{faceLeft.style.zIndex = 0;bool = false;personal.style.opacity = 0;if(isMobileDevice())
            {
              change1.style.display = "none";
              change2.style.display = "none";
              change1.style.zIndex = 1;
              change2.style.zIndex = 1;
            }}
          break;
        case 'right':
          if(!bool)
            {faceLeft.style.zIndex = 1; bool = true;personal.style.opacity = 1;if(isMobileDevice())
              {
                change1.style.display = "none";
                change2.style.display = "none";
                change1.style.zIndex = 1;
              change2.style.zIndex = 1;
              }}
            else{faceLeft.style.zIndex = 0;bool = false;personal.style.opacity = 0;if(isMobileDevice())
              {
                change1.style.display = "none";
                change2.style.display = "none";
                change1.style.zIndex = 1;
              change2.style.zIndex = 1;
              }}
            break;
  }
});

function handleResize() {
  const div = document.getElementById("change");
  if (window.innerWidth <= 600 && !isMobileDevice()) {
    div.style.display = "flex";
  } else {
    div.style.display = "none";
  }
}

// Attach the event listener
window.addEventListener("resize", handleResize);

// Initial check when the page loads
handleResize();
