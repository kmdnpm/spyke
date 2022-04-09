// Obtain the img element, and assign it to the image variable
let image = document.querySelector("img") 
image.style.height = "300px"
image.style.width = "300px"

// Obtain the 'shrink-grow' button, and assign it to the changeSize variable
let changeSize = document.getElementById("shrink-grow")

//DO NOT CHANGE THE FOLLOWING CODE
changeSize.addEventListener("click", function() {
  console.log("change size",changeSize)
  console.log("test 10",image.style.height,image.style.width)
  if (image.style.height === "300px" && image.style.width === "300px") {
    image.style.height = "100px"
    image.style.width = "100px"
    
  }
  else {
    image.style.height = "300px"
    image.style.width = "300px"
  }
})


function nightMode(){
let background = document.querySelector("body")
// let toggle = true;
    
    if (background.style.backgroundColor === "black"){
        background.style.color = "black";
        background.style.backgroundColor = "transparent";
    }
    else{
        background.style.color = "white";
        background.style.backgroundColor = "black"
    }

    // while(toggle === "true"){
    //     background.style.color = "black";
    //     background.style.backgroundColor = "transparent"
    // }

}
    let changeTheme = document.getElementById("night-mode")
    changeTheme.addEventListener("click", function(){
        nightMode();
    })
  // let backColor = background.style.backgroundColor;
  // let lineOne = line1.style.color;
  // let lineTwo = line2.style.color;
  // let lineThree = line3.style.color;
  // let lineFour = line4.style.color;
  // let listOne = list1.style.color;
  // let listTwo = list2.style.color;
  // let listThree = list3.style.color;

  // if(backColor==="white" && lineOne==="red" && lineTwo==="black" && lineThree==="black" && lineFour==="black" && listOne==="purple" && listTwo==="purple" && listThree==="purple"){
  
//   background.style.backgroundColor = "black";
//   line1.style.color = "white";
//   line2.style.color = "blue";
//   line3.style.color = "green";
//   line4.style.color = "yellow";
//   list1.style.color = "orange";
//   list2.style.color = "orange";
//   list3.style.color = "orange";
  // }
  // else{
  //    background.style.backgroundColor = "white";
  // line1.style.color = "red";
  // line2.style.color = "black";
  // line3.style.color = "black";
  // line4.style.color = "black";
  // list1.style.color = "purple";
  // list2.style.color = "purple";
  // list3.style.color = "purple";
  // }
  
