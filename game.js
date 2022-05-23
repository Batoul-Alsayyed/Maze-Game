document.addEventListener("DOMContentLoaded",function(){
  let score = 0;
  // variable to indicate that the game started and set false by default 
  let start = false
  var Interval;

  var seconds = 00;
  var tens = 00;

  document.getElementById("start").onclick = function(){clicked()};
  
  function clicked(){
    start = true
    score = 0;
    document.getElementById("status").innerHTML = "The game started!";
    item = document.getElementsByClassName("boundary example");
    item[0].style.backgroundColor = 'white';
    item[0].innerHTML = "Score = "+score;

    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);  // millisecond 10 = 0.01 second
  };

  list = document.getElementsByClassName("boundary");

  list[0].onmouseover = function () {functiondiv0()}
  function functiondiv0(){
    if (start){
    document.getElementById("status").innerHTML = "You lost!";
    item = document.getElementsByClassName("boundary example");

    item[0].style.backgroundColor = 'red';
    score -=10;
    item[0].innerHTML = "score = "+score;
  }
}
  list[1].onmouseover = function () {functiondiv1()}
  function functiondiv1(){
    if (start){
    document.getElementById("status").innerHTML = "You lost!";
    item = document.getElementsByClassName("boundary example");

    item[0].style.backgroundColor = 'red';

    score -= 10;
    item[0].innerHTML = "score = "+score;
  }
}
  list[2].onmouseover = function () {functiondiv2()}
  function functiondiv2(){
    if (start){
    document.getElementById("status").innerHTML = "You lost!";
    item = document.getElementsByClassName("boundary example");

    item[0].style.backgroundColor = 'red';

    score -= 10;
    item[0].innerHTML = "score = "+score;
  }
}
  list[3].onmouseover = function () {functiondiv3()}
  function functiondiv3(){
    if (start){
    document.getElementById("status").innerHTML = "You lost!";
    item = document.getElementsByClassName("boundary example");

    item[0].style.backgroundColor = 'red';

    score -= 10;
    item[0].innerHTML = "score = "+score;

  }
}
  list[4].onmouseover = function () {functiondiv4()}

  function functiondiv4(){
        if (start){
        document.getElementById("status").innerHTML = "You lost!";
        item = document.getElementsByClassName("boundary example");

        item[0].style.backgroundColor = 'red';

        score -= 10;
        item[0].innerHTML = "score = "+score;
      }
  }
  var end = document.getElementById("end");
  end.onmouseover = function (){won()}
  function won(){
    if (start){
      document.getElementById("status").innerHTML = "You won!";
      item = document.getElementsByClassName("boundary example");
      score +=5;
      item[0].innerHTML = "score = "+score;
      console.log(score);
      item[0].style.backgroundColor = 'yellow';
    

      //reset timer 

      clearInterval(Interval);
      tens = "00";
      seconds = "00";
      OutputSeconds.innerHTML = seconds;
      OutputTens.innerHTML = tens;
    }
  }
  
  e1 = document.querySelector("p").innerText = 'Time stats: '
  document.querySelector("p").style.textAlign = 'center'


  const h1 = document.createElement("H1");
  const textNode = document.createTextNode("Live: ");
  h1.appendChild(textNode);
  document.body.appendChild(h1);

  const OutputSeconds  = document.createElement("H1");
  const textNode2 = document.createTextNode("00 ");
  OutputSeconds .appendChild(textNode2);
  document.body.appendChild(OutputSeconds );

  const OutputTens   = document.createElement("H1");
  const textNode3 = document.createTextNode("00 ");
  OutputTens.appendChild(textNode3);
  document.body.appendChild(OutputTens);

  //OutputTens.innerHTML+="hryyyyyyyyyyyyyyyyyy"
    function startTimer(){
        tens++;
        if(tens <= 9){
            OutputTens.innerHTML = "0" + tens;
        }

        if(tens > 9){
            OutputTens.innerHTML = tens;
        }

        if(tens > 99){
            seconds++;
            OutputSeconds.innerHTML = "0" + seconds;
            tens = 0;
            OutputTens.innerHTML = "0" + 0;
        }

        if(seconds > 9){
            OutputSeconds.innerHTML = seconds;
        }
    }
});

  