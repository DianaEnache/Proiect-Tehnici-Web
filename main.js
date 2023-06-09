
//EVENT

const buttonToBeClicked = document.getElementById("example-button");

const resetButton = document.getElementById("reset-button");

// textul cu care butonul este initializat
const initialText = buttonToBeClicked.textContent;

// textul ce apare dupa ce a fost apasat butonul
const clickedText = "ADDED TO FAVORITE";


function eventListener() {
  buttonToBeClicked.textContent = clickedText;
}

function addListener() {
  buttonToBeClicked.addEventListener("click", eventListener, {
    passive: true,
    once: true,
  });
}


resetButton.addEventListener("click", () => {
  buttonToBeClicked.textContent = initialText;
  addListener();
});

addListener();

//EVENT END

//pentru download buttons

function myFunction() {
  alert('THE GAME HAS BEEN DOWNLOADED FOR PC...');
}

function myFunction2() {
  alert('THE GAME HAS BEEN DOWNLOADED FOR XBOX...');
}

function myFunction3() {
  alert('THE GAME HAS BEEN DOWNLOADED  FOR PS...');
}


//IMAGINE CARE DANSEAZA
//manipulare obiecte

function changeImage() {
  var image = document.getElementById('myImage');
  if (image.src.match("vaca2")) {
    image.src = "imagini/vaca.png";
  } else {
    image.src = "imagini/vaca2.png";
  }
}



