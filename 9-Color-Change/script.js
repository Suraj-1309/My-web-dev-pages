
  const colorArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
  function makeNewRandomColor(){
    let color = "#";
    for(let i = 0;i < 6;i++){
        color += colorArr[Math.floor(colorArr.length * Math.random())];
    }
    console.log(color);
    return color;
  }
  
  makeNewRandomColor();

  
  const body = document.querySelector("body");
  const bgHexCodeSpanElement = document.querySelector("#bg-hex-code");
 
  
  function changeBackgroundColor() {
    const color = makeNewRandomColor();
  
    bgHexCodeSpanElement.innerText = color;
    body.style.backgroundColor = color;
  }
  const btn = document.querySelector("#btn");
 
  
  btn.addEventListener("click",changeBackgroundColor);