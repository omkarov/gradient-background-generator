const color1= document.querySelector(".color1");
const color2= document.querySelector(".color2");
const color3= document.querySelector(".color3");

const gradientBackground = document.querySelector("body");
const cssCode = document.querySelector(".csscode");

function setgb() {
    gradientBackground.style.background = "linear-gradient(to right, "+ color1.value +","+ color2.value + ")" ;

    cssCode.value =  gradientBackground.style.background + ";"
    // console.log(color1.value + " " + color2.value)
}

function setSb(){
  gradientBackground.style.background = color3.value;
  
  cssCode.value =  gradientBackground.style.background + ";"
  // console.log(color1.value + " " + color2.value) 

}

color1.addEventListener("input",setgb);
color2.addEventListener("input",setgb );
color3.addEventListener("input",setSb );



function copy() {
    var copyText = document.querySelector(".csscode");
    copyText.select();
    document.execCommand("copy");
  }
  
  document.querySelector("#copy").addEventListener("click", copy);

//    background: linear-gradient(to right, red,yellow);


