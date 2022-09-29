var container1 = document.getElementById("container");

let rectangle = document.createElement("div");
rectangle.classList.add("container2");
container1.appendChild(rectangle);

function bounceBall(ball) {
  console.log(ball)
  let flag = true;
  let top = parseInt(ball.style.top);
  let bottom = rectangle.offsetHeight - 5;

  let id = setInterval(() => {
    //when the flag is true, ball goes to bottm;
    if (flag) {
      ball.style.top = parseInt(ball.style.top) + 1 + "px";
      //when the flag becomes false it goes to top
    } else {
      ball.style.top = parseInt(ball.style.top) - 1 + "px";
    }

    //need to store top variable to make the flag false, so that ball can move to the top again
    let temp = parseInt(ball.style.top);
    // console.log(temp)
    //bottom - 10, becuase if ball comes to the bottom of rectange, then it should go to the top
    if (flag && temp === bottom - 10) {
      flag = false;
    }

    //make flag true
    if (!flag && temp === top + 10) {
      flag = true;
      top = temp;
      // console.log(top)
    }

    if (top + 10 > bottom - 10) {
      console.log(top + 10);
      console.log(bottom + 10)
      clearInterval(id);
      setTimeout(() => {
        ball.style.display = "none";
      }, 1000);
    }
  }, 20);
}

function getClickPosition(event) {
var letters = '0123456789ABCDEF';
var color = '#';
for (var i = 0; i < 6; i++) {
  color += letters[Math.floor(Math.random() * 16)];
}
  let ball = document.createElement("div");
  ball.classList.add("bll");
  ball.style.backgroundColor = color;
  ball.style.top = event.layerY + "px";
  ball.style.left = event.layerX + "px";
  ball.style.border = "2px solid black"
  rectangle.appendChild(ball, event);
  const audio = new Audio();
  audio.src = "./sound.wav"
  audio.play()
  bounceBall(ball);
}
rectangle.addEventListener("click", getClickPosition);
