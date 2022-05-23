document.addEventListener("DOMContentLoaded",function(){
  let score = 0;
  // variable to indicate that the game started and set false by default 
  let start = false
  document.getElementById("start").onclick = function(){clicked()};
  
  function clicked(){
    start = true
    score = 0;
    document.getElementById("status").innerHTML = "The game started!";
    item = document.getElementsByClassName("boundary example");

    item[0].innerHTML = "Score = "+score;

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
    
    }
  }
});

  