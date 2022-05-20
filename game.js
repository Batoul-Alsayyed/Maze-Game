document.addEventListener("DOMContentLoaded",function(){
  let score = 0;
  document.getElementById("start").onclick = function(){clicked()};
  
  function clicked(){
    //reset the score to start
    score = 0;
    document.getElementById("status").innerHTML = "The game started!";
    item = document.getElementsByClassName("boundary example");
    item = document.getElementsByClassName("boundary example");

    item[0].innerHTML = "Score = "+score;
    item[0].innerHTML = "score = "+score;

  };

  list = document.getElementsByClassName("boundary");

  list[0].onmouseover = function () {functiondiv0()}
  function functiondiv0(){
    //console.log("YOU are over div 0! ");
    document.getElementById("status").innerHTML = "You lost!";
    item = document.getElementsByClassName("boundary example");

    item[0].style.backgroundColor = 'red';
    score -=10;
    item[0].innerHTML = "score = "+score;
  }

  list[1].onmouseover = function () {functiondiv1()}
  function functiondiv1(){
    //console.log("YOU are over div 1! ");
    document.getElementById("status").innerHTML = "You lost!";
    item = document.getElementsByClassName("boundary example");

    item[0].style.backgroundColor = 'red';

    score -= 10;
    item[0].innerHTML = "score = "+score;
  }

  list[2].onmouseover = function () {functiondiv2()}
  function functiondiv2(){
    //console.log("YOU are over div 2! ");
    document.getElementById("status").innerHTML = "You lost!";
    item = document.getElementsByClassName("boundary example");

    item[0].style.backgroundColor = 'red';

    score -= 10;
    item[0].innerHTML = "score = "+score;
  }

  list[3].onmouseover = function () {functiondiv3()}
  function functiondiv3(){
    //console.log("YOU are over div 3! ");
    document.getElementById("status").innerHTML = "You lost!";
    item = document.getElementsByClassName("boundary example");

    item[0].style.backgroundColor = 'red';

    score -= 10;
    item[0].innerHTML = "score = "+score;

  }

  list[4].onmouseover = function () {functiondiv4()}

  function functiondiv4(){
    //console.log("YOU are over div 4! ");
    document.getElementById("status").innerHTML = "You lost!";
    item = document.getElementsByClassName("boundary example");

    item[0].style.backgroundColor = 'red';

    score -= 10;
    item[0].innerHTML = "score = "+score;

  }
  var end = document.getElementById("end");
  end.onmouseover = function (){won()}
  function won(){
    //clicked();
    document.getElementById("status").innerHTML = "You won!";
    item = document.getElementsByClassName("boundary example");
    score +=5;
    item[0].innerHTML = "score = "+score;
    console.log(score);
    item[0].style.backgroundColor = 'yellow';
    
  }
    
});

  