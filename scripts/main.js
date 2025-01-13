let myImage = document.querySelector("img");

myImage.onclick = function () {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "images/abc.png") {
        myImage.setAttribute("src", "images/def.png");
    }
    else {
        myImage.setAttribute("src", "images/abc.png");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName(exclamation) {
    let myName = prompt("Please enter your name!" + exclamation);
    if(!myName || myName == null) {
        setUserName(exclamation + '!');
    }
    else {
        localStorage.setItem("name", myName);
        myHeading.innerHTML = "Mozilla is cool, " + myName;
    }
}

if (!localStorage.getItem("name")) {
    setUserName('');
} else {
    let storedName = localStorage.getItem("name");
    myHeading.innerHTML = "Mozilla is cool, " + storedName;
}

myButton.onclick = function () {
    setUserName('');
};
  